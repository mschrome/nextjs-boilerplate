type ExampleItem = {
  name: string;
  path: string;
  hint: string;
  note?: string;
};

const nextRuntimeExamples: ExampleItem[] = [
  {
    name: "Node.js Runtime（可用 fs/process）",
    path: "/api/runtime/node",
    hint: "读取 package.json，返回 process.version 等 Node 信息",
  },
  {
    name: "Edge Runtime（Web APIs）",
    path: "/api/runtime/edge",
    hint: "使用 Web Crypto 计算 UA 哈希，验证 edge 环境",
  },
  {
    name: "Edge Runtime Streaming",
    path: "/api/runtime/edge-stream",
    hint: "返回 text streaming 响应",
  },
];

const vercelFunctionExamples: ExampleItem[] = [
  {
    name: "Python Function",
    path: "/api/runtime-python",
    hint: "BaseHTTPRequestHandler 处理请求",
    note: "仅在 Vercel / vercel dev 下可用（next dev 不会处理 .py）",
  },
  {
    name: "Go Function",
    path: "/api/runtime-go",
    hint: "Go handler 返回 runtime.Version()",
    note: "仅在 Vercel / vercel dev 下可用（next dev 不会处理 .go）",
  },
  {
    name: "Ruby Function",
    path: "/api/runtime-ruby",
    hint: "Ruby Proc Handler 返回 RUBY_VERSION",
    note: "仅在 Vercel / vercel dev 下可用（next dev 不会处理 .rb）",
  },
  {
    name: "Bun Function",
    path: "/api/runtime-bun",
    hint: "Bun fetch handler 返回 Bun.version",
    note: "仅在 Vercel / vercel dev 下可用（需 vercel.json 配置 bunVersion）",
  },
];

const netlifyRuntimeExamples: ExampleItem[] = [
  {
    name: "Netlify Function（Node.js）",
    path: "/.netlify/functions/runtime-node",
    hint: "使用 Netlify Functions（Node）返回 process.version",
    note: "仅在 Netlify / netlify dev 下可用",
  },
  {
    name: "Netlify Function（Go）",
    path: "/.netlify/functions/runtime-go",
    hint: "使用 Netlify Functions（Go）返回 runtime.Version()",
    note: "仅在 Netlify / netlify dev 下可用",
  },
  {
    name: "Netlify Edge Function（Deno）",
    path: "/runtime/netlify-edge",
    hint: "使用 Netlify Edge Runtime（Deno）",
    note: "仅在 Netlify / netlify dev 下可用",
  },
];

function Section({
  title,
  items,
}: {
  title: string;
  items: ExampleItem[];
}) {
  return (
    <section className="mt-8">
      <h2 className="text-lg font-semibold">{title}</h2>
      <ul className="mt-4 space-y-4">
        {items.map((item) => (
          <li key={item.path} className="rounded-xl border p-4">
            <p className="font-medium">{item.name}</p>
            <p className="mt-1 text-sm text-black/70 dark:text-white/70">{item.hint}</p>
            {item.note ? (
              <p className="mt-1 text-xs text-black/60 dark:text-white/60">{item.note}</p>
            ) : null}
            <a
              className="mt-3 inline-flex text-sm underline underline-offset-4"
              href={item.path}
              target="_blank"
              rel="noopener noreferrer"
            >
              打开 {item.path}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function Home() {
  return (
    <main className="mx-auto min-h-screen max-w-3xl px-6 py-16">
      <h1 className="text-2xl font-semibold">Runtime / Functions 示例（Vercel + Netlify）</h1>
      <p className="mt-3 text-sm text-black/70 dark:text-white/70">
        这里提供 Next.js Route Handlers、Vercel 多语言 Functions，以及 Netlify
        Functions/Edge Functions 的对照用例。
      </p>

      <Section title="Next.js Route Handlers（本地 next dev 可测）" items={nextRuntimeExamples} />
      <Section title="多语言 Vercel Functions（部署或 vercel dev 可测）" items={vercelFunctionExamples} />
      <Section title="Netlify Runtime 用例（部署或 netlify dev 可测）" items={netlifyRuntimeExamples} />
    </main>
  );
}
