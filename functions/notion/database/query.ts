import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import notion from "../client";

const mock = {
  object: "list",
  results: [
    {
      id: "b393df3f-3437-44f6-aefe-3c1a2e04f897",
      object: "page",
      properties: {
        Autor: {
          id: "eSJ%7D",
          type: "multi_select",
          multi_select: [
            {
              id: "cf50a9ff-5601-433b-ab59-fc2d1e28fe4c",
              name: "Comunidade Católica Shalom",
              color: "yellow",
            },
          ],
        },
        Liturgia: {
          id: "gAMc",
          type: "multi_select",
          multi_select: [
            {
              id: "04c9c8cb-76d5-40d7-99ef-fac19400e395",
              name: "Pentecostes",
              color: "default",
            },
          ],
        },
        interprete: {
          id: "sTz%3B",
          type: "multi_select",
          multi_select: [],
        },
        Origem: {
          id: "uZx%3C",
          type: "multi_select",
          multi_select: [
            {
              id: "56bb0662-6b73-4dec-a32f-d49ad100f3c9",
              name: "Reciclagem",
              color: "red",
            },
          ],
        },
        Momento: {
          id: "~ZfO",
          type: "multi_select",
          multi_select: [
            {
              id: "7051c5c8-98ad-4d55-9240-fcb014276edf",
              name: "Ação de graças",
              color: "yellow",
            },
            {
              id: "4a97f7f7-ba2d-450b-b991-931f90b0bd38",
              name: "Oração",
              color: "gray",
            },
            {
              id: "2bf3b031-81f4-415f-ae3f-d3d46ab0a430",
              name: "Espirito",
              color: "purple",
            },
          ],
        },
        Name: {
          id: "title",
          type: "title",
          title: [
            {
              type: "text",
              text: {
                content: "Ó infinito amor",
                link: null,
              },
              annotations: {
                bold: false,
                italic: false,
                strikethrough: false,
                underline: false,
                code: false,
                color: "default",
              },
              plain_text: "Ó infinito amor",
              href: null,
            },
          ],
        },
      },
      last_edited_time: "2023-05-28T15:43:00.000Z",
      created_time: "2023-05-28T15:39:00.000Z",
    },
    {
      id: "fcf74eb2-bad1-402e-813b-b4dd14161585",
      object: "page",
      properties: {
        Autor: {
          id: "eSJ%7D",
          type: "multi_select",
          multi_select: [
            {
              id: "cf50a9ff-5601-433b-ab59-fc2d1e28fe4c",
              name: "Comunidade Católica Shalom",
              color: "yellow",
            },
          ],
        },
        Liturgia: {
          id: "gAMc",
          type: "multi_select",
          multi_select: [],
        },
        interprete: {
          id: "sTz%3B",
          type: "multi_select",
          multi_select: [],
        },
        Origem: {
          id: "uZx%3C",
          type: "multi_select",
          multi_select: [],
        },
        Momento: {
          id: "~ZfO",
          type: "multi_select",
          multi_select: [
            {
              id: "4a97f7f7-ba2d-450b-b991-931f90b0bd38",
              name: "Oração",
              color: "gray",
            },
            {
              id: "2bf3b031-81f4-415f-ae3f-d3d46ab0a430",
              name: "Espirito",
              color: "purple",
            },
          ],
        },
        Name: {
          id: "title",
          type: "title",
          title: [
            {
              type: "text",
              text: {
                content: "Vinho novo",
                link: null,
              },
              annotations: {
                bold: false,
                italic: false,
                strikethrough: false,
                underline: false,
                code: false,
                color: "default",
              },
              plain_text: "Vinho novo",
              href: null,
            },
          ],
        },
      },
      last_edited_time: "2023-04-23T12:11:00.000Z",
      created_time: "2023-04-22T19:32:00.000Z",
    },
    {
      id: "6569a7d5-8ba6-4610-9a12-7f8beca6c0ac",
      object: "page",
      properties: {
        Autor: {
          id: "eSJ%7D",
          type: "multi_select",
          multi_select: [],
        },
        Liturgia: {
          id: "gAMc",
          type: "multi_select",
          multi_select: [],
        },
        interprete: {
          id: "sTz%3B",
          type: "multi_select",
          multi_select: [],
        },
        Origem: {
          id: "uZx%3C",
          type: "multi_select",
          multi_select: [],
        },
        Momento: {
          id: "~ZfO",
          type: "multi_select",
          multi_select: [],
        },
        Name: {
          id: "title",
          type: "title",
          title: [
            {
              type: "text",
              text: {
                content: "Nome da música",
                link: null,
              },
              annotations: {
                bold: false,
                italic: false,
                strikethrough: false,
                underline: false,
                code: false,
                color: "default",
              },
              plain_text: "Nome da música",
              href: null,
            },
          ],
        },
      },
      last_edited_time: "2023-04-13T04:31:00.000Z",
      created_time: "2023-04-13T04:31:00.000Z",
    },
    {
      id: "7ef38e1f-7beb-440c-bf11-6025051725ac",
      object: "page",
      properties: {
        Autor: {
          id: "eSJ%7D",
          type: "multi_select",
          multi_select: [
            {
              id: "cf50a9ff-5601-433b-ab59-fc2d1e28fe4c",
              name: "Comunidade Católica Shalom",
              color: "yellow",
            },
          ],
        },
        Liturgia: {
          id: "gAMc",
          type: "multi_select",
          multi_select: [
            {
              id: "f43d0cda-5732-403e-b72a-65faf65c448b",
              name: "Semana Santa",
              color: "brown",
            },
          ],
        },
        interprete: {
          id: "sTz%3B",
          type: "multi_select",
          multi_select: [],
        },
        Origem: {
          id: "uZx%3C",
          type: "multi_select",
          multi_select: [],
        },
        Momento: {
          id: "~ZfO",
          type: "multi_select",
          multi_select: [
            {
              id: "3757dbd4-9652-4537-b205-54f7e910dcea",
              name: "salmo",
              color: "blue",
            },
          ],
        },
        Name: {
          id: "title",
          type: "title",
          title: [
            {
              type: "text",
              text: {
                content:
                  "Salmo Sl 115(116B) - O cálice por nós abençoado é a nossa comunhão com o sangue do Senhor",
                link: null,
              },
              annotations: {
                bold: false,
                italic: false,
                strikethrough: false,
                underline: false,
                code: false,
                color: "default",
              },
              plain_text:
                "Salmo Sl 115(116B) - O cálice por nós abençoado é a nossa comunhão com o sangue do Senhor",
              href: null,
            },
          ],
        },
      },
      last_edited_time: "2023-04-10T16:15:00.000Z",
      created_time: "2023-04-10T16:07:00.000Z",
    },
    {
      id: "4fd67c35-b098-4762-8b6b-22826132eb81",
      object: "page",
      properties: {
        Autor: {
          id: "eSJ%7D",
          type: "multi_select",
          multi_select: [
            {
              id: "cf50a9ff-5601-433b-ab59-fc2d1e28fe4c",
              name: "Comunidade Católica Shalom",
              color: "yellow",
            },
          ],
        },
        Liturgia: {
          id: "gAMc",
          type: "multi_select",
          multi_select: [
            {
              id: "f2eae109-f666-48af-a0c5-a959893f4f96",
              name: "Sábado de aleluia",
              color: "gray",
            },
            {
              id: "ee4ee013-a517-4c34-9bba-f9465c3e0009",
              name: "Pascoa",
              color: "pink",
            },
          ],
        },
        interprete: {
          id: "sTz%3B",
          type: "multi_select",
          multi_select: [
            {
              id: "b52d13e8-5d42-4926-a1b8-1fd55d02aac1",
              name: "Laura Salvador",
              color: "blue",
            },
          ],
        },
        Origem: {
          id: "uZx%3C",
          type: "multi_select",
          multi_select: [
            {
              id: "88469c61-12b0-4f49-8b73-a2c6f14e8e4e",
              name: "Vigília Pascal",
              color: "default",
            },
          ],
        },
        Momento: {
          id: "~ZfO",
          type: "multi_select",
          multi_select: [
            {
              id: "4a97f7f7-ba2d-450b-b991-931f90b0bd38",
              name: "Oração",
              color: "gray",
            },
          ],
        },
        Name: {
          id: "title",
          type: "title",
          title: [
            {
              type: "text",
              text: {
                content: "Ele vivo está",
                link: null,
              },
              annotations: {
                bold: false,
                italic: false,
                strikethrough: false,
                underline: false,
                code: false,
                color: "default",
              },
              plain_text: "Ele vivo está",
              href: null,
            },
          ],
        },
      },
      last_edited_time: "2023-05-31T04:01:00.000Z",
      created_time: "2023-04-09T02:13:00.000Z",
    },
    {
      id: "dfcb7a9d-9903-4b02-9bd5-9fbb44bd8c4b",
      object: "page",
      properties: {
        Autor: {
          id: "eSJ%7D",
          type: "multi_select",
          multi_select: [],
        },
        Liturgia: {
          id: "gAMc",
          type: "multi_select",
          multi_select: [],
        },
        interprete: {
          id: "sTz%3B",
          type: "multi_select",
          multi_select: [],
        },
        Origem: {
          id: "uZx%3C",
          type: "multi_select",
          multi_select: [],
        },
        Momento: {
          id: "~ZfO",
          type: "multi_select",
          multi_select: [],
        },
        Name: {
          id: "title",
          type: "title",
          title: [
            {
              type: "text",
              text: {
                content: "Água que nós da a vida que ressurge, derrama aqui",
                link: null,
              },
              annotations: {
                bold: false,
                italic: false,
                strikethrough: false,
                underline: false,
                code: false,
                color: "default",
              },
              plain_text: "Água que nós da a vida que ressurge, derrama aqui",
              href: null,
            },
          ],
        },
      },
      last_edited_time: "2023-04-09T01:33:00.000Z",
      created_time: "2023-04-09T01:31:00.000Z",
    },
    {
      id: "1224f43a-76bb-4e50-aed0-3ba29b5003c7",
      object: "page",
      properties: {
        Autor: {
          id: "eSJ%7D",
          type: "multi_select",
          multi_select: [
            {
              id: "cf50a9ff-5601-433b-ab59-fc2d1e28fe4c",
              name: "Comunidade Católica Shalom",
              color: "yellow",
            },
          ],
        },
        Liturgia: {
          id: "gAMc",
          type: "multi_select",
          multi_select: [
            {
              id: "f43d0cda-5732-403e-b72a-65faf65c448b",
              name: "Semana Santa",
              color: "brown",
            },
            {
              id: "f2eae109-f666-48af-a0c5-a959893f4f96",
              name: "Sábado de aleluia",
              color: "gray",
            },
            {
              id: "c5ed5c62-15ca-4b84-a02f-79a24a9d0136",
              name: "Vigília Pascal",
              color: "red",
            },
          ],
        },
        interprete: {
          id: "sTz%3B",
          type: "multi_select",
          multi_select: [
            {
              id: "39721b2c-7db8-44df-8553-d40fee746a65",
              name: "Rafael Morel",
              color: "yellow",
            },
          ],
        },
        Origem: {
          id: "uZx%3C",
          type: "multi_select",
          multi_select: [
            {
              id: "88469c61-12b0-4f49-8b73-a2c6f14e8e4e",
              name: "Vigília Pascal",
              color: "default",
            },
          ],
        },
        Momento: {
          id: "~ZfO",
          type: "multi_select",
          multi_select: [
            {
              id: "3757dbd4-9652-4537-b205-54f7e910dcea",
              name: "salmo",
              color: "blue",
            },
          ],
        },
        Name: {
          id: "title",
          type: "title",
          title: [
            {
              type: "text",
              text: {
                content: "Salmo SI 29 - eu vos exalto ó Senhor",
                link: null,
              },
              annotations: {
                bold: false,
                italic: false,
                strikethrough: false,
                underline: false,
                code: false,
                color: "default",
              },
              plain_text: "Salmo SI 29 - eu vos exalto ó Senhor",
              href: null,
            },
          ],
        },
      },
      last_edited_time: "2023-05-31T04:00:00.000Z",
      created_time: "2023-04-08T22:22:00.000Z",
    },
    {
      id: "a599a7bf-ae75-423b-8987-5c18f9db7763",
      object: "page",
      properties: {
        Autor: {
          id: "eSJ%7D",
          type: "multi_select",
          multi_select: [
            {
              id: "cf50a9ff-5601-433b-ab59-fc2d1e28fe4c",
              name: "Comunidade Católica Shalom",
              color: "yellow",
            },
          ],
        },
        Liturgia: {
          id: "gAMc",
          type: "multi_select",
          multi_select: [],
        },
        interprete: {
          id: "sTz%3B",
          type: "multi_select",
          multi_select: [],
        },
        Origem: {
          id: "uZx%3C",
          type: "multi_select",
          multi_select: [],
        },
        Momento: {
          id: "~ZfO",
          type: "multi_select",
          multi_select: [
            {
              id: "4a97f7f7-ba2d-450b-b991-931f90b0bd38",
              name: "Oração",
              color: "gray",
            },
            {
              id: "2bf3b031-81f4-415f-ae3f-d3d46ab0a430",
              name: "Espirito",
              color: "purple",
            },
          ],
        },
        Name: {
          id: "title",
          type: "title",
          title: [
            {
              type: "text",
              text: {
                content: "Sopra em Mim",
                link: null,
              },
              annotations: {
                bold: false,
                italic: false,
                strikethrough: false,
                underline: false,
                code: false,
                color: "default",
              },
              plain_text: "Sopra em Mim",
              href: null,
            },
          ],
        },
      },
      last_edited_time: "2023-04-10T04:01:00.000Z",
      created_time: "2023-04-08T17:39:00.000Z",
    },
    {
      id: "e6494681-6526-41b8-baee-95d429bf470d",
      object: "page",
      properties: {
        Autor: {
          id: "eSJ%7D",
          type: "multi_select",
          multi_select: [],
        },
        Liturgia: {
          id: "gAMc",
          type: "multi_select",
          multi_select: [],
        },
        interprete: {
          id: "sTz%3B",
          type: "multi_select",
          multi_select: [],
        },
        Origem: {
          id: "uZx%3C",
          type: "multi_select",
          multi_select: [],
        },
        Momento: {
          id: "~ZfO",
          type: "multi_select",
          multi_select: [],
        },
        Name: {
          id: "title",
          type: "title",
          title: [
            {
              type: "text",
              text: {
                content: "Salmo 140 antigo comunidade",
                link: null,
              },
              annotations: {
                bold: false,
                italic: false,
                strikethrough: false,
                underline: false,
                code: false,
                color: "default",
              },
              plain_text: "Salmo 140 antigo comunidade",
              href: null,
            },
          ],
        },
      },
      last_edited_time: "2023-04-10T02:20:00.000Z",
      created_time: "2023-04-08T17:31:00.000Z",
    },
    {
      id: "63529f3e-c9e8-4771-abb5-5a25d0c10bca",
      object: "page",
      properties: {
        Autor: {
          id: "eSJ%7D",
          type: "multi_select",
          multi_select: [
            {
              id: "ab18ebc8-06ab-4f05-90a6-c024cafdfcef",
              name: "Adriana Arydes",
              color: "orange",
            },
          ],
        },
        Liturgia: {
          id: "gAMc",
          type: "multi_select",
          multi_select: [],
        },
        interprete: {
          id: "sTz%3B",
          type: "multi_select",
          multi_select: [],
        },
        Origem: {
          id: "uZx%3C",
          type: "multi_select",
          multi_select: [],
        },
        Momento: {
          id: "~ZfO",
          type: "multi_select",
          multi_select: [
            {
              id: "08ca3abb-7ca9-4f39-b9ae-cb24c05d08f1",
              name: "Louvor",
              color: "yellow",
            },
          ],
        },
        Name: {
          id: "title",
          type: "title",
          title: [
            {
              type: "text",
              text: {
                content: "Pra te louvar ",
                link: null,
              },
              annotations: {
                bold: false,
                italic: false,
                strikethrough: false,
                underline: false,
                code: false,
                color: "default",
              },
              plain_text: "Pra te louvar ",
              href: null,
            },
          ],
        },
      },
      last_edited_time: "2023-04-08T22:32:00.000Z",
      created_time: "2023-04-08T17:28:00.000Z",
    },
  ],
  next_cursor: "fcadc7cc-dcbf-449f-848b-d3fe69a08e91",
  has_more: true,
  type: "page",
  page: {},
};

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

  // return mock;

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
