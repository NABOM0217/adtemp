// components/FloatingButtons.tsx
import React from 'react';
import Link from 'next/link';

export default function FloatingButtons() {
  return (
    // 기존과 마찬가지로 우측에서 1rem, 하단에서 뷰포트 높이 33% 지점에 고정
    // 버튼 너비는 w-[4ch] → 4글자 분량으로 고정
    <div className="fixed right-4 bottom-[33%] flex flex-col items-end space-y-2 z-50">
      {/* 1) 홈 버튼 (텍스트 1글자지만, 넓이는 4글자 분량으로 고정) */}
      <Link href="#hero">
        <a className="w-[4ch] bg-blue-600 text-white py-2 rounded-full shadow-lg hover:bg-blue-700 transition text-center">
          홈
        </a>
      </Link>

      {/* 2) 상담문의 버튼 (텍스트 4글자, 넓이는 4글자 분량) */}
      <Link href="#contact">
        <a className="w-[4ch] bg-green-600 text-white py-2 rounded-full shadow-lg hover:bg-green-700 transition text-center">
          상담문의
        </a>
      </Link>

      {/* 3) 상담전화 버튼 (텍스트 4글자, 넓이는 4글자 분량) */}
      <a
        href="tel:010-1234-5678"
        className="w-[4ch] bg-red-600 text-white py-2 rounded-full shadow-lg hover:bg-red-700 transition text-center"
      >
        상담전화
      </a>
    </div>
  );
}
