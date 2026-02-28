export async function onRequest(context) {
  const userAgent = context.request.headers.get("user-agent") ?? "unknown";
  const digestBuffer = await crypto.subtle.digest(
    "SHA-256",
    new TextEncoder().encode(userAgent),
  );
  const hashPrefix = Array.from(new Uint8Array(digestBuffer))
    .slice(0, 8)
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");

  return Response.json({
    ok: true,
    runtime: "cloudflare-workers",
    feature: "web-crypto",
    userAgentHashPrefix: hashPrefix,
  });
}
