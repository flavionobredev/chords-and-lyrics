import { Scrapper } from "../gateways/protocol/scrapper.protocol";

export interface LyricsStrategy {
  get(
    lyrics: Scrapper.ScrappingOutput,
    data: unknown
  ): { text: string } | Promise<{ text: string }>;
}

export class Lyrics {
  constructor(
    private readonly scrapper: Scrapper,
    private readonly lyricsStrategy: LyricsStrategy
  ) {}

  async get(url: string, data: unknown) {
    const lyrics = await this.scrapper.scrap(url);
    return this.lyricsStrategy.get(lyrics, data);
  }
}
