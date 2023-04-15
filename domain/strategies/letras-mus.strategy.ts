import { LyricsStrategy } from "../usecases/lyrics.usecase";
import { JSDOM } from "jsdom";

export class LetrasMusStrategy implements LyricsStrategy {
  get(lyric: { html: JSDOM }, data: LetrasMusStrategy.GetInput) {
    const { selector } = data;
    const { html } = lyric;
    const lyrics = html.window.document.querySelector(selector)?.innerHTML;
    if (!lyrics) {
      throw new Error(`Lyrics not found for selector: ${selector}`);
    }
    return {
      text: this.parseLyrics(lyrics),
    };
  }

  parseLyrics(lyrics: string) {
    return lyrics
      .replace(/<br>/g, "\n")
      .replace(/<\/p><p>/g, "\n\n")
      .replace(/<[^>]*>/g, "")
      .trim();
  }
}

export namespace LetrasMusStrategy {
  export type GetInput = {
    selector: string;
  };
}
