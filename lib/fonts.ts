import { IBM_Plex_Mono } from 'next/font/google';

/**
 * 라벨·캡션용 모노. 한글은 이 폰트에 없어 Pretendard로 폴백되므로 latin 서브셋만 받는다.
 * next/font로 self-host 하면 Google에서 받는 것(키릴·그리스 서브셋까지 6파일 184KB)보다
 * 훨씬 작고 외부 왕복도 사라진다.
 *
 * ⚠️ 이 파일은 pages/_app.tsx 에서만 import 한다. _document.tsx 에서 부르면
 *    Next.js 가 처리하지 않아 @font-face·woff2 가 빌드에 안 들어간다(폰트가 통째로 사라짐).
 *    globals.css 의 --mono 는 :root 에서 해석되므로, _app 이 변수를 :root 에 직접 심는다.
 *    (래퍼 엘리먼트에만 걸면 :root 해석이 실패해 모노 지정이 통째로 무효가 된다.)
 */
export const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
  variable: '--font-plex-mono',
});
