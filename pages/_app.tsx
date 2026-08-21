import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { plexMono } from '../lib/fonts';

/**
 * 폰트 로딩 위치
 *
 *  - 제목(SUITE 서브셋)·본문(Pretendard): _document.tsx 에서 <link> 로 받는다.
 *  - 라벨(IBM Plex Mono): next/font 로 self-host 한다. 단 **_document.tsx 에서는 안 된다.**
 *    Next.js 가 _document 의 next/font 호출을 처리하지 않아, 클래스 이름만 붙고
 *    @font-face CSS 와 woff2 가 빌드 산출물에 아예 들어가지 않는다(폰트 파일 0개였다).
 *    그 결과 모든 모노 라벨이 OS 기본 모노로 떨어졌고, 한글은 굴림체 비트맵으로
 *    렌더돼 작은 글씨가 뭉개졌다. 그래서 여기(_app)에서 부른다.
 *
 *    next/font 가 주는 변수는 클래스를 건 엘리먼트에만 걸리는데 globals.css 의 --mono 는
 *    :root 에서 해석되므로, 변수를 :root 에 직접 심어준다.
 */
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        :root {
          --font-plex-mono: ${plexMono.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
