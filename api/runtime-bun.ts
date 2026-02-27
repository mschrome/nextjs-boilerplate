export default {
  async fetch(request: Request) {
    const url = new URL(request.url);
    const maybeBun = (globalThis as { Bun?: { version?: string } }).Bun;

    return Response.json({
      ok: true,
      runtime: "bun",
      bunVersion: maybeBun?.version ?? null,
      path: url.pathname,
      now: new Date().toISOString(),
    });
  },
};
