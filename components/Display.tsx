// components/Display.tsx
import { Home, Tv, Monitor, ScrollText } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Display() {
   const ref = useScrollAnimation();
  return (
    <section 
      ref={ref}
      id="display" className="px-6 py-16 md:py-28 bg-gray-50 text-center invisible-before">
      <h2 className="text-3xl font-bold mb-4">디스플레이 광고</h2>
      <p className="mb-8 text-gray-600">옥탑빌보드, 지역 전광판 등 현장 광고로 시선을 사로잡습니다</p>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        
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
        
        {/* 배너 광고 */}
        <div className="bg-white shadow rounded p-6">
          <Monitor className="text-orange-500 w-10 h-10 mb-2 mx-auto" />
          <h3 className="font-bold mb-2">인터넷 배너 광고</h3>
          <p className="text-sm text-gray-600 mb-4">네이버, 구글, 카카오 등에 노출되는 디지털 광고</p>
        </div>

         {/* 현수막 */}
        <div className="bg-white shadow rounded p-6">
          <ScrollText className="text-red-500 w-10 h-10 mb-2 mx-auto" />
          <h3 className="font-bold mb-2">현수막</h3>
          <p className="text-sm text-gray-600 mb-4">행사, 안내, 지역 광고에 효과적인 메시지 전달</p>
        </div>

      </div>
      <div className="mt-10">
        <a href="#contact" 
         className="bg-[#fc9a30] text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-[#e58e2d] hover:shadow-xl transition"
      >
        무료 상담하기
        </a>
      </div>
    </section>
  );
}
