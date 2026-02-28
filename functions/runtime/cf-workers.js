export async function onRequest(context) {
  return Response.json({
    ok: true,
    runtime: "cloudflare-workers",
    method: context.request.method,
    path: new URL(context.request.url).pathname,
    now: new Date().toISOString(),
  });
}
