// pages/index.tsx
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import SearchAds from '../components/SearchAds';
import Viral from '../components/Viral';
import SNS from '../components/SNS';
import Homepage from '../components/Homepage';
import Display from '../components/Display';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

// 새로 추가한 플로팅 버튼 컴포넌트 import
import FloatingButtons from '../components/FloatingButtons';

export default function Home() {
  return (
    <>
    <Head>
        <title>광고의 온도</title>
        <meta name="description" content="우리는, 온도를 조절하는 광고를 만듭니다." />
        <link rel="icon" href="/favicon.ico" />
        
        {/* 🔽 Open Graph 태그 */}
        <meta property="og:title" content="광고의 온도 - 우리는, 온도를 조절하는 광고를 만듭니다." />
        <meta property="og:description" content="광고의 미세한 온도차가, 결과의 큰 차이를 만듭니다." />
        <meta property="og:image" content="https://adondo.co.kr/og-image.jpg" />
        <meta property="og:url" content="https://adondo.co.kr" />
        <meta property="og:type" content="website" />

        <meta name="naver-site-verification" content="13d8df27b677712c7918e60cfe2b384382c728c5" /> /{/*네이버 사이트 등록 */}
      </Head>

      <Navbar />
      <main className="pt-16">
        <Hero />
        <SearchAds />
        <Viral />
        <SNS />
        <Display />
        <Homepage />
        <Portfolio />
        <Contact />
      </main>

      {/* ① 플로팅 버튼 위치 */}
      <FloatingButtons />

      <Footer />
    </>
  );
}
