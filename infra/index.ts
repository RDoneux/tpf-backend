import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";
import * as awsx from "@pulumi/awsx";

export default (async () => {
  const config = new pulumi.Config();

  const projectName = config.require("projectname");
  const serviceName = config.require("servicename");

  const resourcePrefix = `${projectName}-${serviceName}`;

  const lambdaRole = new aws.iam.Role(`${resourcePrefix}-lambda-role`, {
    assumeRolePolicy: aws.iam.assumeRolePolicyForPrincipal({
      Service: "lambda.amazonaws.com",
    }),
  });

  new aws.iam.RolePolicyAttachment(`${resourcePrefix}-lambda-role-attachment`, {
    role: lambdaRole.name,
    policyArn: aws.iam.ManagedPolicy.AWSLambdaBasicExecutionRole,
  });

  const lambdaFunction = new aws.lambda.Function("lambda-function", {
    runtime: aws.lambda.Runtime.NodeJS22dX,
    role: lambdaRole.arn,
    handler: "index.handler",
    code: new pulumi.asset.FileArchive("../dist"),
  });

  const functionUrl = new aws.lambda.FunctionUrl(`${resourcePrefix}-lambda-url`, {
    functionName: lambdaFunction.name,
    authorizationType: "AWS_IAM",
  });
  

  return {
    lambdaFunctionName: lambdaFunction.name,
    functionUrl: functionUrl.functionUrl, // Export the Function URL
  }
})();
