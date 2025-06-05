// components/FloatingButtons.tsx
import React from 'react';
import Link from 'next/link';

export default function FloatingButtons() {
  return (
    <div className="fixed right-4 bottom-[33%] flex flex-col items-end space-y-3 z-50">
      {/* 1) 홈 버튼 */}
      <Link href="#hero">
        <a className="
            w-24 h-12 
            flex items-center justify-center 
            bg-blue-600 text-white 
            rounded-full shadow-lg 
            hover:bg-blue-700 transition 
            text-center
          ">
          홈
        </a>
      </Link>

      {/* 2) 상담문의 버튼 */}
      <Link href="#contact">
        <a className="
            w-24 h-12 
            flex items-center justify-center 
            bg-green-600 text-white 
            rounded-full shadow-lg 
            hover:bg-green-700 transition 
            text-center
          ">
          상담문의
        </a>
      </Link>

      {/* 3) 상담전화 버튼 */}
      <a
        href="tel:010-1234-5678"
        className="
          w-24 h-12 
          flex items-center justify-center 
          bg-red-600 text-white 
          rounded-full shadow-lg 
          hover:bg-red-700 transition 
          text-center
        "
      >
        상담전화
      </a>
    </div>
  );
}
