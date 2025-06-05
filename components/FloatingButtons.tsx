// components/FloatingButtons.tsx
import React from 'react';
import Link from 'next/link';

export default function FloatingButtons() {
  return (
    // 우측에서 1rem 띄우고, 하단에서 뷰포트 높이의 33% 위치에 고정
    <div className="fixed right-4 bottom-[33%] flex flex-col space-y-2 z-50">
      {/* 1) 홈 버튼 */}
      <Link href="#hero">
        <a className="bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-700 transition text-center">
          홈
        </a>
      </Link>
      {/* 2) 상담문의 버튼 */}
      <Link href="#contact">
        <a className="bg-green-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-green-700 transition text-center">
          상담문의
        </a>
      </Link>
      {/* 3) 상담전화 버튼 (tel 링크) */}
      <a
        href="tel:010-1234-5678"
        className="bg-red-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-red-700 transition text-center"
      >
        상담전화
      </a>
    </div>
  );
}
