import { Handler } from "@netlify/functions";
import { GetById } from "./get";
import { Query } from "./query";

export const handler: Handler = async (event, context) => {
  console.log("cheguei? :::::::");
  event.headers["Access-Control-Allow-Origin"] = "*";
  event.headers["Access-Control-Allow-Headers"] = "*";
  event.headers["Access-Control-Allow-Methods"] = "*";

  const auth = event.queryStringParameters?.key;
  if (!auth || auth !== `${process.env.VITE_MUSIC_API_KEY}`) {
    return {
      statusCode: 401,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        message: `Unauthorized`,
      }),
    };
  }

  if (event.httpMethod === "GET" && /.*\/notion\/database$/.test(event.path)) {
    const data = await GetById(event.queryStringParameters?.id);
    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(data),
    };
  }

  if (
    event.httpMethod === "POST" &&
    /.*\/notion\/database$/.test(event.path) &&
    event.queryStringParameters?.action === "query"
  ) {
    console.log("to aqui????");
    const body = JSON.parse(event.body || "{}");
    const data = await Query(event.queryStringParameters?.id, body);
    console.log("data :::::::::", data);
    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Methods": "*",
      },
      body: JSON.stringify(data),
    };
  }

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*",
      "Access-Control-Allow-Methods": "*",
    },
    body: JSON.stringify({
      message: `Hello, world!`,
    }),
  };
};
