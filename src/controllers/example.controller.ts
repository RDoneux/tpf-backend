import middy from "@middy/core";
import httpJsonBodyParserMiddleware from "@middy/http-json-body-parser";
import { exampleRepository } from "../repositories/example.repository";

export const exampleGet = middy().handler(async () => {
  try {
    const users = await (await exampleRepository()).find();
    return {
      statusCode: 200,
      body: JSON.stringify(users),
    };
  } catch (error: unknown) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: "Internal Server Error",
        error: (error as Error).message,
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
