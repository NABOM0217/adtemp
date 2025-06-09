// components/FloatingButtons.tsx
import React from 'react';
import Link from 'next/link';
import { Home, MessageSquare, Phone } from 'lucide-react';

export default function FloatingButtons() {
  return (
    <div className="fixed right-4 bottom-[33%] flex flex-col items-end space-y-1 z-50">
      {/* 1) 홈 버튼 */}
      <Link href="#hero">
        <a className="
            w-32 h-12
            flex items-center justify-center
            bg-blue-600 text-white
            rounded-full shadow-lg
            hover:bg-blue-700 transition
          ">
          <Home className="w-5 h-5 mr-1" aria-hidden="true" />
          <span>홈</span>
        </a>
      </Link>

      {/* 2) 상담문의 버튼 */}
      <Link href="#contact">
        <a className="
            w-32 h-12
            flex items-center justify-center
            bg-[#fc9a30] text-white
            rounded-full shadow-lg
            hover:bg-green-700 transition
          ">
          <MessageSquare className="w-5 h-5 mr-1" aria-hidden="true" />
          <span>상담문의</span>
        </a>
      </Link>

      {/* 3) 상담전화 버튼 */}
      <a
        href="tel:010-1234-5678"
        className="
          w-32 h-12
          flex items-center justify-center
          bg-red-600 text-white
          rounded-full shadow-lg
          hover:bg-red-700 transition
        "
      >
        <Phone className="w-5 h-5 mr-1" aria-hidden="true" />
        <span>상담전화</span>
      </a>
    </div>
  );
}
