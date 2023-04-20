import { GeneralScrapper } from "~/domain/gateways/letter-scrapper.gateway";
import { CifraClubStrategy } from "~/domain/strategies/cifra-club.strategy";
import { LetrasMusStrategy } from "~/domain/strategies/letras-mus.strategy";
import { Chords } from "~/domain/usecases/chords.usecase";
import { Lyrics } from "~/domain/usecases/lyrics.usecase";
const acceptedHosts = process.env.ACCEPTED_HOSTS?.split(",") || [];
export default defineEventHandler(async (event) => {
  const { url } = getQuery(event);
  if (!url) {
    throw createError({
      statusCode: 400,
      message: "url is required",
      stack: undefined,
    });
  }

  const urlData = new URL(url as string);

  if (!acceptedHosts.includes(urlData.host)) {
    throw createError({
      statusCode: 400,
      message: "url host is not accepted",
      stack: undefined,
    });
  }

  console.log("event>>>>", urlData.host);
  const letrasMusStrategy = new Lyrics(
    new GeneralScrapper(fetch),
    new LetrasMusStrategy()
  );

  const cifraClubStrategy = new Chords(
    new GeneralScrapper(fetch),
    new CifraClubStrategy()
  );

  let result = await letrasMusStrategy.get<
    LetrasMusStrategy.GetOutput & CifraClubStrategy.GetOutput
  >(urlData.href, {
    lyricsSelector: ".cnt-letra",
  });
  console.log("result>>>>", result);
  if (result.cifraUrl) {
    const resultCifra =
      await cifraClubStrategy.get<CifraClubStrategy.GetOutput>(
        result.cifraUrl,
        {
          chordsSelector: "pre",
        }
      );
    result.chordPlainText = resultCifra.chordPlainText;
    result.chords = resultCifra.chords;
  }
  // const data = await fetch(urlData).then((res) => res.text());
  return {
    ok: true,
    lyricsText: result.text,
    title: result.title,
    author: result.author,
    videoId: result.videoId,
    chordsText: result.chordPlainText,
    chords: result.chords,
  };
});
