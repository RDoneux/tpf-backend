import middy from "@middy/core";
import httpJsonBodyParserMiddleware from "@middy/http-json-body-parser";
import { ExampleEntity } from "../entities/example.entity";
import { getDataSource } from "../persistance/data-source";

export const exampleGet = middy().handler(async () => {
  try {
    const exampleRepository = (await getDataSource()).getRepository(
      ExampleEntity
    );

    const users = await exampleRepository.find();
    return {
      statusCode: 200,
      body: JSON.stringify(users),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: "Internal Server Error",
        error: error.message,
      }),
    };
  }
});

export const examplePost = middy()
  .use(httpJsonBodyParserMiddleware())
  .handler((event) => {
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: event.body,
      }),
    };
  });
