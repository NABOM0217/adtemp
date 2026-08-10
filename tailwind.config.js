/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      // 나봄 시안 v2 토큰 — globals.css의 CSS 변수와 동일 값
      colors: {
        ink: {
          DEFAULT: '#17140f',
          2: '#2c2820',
        },
        paper: '#faf8f4',
        panel: '#f0ebe1',
        ember: {
          DEFAULT: '#e6481b',
          soft: '#fbe7de',
          deep: '#c93c13',
        },
        cool: {
          DEFAULT: '#4c6b72',
          soft: '#e3eaea',
        },
        marigold: '#e6a018',
        line: '#e4dccd',
        muted: '#6b6353',
      },
      fontFamily: {
        display: ['Hahmlet', 'Nanum Myeongjo', 'serif'],
        body: ['Pretendard', '-apple-system', 'Apple SD Gothic Neo', 'Malgun Gothic', 'sans-serif'],
        mono: ['IBM Plex Mono', 'ui-monospace', 'monospace'],
      },
      maxWidth: {
        shell: '1180px',
      },
    },
  },
  plugins: [],
};
