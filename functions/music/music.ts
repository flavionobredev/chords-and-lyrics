import { Handler } from "@netlify/functions";
import axios from "axios";

export const handler: Handler = async (event, context) => {
  // const { data } = await axios.get(
  //   "https://www.letras.mus.br/comunidade-catolica-shalom/1419784/"
  // );

  const url = event.queryStringParameters?.url;
  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({
      message: `Hello, world!`,
    }),
  };
};
