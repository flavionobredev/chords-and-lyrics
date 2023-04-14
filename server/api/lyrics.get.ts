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
  // const data = await fetch(urlData).then((res) => res.text());
  return {
    ok: true,
  };
});
