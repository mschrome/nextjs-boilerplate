export default (request) => {
  const url = new URL(request.url);

  return Response.json({
    ok: true,
    runtime: "netlify-edge-deno",
    denoVersion: globalThis.Deno?.version?.deno ?? null,
    path: url.pathname,
    now: new Date().toISOString(),
  });
};

export const config = {
  path: "/runtime/netlify-edge",
};
