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
  taxID: SITE.bizNo,
  address: {
    '@type': 'PostalAddress',
    streetAddress: SITE.address.street,
    addressLocality: SITE.address.locality,
    addressRegion: SITE.address.region,
    addressCountry: SITE.address.country,
  },
  // 지도·로컬 검색이 위치를 확정하는 값. 주소 문자열만으로는 건물이 특정되지 않는다.
  geo: {
    '@type': 'GeoCoordinates',
    latitude: SITE.geo.lat,
    longitude: SITE.geo.lng,
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

        {/*
          구식 geo 메타. 구글·네이버 랭킹에는 쓰이지 않지만 일부 수집기가 아직 읽고,
          넣어서 손해 볼 것은 없다. 실제 지역 신호는 위 JSON-LD 의 address·geo·areaServed 다.
        */}
        <meta name="geo.region" content={SITE.address.isoRegion} />
        <meta name="geo.placename" content={`${SITE.address.region} ${SITE.address.locality}`} />
        <meta name="geo.position" content={`${SITE.geo.lat};${SITE.geo.lng}`} />
        <meta name="ICBM" content={`${SITE.geo.lat}, ${SITE.geo.lng}`} />

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
