import { Html, Head, Main, NextScript } from 'next/document';
import { plexMono } from '../lib/fonts';

export default function Document() {
  return (
    // 모노 CSS 변수는 :root(=html)에 있어야 globals.css의 --mono 가 해석된다.
    <Html lang="ko" className={plexMono.variable}>
      <Head>
        {/*
          제목 폰트 — 자체 호스팅 서브셋(원본 SUITE, 이름은 RFN 때문에 Nabom Display).
          원본 Variable 이 523KB인데 실제 쓰는 글자만 남겨 크게 줄였다.
          @font-face 선언과 라이선스 표기는 globals.css 최상단에 있다.

          preload로 첫 페인트 전에 도착시켜 폰트 교체 시 제목이 밀리는 것(CLS)을 막는다.
        */}
        <link
          rel="preload"
          href="/fonts/nabom-display-subset.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />

        {/*
          Pretendard(본문) — 시안은 <style> 안 @import(렌더 블로킹)였다. link로 교체.

          ⚠️ 이건 자체 호스팅하지 않는다. Pretendard 는 OFL 의 Reserved Font Name(`Pretendard`)이
          지정된 폰트라, 서브셋 같은 변형본은 그 이름을 쓸 수 없다(OFL 3항). 원본을 그대로
          받아 쓰는 지금 방식이 라이선스상 가장 깨끗하다. dynamic-subset 이라 실제로 쓰는
          유니코드 범위만 내려받는다.
          Copyright (c) 2021, Kil Hyung-jin — SIL Open Font License 1.1
        */}
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
