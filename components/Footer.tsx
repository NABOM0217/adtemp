import { SITE, NAV_LINKS } from '../lib/site';

export default function Footer() {
  return (
    <footer className="foot">
      <div className="shell">
        <div className="foot-top">
          <a href="#top" className="wordmark">
            <span className="kr">나봄</span>
            <span className="en">NABOM</span>
          </a>
          <nav className="foot-links" aria-label="푸터 메뉴">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href}>
                {l.label}
              </a>
            ))}
            <a href="#contact">상담 문의</a>
            {/* 폼으로 개인정보를 받으므로 방침 링크는 필수 */}
            <a href="/privacy">개인정보처리방침</a>
          </nav>
        </div>

        <div className="foot-meta">
          {SITE.legalName} · 대표 {SITE.ceo} · 사업자등록번호 {SITE.bizNo}
          <br />
          {SITE.address.full} · 전화 {SITE.tel} · {SITE.email}
          <br />© {SITE.copyrightYear} NABOM. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
