export const runtime = "edge";
export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const userAgent = request.headers.get("user-agent") ?? "unknown";
  const encoder = new TextEncoder();
  const digestBuffer = await crypto.subtle.digest(
    "SHA-256",
    encoder.encode(userAgent),
  );
  const digest = Array.from(new Uint8Array(digestBuffer))
    .slice(0, 8)
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");

  return Response.json({
    ok: true,
    runtime,
    userAgentHashPrefix: digest,
    hasSubtleCrypto: typeof crypto.subtle !== "undefined",
    now: new Date().toISOString(),
  });
}
