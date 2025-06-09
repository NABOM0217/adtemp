import { LayoutDashboard, ShieldCheck, Edit } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Homepage() {
  const ref = useScrollAnimation();
  return (
    <section 
      ref={ref}
      id="Homepage" 
      className="px-6 py-28 bg-white text-center invisible-before"
    >
      <h2 className="text-3xl font-bold mb-4">홈페이지 제작 및 관리</h2>
      <p className="mb-8 text-gray-600">
        홈페이지 제작부터 관리, 수정까지 한 번에 도와드립니다.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {/* 제작 */}
        <div className="bg-gray-50 shadow rounded p-6">
          <LayoutDashboard className="text-purple-500 w-10 h-10 mb-2 mx-auto" />
          <h3 className="font-bold mb-2">홈페이지 제작</h3>
          <p className="text-sm text-gray-600 mb-4">기획부터 개발까지 전 과정 맞춤 제작</p>
        </div>

        {/* 관리 */}
        <div className="bg-gray-50 shadow rounded p-6">
          <ShieldCheck className="text-blue-500 w-10 h-10 mb-2 mx-auto" />
          <h3 className="font-bold mb-2">문제 발생 시 관리</h3>
          <p className="text-sm text-gray-600 mb-4">오류 대응, 점검 등 운영 안정성 보장</p>
        </div>

        {/* 수정 */}
        <div className="bg-gray-50 shadow rounded p-6">
          <Edit className="text-yellow-500 w-10 h-10 mb-2 mx-auto" />
          <h3 className="font-bold mb-2">홈페이지 수정</h3>
          <p className="text-sm text-gray-600 mb-4">팝업, 이미지, 문구 등 수시 업데이트</p>
        </div>
      </div>

      <div className="mt-10">
        <a 
          href="#contact" 
          className="bg-[#fc9a30] text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-[#e58e2d] hover:shadow-xl transition"
        >
          무료 상담하기
        </a>
      </div>
    </section>
  );
}
