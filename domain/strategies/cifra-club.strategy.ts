import { Scrapper } from "../gateways/protocol/scrapper.protocol";
import { ChordsStrategy } from "../usecases/chords.usecase";

export class CifraClubStrategy implements ChordsStrategy {
  get(
    chords: Scrapper.ScrappingOutput,
    data: CifraClubStrategy.GetInput
  ): CifraClubStrategy.GetOutput {
    const element = chords.html.window.document.querySelector<HTMLPreElement>(
      data.chordsSelector
    );
    if (!element) {
      throw new Error(
        `Chords not found for this song using ${data.chordsSelector} selector`
      );
    }
    const plainText = element.innerHTML.replace(/<[^>]*>/g, "");
    const songChords = this.parseChords(element.innerHTML);

    return {
      chordPlainText: plainText,
      chords: songChords,
    };
  }

  parseChords(text: string) {
    const regex = /<b>(.*?)<\/b>/g;
    const matches = text.match(regex) || [];
    const chords = matches.map((chord) => chord.replace(/<b>|<\/b>/g, ""));
    return [...new Set(chords)];
  }
}

export namespace CifraClubStrategy {
  export type GetInput = {
    chordsSelector: string;
  };

  export type GetOutput = {
    chordPlainText: string;
    chords: string[];
  };
}
