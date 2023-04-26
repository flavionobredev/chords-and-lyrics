export type Controller = {
  handle: (request: any) => Promise<any>;
}