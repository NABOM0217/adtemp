// components/Viral.tsx
+ import { FileText, Coffee, MapPin, Star, Newspaper } from 'lucide-react';

export default function Viral() {
  return (
    <section id="viral" className="min-h-screen px-6 py-20 bg-white text-center">
      <h2 className="text-3xl font-bold mb-4">바이럴 마케팅</h2>
      <p className="mb-8 text-gray-600">브랜드 블로그, 카페, 플레이스, 리뷰, 언론보도를 통한 신뢰도 상승</p>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 max-w-6xl mx-auto">
        
        <div className="bg-gray-50 shadow rounded p-6">
-         <div className="text-pink-500 text-4xl mb-2">📝</div>  :contentReference[oaicite:4]{index=4}
+         <FileText className="text-pink-500 w-10 h-10 mb-2 mx-auto" />  {/* 브랜드 블로그 아이콘 교체 */}
          <h3 className="font-bold mb-2">브랜드 블로그</h3>
          <p className="text-sm text-gray-600 mb-4">자동 운영으로 지속적 노출</p>
        </div>
        
        <div className="bg-gray-50 shadow rounded p-6">
-         <div className="text-yellow-500 text-4xl mb-2">☕</div>  :contentReference[oaicite:5]{index=5}
+         <Coffee className="text-yellow-500 w-10 h-10 mb-2 mx-auto" />  {/* 카페 바이럴 아이콘 교체 */}
          <h3 className="font-bold mb-2">카페 바이럴</h3>
          <p className="text-sm text-gray-600 mb-4">체험단으로 자연스러운 리뷰 확보</p>
        </div>
        
        <div className="bg-gray-50 shadow rounded p-6">
-         <div className="text-green-500 text-4xl mb-2">📍</div>  :contentReference[oaicite:6]{index=6}
+         <MapPin className="text-green-500 w-10 h-10 mb-2 mx-auto" />  {/* 플레이스 노출 아이콘 교체 */}
          <h3 className="font-bold mb-2">플레이스 노출</h3>
          <p className="text-sm text-gray-600 mb-4">지역 기반 노출로 신뢰도 확보</p>
        </div>
        
        <div className="bg-gray-50 shadow rounded p-6">
-         <div className="text-blue-500 text-4xl mb-2">⭐</div>  :contentReference[oaicite:7]{index=7}
+         <Star className="text-blue-500 w-10 h-10 mb-2 mx-auto" />  {/* 리뷰 관리 아이콘 교체 */}
          <h3 className="font-bold mb-2">리뷰 관리</h3>
          <p className="text-sm text-gray-600 mb-4">고객 리뷰 수집 및 관리</p>
        </div>
        
        <div className="bg-gray-50 shadow rounded p-6">
-         <div className="text-red-500 text-4xl mb-2">📰</div>  :contentReference[oaicite:8]{index=8}
+         <Newspaper className="text-red-500 w-10 h-10 mb-2 mx-auto" />  {/* 언론보도 아이콘 교체 */}
          <h3 className="font-bold mb-2">언론보도</h3>
          <p className="text-sm text-gray-600 mb-4">언론 매체에 홍보 기사 배포</p>
        </div>
        
      </div>
    </section>
  );
}
