'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const menuItems = [
  { label: '검색광고', link: '#searchads' },
  { label: '바이럴', link: '#viral' },
  { label: 'SNS', link: '#sns' },
  { label: '옥외광고', link: '#outdoor' },
  { label: '홈페이지 제작', link: '#Homepage' },
  { label: '포트폴리오', link: '#portfolio' },
  { label: '상담문의', link: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white shadow z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* 로고 */}
        <div className="flex items-center">
          <a href="#hero">
            <img src="/images/logo.png" alt="광고의 온도 로고" className="h-16 w-auto mr-2" />
          </a>
          <div className="flex flex-col">
              <a href="#hero" className="font-bold text-lg">
              광고의 온도
            </a>
          </div>
        </div>

        {/* 햄버거 메뉴 버튼 (모바일용) */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)} className="text-gray-800 focus:outline-none">
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* 메뉴 리스트 (데스크탑용) */}
        <ul className="hidden md:flex flex-row gap-x-4 text-sm font-semibold">
          {menuItems.map((item, idx) => (
            <li key={idx}>
              <a href={item.link} className="hover:text-blue-600 px-2 py-1">
                {item.label}
              </a>
            </li>
          ))}
          <li className="ml-2 font-medium text-gray-700">010-1234-5678</li>
        </ul>
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
          <div className="pt-2 text-sm font-medium text-gray-600">010-1234-5678</div>
        </div>
      )}
    </nav>
  );
}
