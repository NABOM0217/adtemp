// components/SearchAds.tsx
import { Search, Key, MapPin, BarChart } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function SearchAds() {
   const ref = useScrollAnimation();

  return (
    <section 
      ref={ref}
      id="searchads" 
      className="px-6 py-28 bg-gray-50 text-center invisible-before">
      <h2 className="text-3xl font-bold mb-4">검색광고는 고객과의 첫 연결입니다</h2>
      <p className="mb-8 text-gray-600">신뢰 기반 광고 운영으로 고객 유입을 극대화하세요</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">

        
        {/* 파워링크 광고 */}
        <div className="bg-white shadow rounded p-6">
          <Search className="text-green-500 w-10 h-10 mb-2 mx-auto" />
          <h3 className="font-bold mb-2">파워링크 광고</h3>
          <p className="text-sm text-gray-600 mb-4">상위 노출을 통한 브랜드 인지도 확보</p>
        </div>

        {/* 키워드 광고 */}
        <div className="bg-white shadow rounded p-6">
          <Key className="text-green-500 w-10 h-10 mb-2 mx-auto" />
          <h3 className="font-bold mb-2">키워드 광고</h3>
          <p className="text-sm text-gray-600 mb-4">실제 검색어 기반 유입 유도</p>
        </div>

        {/* 플레이스 광고 */}
        <div className="bg-white shadow rounded p-6">
          <MapPin className="text-green-500 w-10 h-10 mb-2 mx-auto" />  {/* 플레이스 노출 아이콘 교체 */}
          <h3 className="font-bold mb-2">플레이스 노출</h3>
          <p className="text-sm text-gray-600 mb-4">지역 기반 노출로 신뢰도 확보</p>
        </div>

        {/* 성과 분석 */}
        <div className="bg-white shadow rounded p-6">
          <BarChart className="text-green-500 w-10 h-10 mb-2 mx-auto" />
          <h3 className="font-bold mb-2">성과 분석</h3>
          <p className="text-sm text-gray-600 mb-4">실시간 리포트로 성과 확인 가능</p>
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
