'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const menuItems = [
  {
    label: '검색광고',
    link: '#searchads',
    submenu: [
      { label: '파워링크', link: '#searchads' },
      { label: '키워드광고', link: '#searchads' },
      { label: '플레이스', link: '#searchads' },
      { label: '성과분석', link: '#searchads' },
    ],
  },
  {
    label: '바이럴',
    link: '#viral',
    submenu: [
      { label: '브랜드 블로그', link: '#viral' },
      { label: '카페', link: '#viral' },
      { label: '체험단', link: '#viral' },
      { label: '리뷰', link: '#viral' },
      { label: '언론보도', link: '#viral' },
    ],
  },
  {
    label: 'SNS',
    link: '#sns',
    submenu: [
      { label: '브랜드 인스타', link: '#sns' },
      { label: '릴스 제작', link: '#sns' },
      { label: '쓰레드', link: '#sns' },
    ],
  },
  {
    label: '디스플레이',
    link: '#display',
    submenu: [
      { label: '옥탑빌보드', link: '#display' },
      { label: '전광판', link: '#display' },
      { label: '인터넷 배너', link: '#display' },
      { label: '현수막', link: '#display' },
    ],
  },
  { label: '홈페이지 제작', link: '#Homepage' },
  { label: '포트폴리오', link: '#portfolio' },
  { label: '상담문의', link: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white shadow z-[1000]">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center relative">
        {/* 로고 영역 */}
        <div className="flex items-center">
          <a href="#hero">
            <img src="/images/logo.png" alt="광고의 온도 로고" className="h-16 w-auto mr-2" />
          </a>
          <div className="flex flex-col ml-2 leading-tight">
            <a href="#hero" className="text-sm text-gray-500">
              우리는, 온도를 조절하는 광고를 만듭니다.
            </a>
            <a href="#hero" className="font-bold text-lg">광고의 온도</a>
          </div>
        </div>

        {/* 데스크탑 메뉴 */}
        <ul className="hidden md:flex gap-x-4 text-sm font-semibold relative z-[1001]">
          {menuItems.map((item, idx) => (
            <li key={idx} className="relative group">
              <a href={item.link} className="hover:text-blue-600 px-2 py-1 block">
                {item.label}
              </a>

              {item.submenu && (
                <div className="absolute top-full left-0 pt-3 z-[1002]">
                  <ul className="hidden group-hover:block bg-white shadow-md rounded p-2 space-y-1 min-w-[160px]">
                    {item.submenu.map((sub, subIdx) => (
                      <li key={subIdx}>
                        <a
                          href={sub.link}
                          className="block px-3 py-1 hover:bg-gray-100 rounded whitespace-nowrap"
                        >
                          {sub.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
          <li className="ml-2 font-medium text-gray-700">
           <a href="tel:010-3004-4810" className="hover:text-blue-600">
              010-3004-4810
            </a>
          </li>
        </ul>

        {/* 모바일 햄버거 */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)} className="text-gray-800 focus:outline-none">
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* 모바일 메뉴 */}
      {open && (
        <div className="md:hidden bg-white border-t px-4 pb-4 space-y-2 shadow">
          {menuItems.map((item, idx) => (
            <a
              key={idx}
              href={item.link}
              onClick={() => setOpen(false)}
              className="block py-2 text-sm font-medium text-gray-800 border-b"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-2 text-sm font-medium text-gray-600">010-3004-4810</div>
        </div>
      )}
    </nav>
  );
}
