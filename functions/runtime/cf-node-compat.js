export async function onRequest(context) {
  const hasBuffer = typeof Buffer !== "undefined";
  const hasProcess = typeof process !== "undefined";

  return Response.json({
    ok: true,
    runtime: "cloudflare-workers",
    feature: "nodejs_compat",
    hasBuffer,
    hasProcess,
    processVersion: hasProcess ? process.version : null,
    note: "若需完整 Node 兼容，请在 wrangler.toml 打开 nodejs_compat。",
    path: new URL(context.request.url).pathname,
  });
}
