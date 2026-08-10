import Head from 'next/head';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Masthead from '../components/Masthead';
import OutIn from '../components/OutIn';
import Method from '../components/Method';
import Services from '../components/Services';
import Ceo from '../components/Ceo';
import Results from '../components/Results';
import Reviews from '../components/Reviews';
import Packages from '../components/Packages';
import Portfolio from '../components/Portfolio';
import Faq from '../components/Faq';
import Contact from '../components/Contact';
import FloatingButtons from '../components/FloatingButtons';
import Footer from '../components/Footer';
import { SITE } from '../lib/site';

const JSON_LD = {
  '@context': 'https://schema.org',
  '@type': ['Organization', 'LocalBusiness'],
  name: SITE.legalName,
  alternateName: 'NABOM',
  description: SITE.description,
  url: SITE.url,
  image: `${SITE.url}${SITE.ogImage}`,
  telephone: SITE.tel,
  email: SITE.email,
  founder: { '@type': 'Person', name: SITE.ceo },
  address: {
    '@type': 'PostalAddress',
    streetAddress: SITE.address.street,
    addressLocality: SITE.address.locality,
    addressRegion: SITE.address.region,
    addressCountry: SITE.address.country,
  },
  areaServed: { '@type': 'AdministrativeArea', name: '충청남도 천안시' },
  knowsAbout: ['병원 마케팅', '의료 마케팅 컨설팅', '블로그 마케팅', '검색 상위 노출'],
};

export default function Home() {
  return (
    <>
      <Head>
        <title>{SITE.title}</title>
        <meta name="description" content={SITE.description} />
        <link rel="canonical" href={SITE.url} />
        <link rel="icon" href="/favicon-v1.ico" />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="나봄 NABOM" />
        <meta property="og:title" content={SITE.title} />
        <meta property="og:description" content={SITE.description} />
        <meta property="og:image" content={`${SITE.url}${SITE.ogImage}`} />
        <meta property="og:url" content={SITE.url} />
        <meta property="og:locale" content="ko_KR" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={SITE.title} />
        <meta name="twitter:description" content={SITE.description} />
        <meta name="twitter:image" content={`${SITE.url}${SITE.ogImage}`} />

        {/* 기존 네이버 사이트 등록 값 유지 */}
        <meta name="naver-site-verification" content={SITE.naverVerification} />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
        />
      </Head>

      <a href="#main" className="skip">
        본문으로 건너뛰기
      </a>

      <Navbar />

      <main id="main">
        <Hero />
        <Masthead />
        <OutIn />
        <Method />
        <Services />
        <Ceo />
        <Results />
        <Reviews />
        <Packages />
        <Portfolio />
        <Faq />
        <Contact />
      </main>

      <FloatingButtons />
      <Footer />
    </>
  );
}
