import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";

const config = new pulumi.Config();

const projectName = config.require("projectname");
const serviceName = config.require("servicename");

const resourcePrefix = `${projectName}-${serviceName}`;

const infrastructureStack = new pulumi.StackReference(
  "organization/tpf-infrastructure/dev"
);

const port = infrastructureStack
  .getOutput("port")
  .apply((port: number) => port);
const endpoint = infrastructureStack
  .getOutput("endpoint")
  .apply((endpoint: string) => endpoint);
const dbUser = infrastructureStack
  .getOutput("dbUser")
  .apply((dbUser: string) => dbUser);
const dbPassword = infrastructureStack
  .getOutput("dbPassword")
  .apply((dbPassword: string) => dbPassword);

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
  timeout: 30,
  environment: {
    variables: {
      DB_HOST: endpoint,
      DB_PORT: pulumi.interpolate`${port}`,
      DB_NAME: "tpf_db",
      DB_USER: dbUser,
      DB_PASSWORD: dbPassword,
    },
  },
});

const functionUrl = new aws.lambda.FunctionUrl(`${resourcePrefix}-lambda-url`, {
  functionName: lambdaFunction.name,
  authorizationType: "AWS_IAM",
});

export const lambdaFunctionName = lambdaFunction.name;
export const url = functionUrl.functionUrl;
