/**
 * 사이트 전역 상수.
 *
 * 연락처는 사장님 확정값(2026-08-07): 010-3004-4810 / nabom0217@gmail.com.
 * 시안 푸터에는 010-6425-9497 / nabom@gmail.com 로 적혀 있으나 그쪽이 아니다.
 * 도메인 등록정보·기존 라이브 사이트와 일치하는 값을 쓴다.
 */
export const SITE = {
  name: '나봄',
  nameEn: 'NABOM',
  legalName: '주식회사 나봄',
  ceo: '김현진',
  bizNo: '560-87-02893',
  url: 'https://adondo.co.kr',
  title: '나봄 NABOM · 천안 병원 마케팅 · 컨설팅',
  // ⚠️ 80자를 넘기지 말 것. 넘치면 네이버·구글 검색결과에서 뒷부분이 잘린다.
  //    직전 문안이 97자라 하필 차별점("같은 지역 같은 진료과는 한 곳만")이 잘려나갔다
  //    (2026-08-21 네이버 웹페이지 최적화 진단에서 확인). 현재 71자.
  //    meta description · og · twitter · JSON-LD 가 전부 이 한 줄을 쓴다.
  description:
    '넣을 광고와 뺄 광고를 가려냅니다. 15년차 대표가 직접 설계하는 천안 병원 마케팅·컨설팅. 같은 지역 같은 진료과는 한 곳만.',
  ogImage: '/og-image-v1.jpg',
  naverVerification: '13d8df27b677712c7918e60cfe2b384382c728c5',

  tel: '010-3004-4810',
  telHref: 'tel:01030044810',
  email: 'nabom0217@gmail.com',

  address: {
    street: '대흥로 228, 706호',
    locality: '천안시 동남구',
    region: '충청남도',
    country: 'KR',
    full: '충남 천안시 동남구 대흥로 228, 706호',
    /** ISO 3166-2:KR — 충청남도. 구식 geo.region 메타에 쓴다. */
    isoRegion: 'KR-44',
  },

  /**
   * 사무실 좌표. 지도·로컬 검색에서 위치를 확정하는 값이라 구조화 데이터에 넣는다.
   * 도로명주소(대흥로 228) 지오코딩 결과 = 삼영빌딩. 706호가 있는 건물과 일치한다.
   * 지도에서 어긋나 보이면 이 값만 고치면 JSON-LD·geo 메타가 함께 바뀐다.
   */
  geo: { lat: 36.8083, lng: 127.1481 },

  formspree: 'https://formspree.io/f/xdkgrrve',

  /** 푸터 저작권 연도. new Date()를 쓰면 연말에 SSR/CSR 값이 갈려 hydration 경고가 난다. */
  copyrightYear: 2026,
} as const;

/**
 * 상단 메뉴. **순서는 pages/index.tsx 의 섹션 배치와 반드시 일치시킨다** —
 * 어긋나면 메뉴를 위에서 아래로 눌렀을 때 화면이 내려갔다 올라갔다 한다.
 * (실제로 대표/서비스가 뒤바뀌어 있었다. 2026-08-10 정리)
 *
 * href 는 `#method` 가 아니라 `/#method` 로 둔다 — /privacy 같은 하위 페이지에서도
 * 눌리게 하려는 것이다. 홈에서는 같은 문서라 새로고침 없이 그대로 스크롤된다.
 */
export const NAV_LINKS = [
  { href: '/#method', label: '일하는 방식' },
  { href: '/#services', label: '서비스' },
  { href: '/#ceo', label: '대표' },
  { href: '/#results', label: '성과' },
  { href: '/#reviews', label: '후기' },
  { href: '/#packages', label: '패키지' },
  { href: '/#portfolio', label: '작업물' },
  { href: '/#faq', label: '자주 묻는 질문' },
] as const;
