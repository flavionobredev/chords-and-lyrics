declare namespace NodeJS {
  interface ProcessEnv {
    readonly NODE_ENV: "development" | "production" | "test";
    readonly PORT: string;
    readonly ACCEPTED_HOSTS: string;
  }
}
