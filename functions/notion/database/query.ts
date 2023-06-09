import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import notion from "../client";

export const Query = async (
  id: string | undefined,
  data?: { size: number }
) => {
  if (!id) {
    throw new Error("Missing database id");
  }
  const response = await notion.databases.query({
    database_id: id,
    page_size: data?.size || 10,
  });

  reduceResults(response.results as unknown as PageObjectResponse[]);

  return {
    ...response,
    results: reduceResults(response.results as unknown as PageObjectResponse[]),
  };
};

const reduceResults = (results: Array<PageObjectResponse>) => {
  return results.map((result) => {
    return {
      id: result.id,
      object: result.object,
      properties: result.properties,
      last_edited_time: result.last_edited_time,
      created_time: result.created_time,
    };
  });
};
