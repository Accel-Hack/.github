'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function ServiceRedirectPage() {
  const router = useRouter();

  // 仕掛け①：画面が表示された瞬間に /works へ移動させる
  useEffect(() => {
    router.replace('/works');
  }, [router]);

  return (
    <>
      {/* 仕掛け②：検索エンジン（Google）に「このページは無視して」と伝える */}
      <meta name="robots" content="noindex" />

      {/* 仕掛け③：JavaScriptが動かない環境でも強制的に /works へ飛ばす */}
      <meta httpEquiv="refresh" content="0;url=/works" />

      {/* 転送されるまでのコンマ数秒だけ表示される保険のテキスト */}
      <p>ページを移動しています...</p>
    </>
  );
}
