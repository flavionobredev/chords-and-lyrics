import { LetrasMusScrapper } from "~/domain/gateways/letter-scrapper.gateway";
import { LetrasMusStrategy } from "~/domain/strategies/letras-mus.strategy";
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
    new LetrasMusScrapper(fetch),
    new LetrasMusStrategy()
  );
  const result = await letrasMusStrategy.get<LetrasMusStrategy.GetOutput>(
    urlData.href,
    {
      lyricsSelector: ".cnt-letra",
    }
  );
  console.log("result>>>>", result);
  // const data = await fetch(urlData).then((res) => res.text());
  return {
    ok: true,
    lyricsText: result.text,
    title: result.title,
    author: result.author,
    videoId: result.videoId,
  };
});
