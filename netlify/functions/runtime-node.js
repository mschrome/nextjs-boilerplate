exports.handler = async (event) => {
  return {
    statusCode: 200,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "no-store",
    },
    body: JSON.stringify({
      ok: true,
      runtime: "netlify-functions-node",
      nodeVersion: process.version,
      path: event.path,
      now: new Date().toISOString(),
    }),
  };
};
