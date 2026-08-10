import { Html, Head, Main, NextScript } from 'next/document';
import { plexMono } from '../lib/fonts';

export default function Document() {
  return (
    // 모노 CSS 변수는 :root(=html)에 있어야 globals.css의 --mono 가 해석된다.
    <Html lang="ko" className={plexMono.variable}>
      <Head>
        {/*
          Hahmlet(제목) — 자체 호스팅 서브셋. Google Fonts에서 받을 때는 한글 서브셋이
          13파일 1,011KB(최장 1,071ms)였다. 실제 쓰는 글자만 남겨 70.9KB가 됐고
          외부 도메인 왕복도 사라졌다. @font-face 선언은 globals.css에 있다.

          preload로 첫 페인트 전에 도착시켜 폰트 교체 시 제목이 밀리는 것(CLS)을 막는다.
        */}
        <link
          rel="preload"
          href="/fonts/hahmlet-subset.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />

        {/* Pretendard(본문) — 시안은 <style> 안 @import(렌더 블로킹)였다. link로 교체 */}
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard-dynamic-subset.min.css"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
