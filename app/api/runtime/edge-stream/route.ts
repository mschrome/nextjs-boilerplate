export const runtime = "edge";
export const dynamic = "force-dynamic";

export async function GET() {
  const stream = new ReadableStream({
    start(controller) {
      controller.enqueue(`runtime=${runtime}\n`);
      controller.enqueue(`ts=${Date.now()}\n`);
      controller.enqueue("message=hello-from-edge-stream\n");
      controller.close();
    },
  });

  return new Response(stream, {
    headers: {
      "content-type": "text/plain; charset=utf-8",
      "cache-control": "no-store",
    },
  });
}
