import React from 'react';
import { Home, MessageSquare, Phone } from 'lucide-react';

export default function FloatingButtons() {
  // 공통 햄버거 메뉴 닫기 함수
  const closeMobileMenu = () => {
  const menuToggleButton = document.querySelector('nav .md\\:hidden button');
  const mobileMenu = document.querySelector('nav > div + div'); // 메뉴 열렸을 때 생기는 div

  if (
    menuToggleButton instanceof HTMLButtonElement &&
    mobileMenu // 메뉴가 열려 있을 때만 존재
  ) {
    menuToggleButton.click();
  }
};

  const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const hero = document.querySelector('#hero');
    if (hero) {
      hero.scrollIntoView({ behavior: 'smooth' });
    }
    closeMobileMenu();
  };

  const handleContactClick = () => {
    closeMobileMenu(); // 스크롤 이동은 href로 충분
  };

  const handlePhoneClick = () => {
    closeMobileMenu(); // 전화 앱 이동 전 메뉴 닫기
  };

  return (
    <div className="fixed right-4 bottom-4 md:bottom-12 flex flex-col items-end space-y-2 z-50">
      {/* 1) 홈 버튼 */}
      <a
        href="#hero"
        onClick={handleHomeClick}
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

      {/* 2) 상담문의 버튼 */}
      <a
        href="#contact"
        onClick={handleContactClick}
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

      {/* 3) 상담전화 버튼 */}
      <a
        href="tel:010-3004-4810"
        onClick={handlePhoneClick}
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
