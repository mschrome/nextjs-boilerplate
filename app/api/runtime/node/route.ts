import { readFile } from "node:fs/promises";
import path from "node:path";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  const packagePath = path.join(process.cwd(), "package.json");
  const packageJson = await readFile(packagePath, "utf-8");
  const { name, version } = JSON.parse(packageJson) as {
    name: string;
    version: string;
  };

  return Response.json({
    ok: true,
    runtime,
    nodeVersion: process.version,
    packageName: name,
    packageVersion: version,
    cwd: process.cwd(),
    now: new Date().toISOString(),
  });
}
