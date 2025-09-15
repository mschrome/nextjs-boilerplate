import Link from 'next/link';

export default function NotFound() {
  return (
    <main style={{ padding: '64px 24px', textAlign: 'center' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '8px' }}>页面未找到</h1>
      <p style={{ color: '#666', marginBottom: 24 }}>你访问的页面不存在或已被移除。</p>
      <Link href="/" style={{ color: '#0070f3', textDecoration: 'underline' }}>
        返回首页
      </Link>
    </main>
  );
}


