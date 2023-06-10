import notion from "../client";

const mock = {
  id: "b099777b-be5d-48d3-a356-f1716ebb00d4",
  properties: {
    Autor: {
      id: "eSJ%7D",
      name: "Autor",
      type: "multi_select",
      multi_select: {
        options: [
          {
            id: "4f0802aa-fc5c-4468-ba5b-84330df0b74e",
            name: "CNBB",
            color: "red",
          },
          {
            id: "cf50a9ff-5601-433b-ab59-fc2d1e28fe4c",
            name: "Comunidade Católica Shalom",
            color: "yellow",
          },
          {
            id: "792bd244-0b97-4a02-8dd2-0876ff8e3a7d",
            name: "Catolicas",
            color: "purple",
          },
          {
            id: "e06e4abc-eb0e-4423-987f-2bc39c68c9b8",
            name: "Adoração e Vida",
            color: "default",
          },
          {
            id: "b64ea231-3b3e-4db5-9812-6d6c37c703f8",
            name: "Eugênio Jorge",
            color: "blue",
          },
          {
            id: "ab18ebc8-06ab-4f05-90a6-c024cafdfcef",
            name: "Adriana Arydes",
            color: "orange",
          },
        ],
      },
    },
    Liturgia: {
      id: "gAMc",
      name: "Liturgia",
      type: "multi_select",
      multi_select: {
        options: [
          {
            id: "237ae8ce-e076-46e0-bb3e-3d8cfd49d58c",
            name: "domingo de ramos",
            color: "purple",
          },
          {
            id: "a583b404-1279-4b31-83f8-68722928d3aa",
            name: "Todas",
            color: "green",
          },
          {
            id: "ef9cbffd-d7d3-492d-a465-f841a6dc3637",
            name: "Quaresma",
            color: "orange",
          },
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
          {
            id: "ee4ee013-a517-4c34-9bba-f9465c3e0009",
            name: "Pascoa",
            color: "pink",
          },
          {
            id: "04c9c8cb-76d5-40d7-99ef-fac19400e395",
            name: "Pentecostes",
            color: "default",
          },
        ],
      },
    },
    interprete: {
      id: "sTz%3B",
      name: "interprete",
      type: "multi_select",
      multi_select: {
        options: [
          {
            id: "39721b2c-7db8-44df-8553-d40fee746a65",
            name: "Rafael Morel",
            color: "yellow",
          },
          {
            id: "b52d13e8-5d42-4926-a1b8-1fd55d02aac1",
            name: "Laura Salvador",
            color: "blue",
          },
        ],
      },
    },
    Origem: {
      id: "uZx%3C",
      name: "Origem",
      type: "multi_select",
      multi_select: {
        options: [
          {
            id: "56bb0662-6b73-4dec-a32f-d49ad100f3c9",
            name: "Reciclagem",
            color: "red",
          },
          {
            id: "88469c61-12b0-4f49-8b73-a2c6f14e8e4e",
            name: "Vigília Pascal",
            color: "default",
          },
        ],
      },
    },
    Momento: {
      id: "~ZfO",
      name: "Momento",
      type: "multi_select",
      multi_select: {
        options: [
          {
            id: "fd76d6fc-00c9-4e5a-9c59-fa548c88687e",
            name: "entrada",
            color: "default",
          },
          {
            id: "aa629665-3c22-42dc-922b-2851200da5b4",
            name: "final",
            color: "purple",
          },
          {
            id: "3238ef0c-d1d5-4c37-b70c-1bdfe2300b4d",
            name: "procissão",
            color: "orange",
          },
          {
            id: "3757dbd4-9652-4537-b205-54f7e910dcea",
            name: "salmo",
            color: "blue",
          },
          {
            id: "1de98a3b-c1cd-4095-88c5-f83190597f35",
            name: "penitencial",
            color: "brown",
          },
          {
            id: "792af6c5-821a-42d2-a037-6e9083b39623",
            name: "aclamação",
            color: "pink",
          },
          {
            id: "b9f4c5cf-37a7-41b5-b877-45f917041bd3",
            name: "ofertório",
            color: "red",
          },
          {
            id: "71f249b0-03d5-4989-a278-630f6b81b88e",
            name: "comunhão",
            color: "green",
          },
          {
            id: "4a97f7f7-ba2d-450b-b991-931f90b0bd38",
            name: "Oração",
            color: "gray",
          },
          {
            id: "08ca3abb-7ca9-4f39-b9ae-cb24c05d08f1",
            name: "Louvor",
            color: "yellow",
          },
          {
            id: "3687ea4d-e077-4241-b8b1-8f884fa87ec5",
            name: "Via sacra",
            color: "blue",
          },
          {
            id: "2bf3b031-81f4-415f-ae3f-d3d46ab0a430",
            name: "Espirito",
            color: "purple",
          },
          {
            id: "7051c5c8-98ad-4d55-9240-fcb014276edf",
            name: "Ação de graças",
            color: "yellow",
          },
        ],
      },
    },
    Name: {
      id: "title",
      name: "Name",
      type: "title",
      title: {},
    },
  },
};

export const GetById = async (id: string | undefined) => {
  if (!id) {
    throw new Error("Missing database id");
  }
  const response = await notion.databases.retrieve({ database_id: id });
  // const response = mock;
  return {
    id: response.id,
    properties: response.properties || {},
  };
};