import '../styles/globals.css';
import type { AppProps } from 'next/app';

/**
 * 폰트는 _document.tsx에서 시안과 동일하게 <link>로 로드한다.
 *
 * next/font를 쓰지 않는 이유:
 *  - Hahmlet: next/font 메타데이터에 korean 서브셋이 없어 한글이 빠진다.
 *  - IBM Plex Mono: next/font가 주는 CSS 변수는 _app이 렌더하는 래퍼 div에만 걸린다.
 *    그런데 globals.css의 --mono 는 :root에 선언되므로 var(--font-plex-mono) 가
 *    :root에서 해석돼 무효값이 되고, font-family가 통째로 상속으로 떨어져
 *    모노 라벨 전체가 본문 폰트로 폴백된다.
 */
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
