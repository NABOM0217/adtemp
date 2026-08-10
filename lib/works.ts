/**
 * 서비스 종류별 작업 결과물.
 *
 * 키('01'~'04')는 Services.tsx의 ITEMS.si 와 1:1로 맞춘다.
 * 종류당 5칸을 목표로 하되, **실제로 있는 파일만 배열에 넣는다** —
 * next/image가 없는 파일을 참조하면 404가 나기 때문이다.
 * 못 채운 칸은 아래에 주석으로 파일명을 예약해 뒀다. public/images/ 에 사진을 넣고
 * 주석 줄을 항목으로 바꾸면 그 자리에 바로 뜬다.
 *
 * 포트폴리오는 실제 작업물이어야 하므로 빈 칸을 생성 이미지로 채우지 않는다.
 * (Results.tsx 의 순위 표기와 같은 원칙 — 실증할 수 있는 것만 싣는다.)
 *
 * w/h 는 public/images/ 원본의 실제 픽셀값이다.
 */
export type Shot = {
  /** 이미지. video 가 있으면 이건 재생 전 표지(poster)로 쓰인다. */
  src: string;
  /** 이미지 대체텍스트 */
  alt: string;
  /** 라이트박스 하단 캡션 */
  cap: string;
  w: number;
  h: number;
  /**
   * 영상 파일 URL. 있으면 확대했을 때 이미지 대신 재생기가 뜬다.
   * 나봄 자체 서버(app.adondo.co.kr)에 올린 mp4를 그대로 쓴다 — 유튜브 같은 외부 서비스를 끼우지 않아
   * 추천영상·로고가 붙지 않고, 20MB짜리 파일이 저장소·배포에 실리지도 않는다.
   * 목록에서는 표지 이미지(54KB)만 받고, 눌러서 열었을 때 비로소 영상을 받는다.
   */
  video?: string;
};

export type WorkGroup = {
  label: string;
  /**
   * 확대했을 때 한 화면에 맞춰 축소할지 여부.
   * 디자인 작업물은 true(전체가 한눈에), 검색결과 캡처는 false(원본 크기 유지 — 늘리면 글씨가 뭉개진다).
   */
  fit: boolean;
  shots: Shot[];
};

/**
 * 한사랑 피부클리닉 광고 영상 — **게재 동의 받음(2026-08-10 사장님 확인)**.
 * 서비스 '콘텐츠 제작'과 포트폴리오 양쪽에 걸리므로 여기 한 곳에만 둔다.
 */
export const VIDEO_HANSARANG: Shot = {
  src: '/images/works_content_video.jpg',
  video: 'https://app.adondo.co.kr/videos/optimized/2Pwi-GgAuMw.mp4',
  alt: '한사랑 피부클리닉 광고 영상',
  cap: '광고 영상 — 한사랑 피부클리닉 (기획·제작)',
  w: 1290,
  h: 720,
};

/**
 * 한사랑비만클리닉 시술 후 주의사항 안내 영상(세로형) — 게재 동의 받음(2026-08-10 사장님 확인).
 * 표지는 자체 서버 포스터가 끝 카드라 위아래가 비어 있어서, 본편 14.6초 프레임을 따로 뽑아 썼다.
 */
export const VIDEO_HANSARANG_DIET: Shot = {
  src: '/images/works_content_video_2.jpg',
  video: 'https://app.adondo.co.kr/videos/optimized/ijEkfinayDI.mp4',
  alt: '한사랑비만클리닉 시술 후 주의사항 안내 영상',
  cap: '영상 콘텐츠 — 한사랑비만클리닉 시술 후 주의사항 안내 (세로형)',
  w: 602,
  h: 1080,
};

/**
 * 옥상 광고탑 — 한사랑비만클리닉 (게재 동의 2026-08-10).
 * 원본은 `01_나봄 홈페이지/{금정간판사진.jpg, 화일간판사진.png}` 거리 사진이다.
 * 거리 전체가 찍혀 있어 타일에서는 간판이 안 보였다 → **간판만 남기고 잘랐고,
 * 비율은 그리드 한 칸(.pf ≈ 269x158, 1.70)에 맞춰 잘리는 부분이 없게 했다.**
 * 포트폴리오에도 같이 걸리므로 여기 한 곳에만 둔다.
 */
export const SIGN_GEUMJEONG: Shot = {
  src: '/images/works_offline_billboard_geumjeong.jpg',
  alt: '천안 금정빌딩 옥상 광고탑 — 한사랑비만클리닉',
  cap: '옥상 광고탑 — 한사랑비만클리닉 (천안 금정빌딩)',
  // 원본에서 간판이 320x188 로만 찍혀 있어 2배까지만 올렸다. 더 키우면 뭉개진다.
  w: 640,
  h: 376,
};

export const SIGN_HWAIL: Shot = {
  src: '/images/works_offline_billboard_hwail.jpg',
  alt: '천안역 화일빌딩 옥상 광고탑 — 한사랑비만클리닉',
  cap: '옥상 광고탑 — 한사랑비만클리닉 (천안역 화일빌딩)',
  w: 900,
  h: 529,
};

export const WORKS: Record<string, WorkGroup> = {
  '01': {
    label: '콘텐츠 제작',
    fit: true,
    shots: [
      {
        src: '/images/portfolio_character_1.jpg',
        alt: '나봄이 자체 제작한 병원 홍보용 캐릭터',
        cap: '자체 제작 캐릭터 — 진료과 컨셉에 맞춘 오리지널 캐릭터',
        w: 760,
        h: 424,
      },
      {
        src: '/images/portfolio_character_2.jpg',
        alt: '나봄이 자체 제작한 병원 홍보용 캐릭터 시리즈',
        cap: '자체 제작 캐릭터 — 시리즈로 확장해 채널 전반에 사용',
        w: 760,
        h: 420,
      },
      {
        src: '/images/portfolio_character_3.jpg',
        alt: '나봄이 자체 제작한 병원 홍보용 캐릭터 응용컷',
        cap: '자체 제작 캐릭터 — 시술·이벤트별 응용컷',
        w: 760,
        h: 423,
      },
      {
        src: '/images/portfolio_event_poster.jpg',
        alt: '병원 1월 이벤트 포스터',
        cap: '이벤트 포스터 — 시즌 이벤트 고지용',
        w: 760,
        h: 1075,
      },
      VIDEO_HANSARANG,
      VIDEO_HANSARANG_DIET,
    ],
  },

  '02': {
    label: '온라인 노출',
    // 검색결과 캡처는 작은 글씨를 읽어야 하므로 축소하지 않는다.
    fit: false,
    // 순위·측정시점 표기는 Results.tsx 의 RANKS 가 단일 출처다.
    // 여기서 "1위 (2024.03 기준)" 같은 수치를 다시 적으면 고칠 곳이 두 군데가 되고,
    // 실증 책임이 있는 문구가 서로 어긋날 수 있다 → 캡션은 키워드·검색영역까지만.
    shots: [
      {
        src: '/images/rank_cheonan_botox.jpg',
        alt: "'천안보톡스' 네이버 검색 인기글 상위 노출 캡처",
        cap: "'천안보톡스' · 네이버 인기글 — 상세 근거는 성과 섹션 참고",
        w: 680,
        h: 989,
      },
      {
        src: '/images/rank_cheonan_fungus.jpg',
        alt: "'천안무좀' 네이버 검색 인기글 상위 노출 캡처",
        cap: "'천안무좀' · 네이버 인기글 — 상세 근거는 성과 섹션 참고",
        w: 669,
        h: 1375,
      },
      {
        src: '/images/rank_cheonan_diet.jpg',
        alt: "'천안비만' 네이버 검색결과 상위 노출 캡처",
        cap: "'천안비만' · 네이버 검색결과 — 상세 근거는 성과 섹션 참고",
        w: 680,
        h: 1123,
      },
      {
        src: '/images/rank_cheonan_nursing.jpg',
        alt: "'천안요양병원' 네이버 플레이스 상위 노출 캡처",
        cap: "'천안요양병원' · 네이버 플레이스 — 상세 근거는 성과 섹션 참고",
        w: 680,
        h: 995,
      },
      {
        src: '/images/rank_program.jpg',
        alt: '나봄이 자체 제작한 실시간 순위 확인 프로그램 화면',
        cap: '실시간 순위 확인 프로그램 — 나봄 자체 제작, 원장님이 직접 확인',
        w: 1100,
        h: 821,
      },
    ],
  },

  '03': {
    label: '오프라인',
    fit: true,
    shots: [
      {
        src: '/images/portfolio_banners.jpg',
        alt: '시술별 배너 시리즈 디자인',
        cap: '배너 시리즈 — 시술별로 톤을 맞춰 한 벌로 제작',
        w: 820,
        h: 587,
      },
      {
        src: '/images/portfolio_mesotherapy.jpg',
        alt: '메조테라피 시술 배너 디자인',
        cap: '시술 배너 — 원내 게시용',
        w: 760,
        h: 1074,
      },
      SIGN_GEUMJEONG,
      SIGN_HWAIL,
      // TODO: works_offline_signboard.jpg — 입간판 설치 사진
      // TODO: works_offline_banner_hung.jpg — 현수막 게시 현장 사진
    ],
  },

  '04': {
    label: '홈페이지',
    fit: true,
    // 아직 게재할 제작 사례 캡처가 없다. 파일을 넣고 아래 TODO를 항목으로 바꾸면
    // Services 항목이 자동으로 '눌러서 보기'로 바뀐다 (Services.tsx 가 shots.length 로 판단).
    shots: [
      // TODO: works_site_1.jpg ~ works_site_5.jpg — 제작한 홈페이지 메인 캡처
    ],
  },
};
