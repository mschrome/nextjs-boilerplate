import Link from 'next/link';

export default function TestPage() {
  return (
    <main style={{ padding: '64px 24px', textAlign: 'center' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '8px' }}>Test 页面</h1>
      <p style={{ color: '#666', marginBottom: 24 }}>这是一个示例路由 /test。</p>
      <Link href="/" style={{ color: '#0070f3', textDecoration: 'underline' }}>
        返回首页
      </Link>
    </main>
  );
}


