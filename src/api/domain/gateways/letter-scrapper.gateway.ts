import type { HttpClient } from "./protocol/http-client.protocol";
import { Scrapper } from "./protocol/scrapper.protocol";
import { JSDOM } from "jsdom";

export class GeneralScrapper implements Scrapper {
  constructor(private readonly gateway: HttpClient) {}

  async scrap(url: string) {
    const { data } = await this.gateway(url);
    if (!data) {
      throw Scrapper.NotFoundError(url);
    }
    return {
      html: new JSDOM(data),
    };
  }
}
