export type NotionObject = {
  object: string;
  id: string;
  cover: null;
  icon: null;
  created_time: Date;
  created_by: CreatedBy;
  last_edited_by: CreatedBy;
  last_edited_time: Date;
  title: TitleElement[];
  description: any[];
  is_inline: boolean;
  properties: Properties;
  parent: Parent;
  url: string;
  public_url: string;
  archived: boolean;
  developer_survey: string;
};

export type Properties = {
  Autor: Autor;
  Liturgia: Autor;
  interprete: Autor;
  Origem: Autor;
  Momento: Autor;
  Name: Autor;
};

export type Autor = {
  id: string;
  name: string;
  type: string;
  multi_select?: MultiSelect;
  title?: AutorTitle;
};

export type MultiSelect = {
  options: Option[];
};

export type Option = {
  id: string;
  name: string;
  color: string;
};

export type AutorTitle = {};

export type Parent = {
  type: string;
  page_id: string;
};

export type TitleElement = {
  type: string;
  text: Text;
  annotations: Annotations;
  plain_text: string;
  href: null;
};

export type Annotations = {
  bold: boolean;
  italic: boolean;
  strikethrough: boolean;
  underline: boolean;
  code: boolean;
  color: string;
};

export type Text = {
  content: string;
  link: null;
};

export type CreatedBy = {
  object: string;
  id: string;
};
