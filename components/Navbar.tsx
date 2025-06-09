'use client';

import { useState } from 'react';

const menuItems = [
  {
    label: '검색광고',
    link: '#searchads',
    submenu: [
      { label: '파워링크', link: '#searchads' },
      { label: '키워드광고', link: '#searchads' },
      { label: '성과분석', link: '#searchads' },
    ],
  },
  {
    label: '바이럴',
    link: '#viral',
    submenu: [
      { label: '브랜드 블로그', link: '#viral' },
      { label: '카페', link: '#viral' },
      { label: '플레이스', link: '#viral' },
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
  { label: '유튜브', link: '#youtube' },
  {
    label: '옥외광고',
    link: '#outdoor',
    submenu: [
      { label: '옥탑빌보드', link: '#outdoor' },
      { label: '전광판', link: '#outdoor' },
    ],
  },
  { label: '포트폴리오', link: '#portfolio' },
  { label: '상담문의', link: '#contact' },
];

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState<number | null>(null);

  return (
    <nav className="fixed top-0 w-full bg-white shadow z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <a href="#hero">
            <img src="/images/logo.png" alt="광고의 온도 로고" className="h-16 w-auto mr-2" />
          </a>
          <div className="flex flex-col">
            <a href="#hero" className="text-sm text-gray-500">우리는, 온도를 조절하는 광고를 만듭니다.</a>
            <a href="#hero" className="font-bold text-lg">광고의 온도</a>
          </div>
        </div>
        <ul className="flex gap-6 text-sm font-semibold">
          {menuItems.map((item, idx) => (
            <li
              key={idx}
              className="relative group"
              onMouseEnter={() => setActiveMenu(idx)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <a href={item.link} className="hover:text-blue-600">{item.label}</a>
              {item.submenu && (
                <ul className="absolute top-full left-0 mt-2 bg-white shadow-md rounded p-2 space-y-1 min-w-[160px] opacity-0 group-hover:opacity-100 transition-opacity">
                  {item.submenu.map((sub, subIdx) => (
                    <li key={subIdx}>
                      <a href={sub.link} className="block px-3 py-1 hover:bg-gray-100 rounded">{sub.label}</a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
          <li className="ml-4 font-medium text-sm text-gray-700">010-1234-5678</li>
        </ul>
      </div>
    </nav>
  );
}