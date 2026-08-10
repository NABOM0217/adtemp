import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../lib/site';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // 데스크톱 폭으로 넓어지면 드로어를 닫는다 (열린 채로 폭이 커지면 잔상이 남음)
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 901px)');
    const close = () => setOpen(false);
    mq.addEventListener('change', close);
    return () => mq.removeEventListener('change', close);
  }, []);

  return (
    <header className="nav">
      <div className="shell nav-in">
        <a href="#top" className="wordmark" onClick={() => setOpen(false)}>
          <span className="kr">나봄</span>
          <span className="en">NABOM</span>
        </a>

        <nav className="nav-menu" aria-label="주요 메뉴">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
          <a href="#contact" className="nav-book">
            무료 진단 미팅
          </a>

          {/* 시안은 900px 이하에서 메뉴를 display:none 으로 없애기만 했다 → 햄버거 추가 */}
          <button
            type="button"
            className="nav-burger"
            aria-label={open ? '메뉴 닫기' : '메뉴 열기'}
            aria-expanded={open}
            aria-controls="nav-drawer"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={21} aria-hidden="true" /> : <Menu size={21} aria-hidden="true" />}
          </button>
        </nav>
      </div>

      {open && (
        <div className="nav-drawer" id="nav-drawer">
          <div className="shell">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)}>
              무료 진단 미팅
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
