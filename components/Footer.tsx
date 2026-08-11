import { SITE, NAV_LINKS } from '../lib/site';

export default function Footer() {
  return (
    <footer className="foot">
      <div className="shell">
        <div className="foot-top">
          <a href="/#top" className="wordmark">
            <span className="kr">나봄</span>
            <span className="en">NABOM</span>
          </a>
          <nav className="foot-links" aria-label="푸터 메뉴">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href}>
                {l.label}
              </a>
            ))}
            <a href="/#contact">상담 문의</a>
            {/* 폼으로 개인정보를 받으므로 방침 링크는 필수 */}
            <a href="/privacy">개인정보처리방침</a>
          </nav>
        </div>

        <div className="foot-meta">
          {SITE.legalName} · 대표 {SITE.ceo} · 사업자등록번호 {SITE.bizNo}
          <br />
          {SITE.address.full} · 전화 {SITE.tel} · {SITE.email}
          <br />© {SITE.copyrightYear} NABOM. All rights reserved.
          {/*
            OFL 은 폰트 사본을 배포할 때 저작권 표시를 함께 두도록 요구한다.
            제목 폰트는 SUITE 를 서브셋해 직접 서빙하므로(이름은 RFN 때문에 바꿈)
            원본 저작자를 밝히고 전문도 동봉한다 → /fonts/SUITE-OFL.txt
          */}
          <br />
          <span className="foot-font">
            글꼴 Pretendard · SUITE · IBM Plex Mono —{' '}
            <a href="https://openfontlicense.org/" rel="noopener noreferrer" target="_blank">
              SIL Open Font License 1.1
            </a>{' '}
            (<a href="/fonts/SUITE-OFL.txt">전문</a>)
          </span>
        </div>
      </div>
    </footer>
  );
}
