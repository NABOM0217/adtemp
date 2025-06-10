import React from 'react';
import Link from 'next/link';
import { Home, MessageSquare, Phone } from 'lucide-react';

export default function FloatingButtons() {
   // 메뉴 닫는 함수
  const closeMobileMenu = () => {
    if (typeof window !== 'undefined') {
      const menuToggleButton = document.querySelector('nav .md\\:hidden button');
      if (menuToggleButton instanceof HTMLButtonElement) {
        menuToggleButton.click(); // 햄버거 메뉴 닫기
      }
    }
  };
  return (
    <div className="fixed right-4 bottom-4 md:bottom-12 flex flex-col items-end space-y-2 z-50">
      {/* 1) 홈 버튼 */}
      <Link href="#hero">
        <a
          className="
            w-24 h-10 md:w-32 md:h-12
            flex items-center justify-center
            bg-[#335289] text-white
            font-semibold text-sm md:text-base
            rounded-full shadow-lg
            hover:bg-[#2a456f] transition
          "
        >
          <Home className="w-4 h-4 md:w-5 md:h-5 mr-1" aria-hidden="true" />
          <span>홈</span>
        </a>
      </Link>

      {/* 2) 상담문의 버튼 */}
      <Link href="#contact">
        <a
          className="
            w-24 h-10 md:w-32 md:h-12
            flex items-center justify-center
            bg-[#bd6ecd] text-white
            font-semibold text-sm md:text-base
            rounded-full shadow-lg
            hover:bg-[#a255b8] transition
          "
        >
          <MessageSquare className="w-4 h-4 md:w-5 md:h-5 mr-1" aria-hidden="true" />
          <span>상담문의</span>
        </a>
      </Link>

      {/* 3) 상담전화 버튼 */}
      <a
        href="tel:010-3004-4810"
        className="
          w-24 h-10 md:w-32 md:h-12
          flex items-center justify-center
          bg-[#fc9230] text-white
          font-semibold text-sm md:text-base
          rounded-full shadow-lg
          hover:bg-[#e07f1f] transition
        "
      >
        <Phone className="w-4 h-4 md:w-5 md:h-5 mr-1" aria-hidden="true" />
        <span>상담전화</span>
      </a>
    </div>
  );
}
