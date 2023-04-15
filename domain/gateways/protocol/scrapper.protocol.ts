import { JSDOM } from "jsdom";

export interface Scrapper {
  scrap(url: string): Promise<Scrapper.ScrappingOutput>;
}

export namespace Scrapper {
  export function NotFoundError(url: string) {
    return new Error(`Page not found for ${url}`);
  }

  export type ScrappingOutput = {
    html: JSDOM;
  };
}
