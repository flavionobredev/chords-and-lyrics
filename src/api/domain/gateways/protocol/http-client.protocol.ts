type Output<T = any> = {
  data: T;
};
export type HttpClient = (url: string) => Promise<Output>;
