export default async (request) => {
  const url = new URL(request.url);

  return Response.json({
    ok: true,
    runtime: "netlify-functions-node",
    nodeVersion: process.version,
    path: url.pathname,
    now: new Date().toISOString(),
  });
};
