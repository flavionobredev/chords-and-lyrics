import { LyricsStrategy } from "../usecases/lyrics.usecase";
import { JSDOM } from "jsdom";

export class LetrasMusStrategy implements LyricsStrategy {
  get(
    lyric: { html: JSDOM },
    data: LetrasMusStrategy.GetInput
  ): LetrasMusStrategy.GetOutput {
    const { lyricsSelector } = data;
    const { html } = lyric;
    const lyrics =
      html.window.document.querySelector(lyricsSelector)?.innerHTML;

    if (!lyrics) {
      throw new Error(`Lyrics not found for selector: ${lyricsSelector}`);
    }

    const matchInfo = html.window.document.body.innerHTML.match(
      /ui\/player',([^;]+)\]\)/
    );
    const info = matchInfo && JSON.parse(matchInfo[1]);

    const cifraUrl = html.window.document.querySelector<HTMLLinkElement>(
      "a[data-action='Nav Cifra']"
    )?.href;

    return {
      text: this.parseLyrics(lyrics),
      title: info?.["Name"] || "Título Desconhecido",
      author: info?.["Artist"] || "Artista Desconhecido",
      videoId: info?.["YoutubeID"],
      cifraUrl: cifraUrl,
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
    lyricsSelector: string;
  };

  export type GetOutput = {
    text: string;
    title: string;
    author: string;
    videoId?: string;
    cifraUrl?: string;
  };
}
