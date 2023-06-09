import type { GetMusicUseCase } from "../interfaces/get-music-info";

export class GetMusic implements GetMusicUseCase {
  async get(url: string, data?: unknown): Promise<GetMusicUseCase.GetOutput> {
    // if (!url) {
    //   throw new Error("url is required");
    // }

    // const urlData = new URL(url);

    // if (!acceptedHosts.includes(urlData.host)) {
    //   throw new Error({
    //     statusCode: 400,
    //     message: "url host is not accepted",
    //     stack: undefined,
    //   });
    // }

    // console.log("event>>>>", urlData.host);
    // const letrasMusStrategy = new Lyrics(
    //   new GeneralScrapper(fetch),
    //   new LetrasMusStrategy()
    // );

    // const cifraClubStrategy = new Chords(
    //   new GeneralScrapper(fetch),
    //   new CifraClubStrategy()
    // );

    // let result = await letrasMusStrategy.get<
    //   LetrasMusStrategy.GetOutput & CifraClubStrategy.GetOutput
    // >(urlData.href, {
    //   lyricsSelector: ".cnt-letra",
    // });
    // console.log("result>>>>", result);
    // if (result.cifraUrl) {
    //   const resultCifra =
    //     await cifraClubStrategy.get<CifraClubStrategy.GetOutput>(
    //       result.cifraUrl,
    //       {
    //         chordsSelector: "pre",
    //       }
    //     );
    //   result.chordPlainText = resultCifra.chordPlainText;
    //   result.chords = resultCifra.chords;
    // }

    return {
      lyrics: "",
      title: "",
      artist: "",
      fullChords: "",
      chords: [],
      preview: {
        type: "youtube",
        url: "",
        id: "",
      },
    };
  }
}
