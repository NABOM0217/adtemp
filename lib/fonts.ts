import { IBM_Plex_Mono } from 'next/font/google';

/**
 * 라벨·캡션용 모노. 한글은 이 폰트에 없어 Pretendard로 폴백되므로 latin 서브셋만 받는다.
 * next/font로 self-host 하면 Google에서 받는 것(키릴·그리스 서브셋까지 6파일 184KB)보다
 * 훨씬 작고 외부 왕복도 사라진다.
 *
 * ⚠️ 이 className은 반드시 <Html>(= :root)에 걸어야 한다.
 *    globals.css가 :root에 --mono:var(--font-plex-mono) 를 선언하므로,
 *    변수가 하위 엘리먼트에만 있으면 :root에서 해석이 실패해 무효값이 되고
 *    모노 지정 전체가 본문 폰트로 폴백된다.
 */
export const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
  variable: '--font-plex-mono',
});
