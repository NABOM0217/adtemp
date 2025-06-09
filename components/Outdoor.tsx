// components/Outdoor.tsx
import { Home, Tv } from 'lucide-react';

export default function Outdoor() {
  return (
    <section id="outdoor" className="px-6 py-28 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold mb-4">옥외광고</h2>
      <p className="mb-8 text-gray-600">옥탑빌보드, 지역 전광판 등 현장 광고로 시선을 사로잡습니다</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        
        <div className="bg-white shadow rounded p-6">
         <Home className="text-yellow-500 w-10 h-10 mb-2 mx-auto" />  {/* 옥탑빌보드 아이콘 교체 */}
          <h3 className="font-bold mb-2">옥탑빌보드</h3>
          <p className="text-sm text-gray-600 mb-4">고지대 설치로 높은 노출 효과</p>
        </div>
        
        <div className="bg-white shadow rounded p-6">
         <Tv className="text-blue-500 w-10 h-10 mb-2 mx-auto" />  {/* 전광판 아이콘 교체 */}
          <h3 className="font-bold mb-2">전광판</h3>
          <p className="text-sm text-gray-600 mb-4">유동인구 많은 지역에서 주목도 상승</p>
        </div>
        
      </div>
      <div className="mt-10">
        <a href="#contact" 
         className="bg-[#fc9a30] text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 hover:shadow-xl transition"
      >
        무료 상담하기
        </a>
      </div>
    </section>
  );
}
