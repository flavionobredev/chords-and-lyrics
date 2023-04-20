import { Scrapper } from "../gateways/protocol/scrapper.protocol";

export interface LyricsStrategy {
  get(lyrics: Scrapper.ScrappingOutput, data: unknown): unknown;
}

export class Lyrics {
  constructor(
    private readonly scrapper: Scrapper,
    private readonly lyricsStrategy: LyricsStrategy
  ) {}

  async get<T = any>(url: string, data: unknown): Promise<T> {
    const lyrics = await this.scrapper.scrap(url);
    return this.lyricsStrategy.get(lyrics, data) as T;
  }
}
