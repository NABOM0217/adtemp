// components/Viral.tsx
 import { FileText, Coffee, Megaphone, Star, Newspaper } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Viral() {
   const ref = useScrollAnimation();
  return (
    <section       
      ref={ref}
      id="viral" className="px-6 py-16 md:py-28 bg-white text-center invisible-before">
      <h2 className="text-3xl font-bold mb-4">바이럴 마케팅</h2>
      <p className="mb-8 text-gray-600">브랜드 블로그, 카페, 플레이스, 리뷰, 언론보도를 통한 신뢰도 상승</p>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 max-w-6xl mx-auto">
        
        <div className="bg-gray-50 shadow rounded p-6">
         <FileText className="text-pink-500 w-10 h-10 mb-2 mx-auto" />  {/* 브랜드 블로그 아이콘 교체 */}
          <h3 className="font-bold mb-2">브랜드 블로그</h3>
          <p className="text-sm text-gray-600 mb-4">전문 운영을 통한 지속 노출 확보</p>
        </div>
        
        <div className="bg-gray-50 shadow rounded p-6">
        <Coffee className="text-yellow-500 w-10 h-10 mb-2 mx-auto" />  {/* 카페 바이럴 아이콘 교체 */}
          <h3 className="font-bold mb-2">카페 바이럴</h3>
          <p className="text-sm text-gray-600 mb-4">커뮤니티 바이럴을 통한 자연스러운 신뢰 확보</p>
        </div>

        <div className="bg-gray-50 shadow rounded p-6">
        <Megaphone className="text-purple-500 w-10 h-10 mb-2 mx-auto" />
        <h3 className="font-bold mb-2">체험단</h3>
        <p className="text-sm text-gray-600 mb-4">실제 후기 기반의 신뢰도 높은 콘텐츠 생성</p>
        </div>
                
        <div className="bg-gray-50 shadow rounded p-6">
         <Star className="text-blue-500 w-10 h-10 mb-2 mx-auto" />  {/* 리뷰 관리 아이콘 교체 */}
          <h3 className="font-bold mb-2">리뷰 관리</h3>
          <p className="text-sm text-gray-600 mb-4">고객 리뷰 관리</p>
        </div>
        
        <div className="bg-gray-50 shadow rounded p-6">
         <Newspaper className="text-red-500 w-10 h-10 mb-2 mx-auto" />  {/* 언론보도 아이콘 교체 */}
          <h3 className="font-bold mb-2">언론보도</h3>
          <p className="text-sm text-gray-600 mb-4">언론 매체 홍보 기사 배포</p>
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
