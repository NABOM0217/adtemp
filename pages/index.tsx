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
      </Head>

      <Navbar />
      <main className="pt-16">
        <Hero />
        <SearchAds />
        <Viral />
        <SNS />
        <Homepage />
        <Display />
        <Portfolio />
        <Contact />
      </main>

      {/* ① 플로팅 버튼 위치 */}
      <FloatingButtons />

      <Footer />
    </>
  );
}
