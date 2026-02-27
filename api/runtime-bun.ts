export default {
  async fetch(request: Request) {
    const url = new URL(request.url);

    return Response.json({
      ok: true,
      runtime: "bun",
      bunVersion: typeof Bun !== "undefined" ? Bun.version : null,
      path: url.pathname,
      now: new Date().toISOString(),
    });
  },
};
