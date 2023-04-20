import { Scrapper } from "../gateways/protocol/scrapper.protocol";

export type ChordsStrategy = {
  get(chords: Scrapper.ScrappingOutput, data: unknown): unknown;
};

export class Chords {
  constructor(
    private readonly scrapper: Scrapper,
    private readonly chordsStrategy: ChordsStrategy
  ) {}

  async get<T = any>(url: string, data: unknown): Promise<T> {
    const chords = await this.scrapper.scrap(url);
    return this.chordsStrategy.get(chords, data) as T;
  }
}
