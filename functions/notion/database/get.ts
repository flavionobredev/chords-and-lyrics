import notion from "../client";

export const GetById = async (id: string | undefined) => {
  if (!id) {
    throw new Error("Missing database id");
  }
  const response = await notion.databases.retrieve({ database_id: id });
  return {
    id: response.id,
    properties: response.properties || {},
  };
};
