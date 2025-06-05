export default function SearchAds() {
  return (
    <section id="searchads" className="min-h-screen px-6 py-20 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold mb-4">검색광고는 고객과의 첫 연결입니다</h2>
      <p className="mb-8 text-gray-600">신뢰 기반 광고 운영으로 병원 유입을 극대화하세요</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {/* 파워링크 광고 */}
        <div className="bg-white shadow rounded p-6">
          <div className="text-blue-500 text-4xl mb-2">🔍</div>
          <h3 className="font-bold mb-2">파워링크 광고</h3>
          <p className="text-sm text-gray-600 mb-4">상위 노출을 통한 브랜드 인지도 확보</p>
          <button className="text-blue-600 font-semibold hover:underline">더 알아보기 →</button>
        </div>

        {/* 키워드 광고 */}
        <div className="bg-white shadow rounded p-6">
          <div className="text-blue-500 text-4xl mb-2">🔑</div>
          <h3 className="font-bold mb-2">키워드 광고</h3>
          <p className="text-sm text-gray-600 mb-4">실제 검색어 기반 유입 유도</p>
          <button className="text-blue-600 font-semibold hover:underline">더 알아보기 →</button>
        </div>

        {/* 성과 분석 */}
        <div className="bg-white shadow rounded p-6">
          <div className="text-blue-500 text-4xl mb-2">📈</div>
          <h3 className="font-bold mb-2">성과 분석</h3>
          <p className="text-sm text-gray-600 mb-4">실시간 리포트로 성과 확인 가능</p>
          <button className="text-blue-600 font-semibold hover:underline">더 알아보기 →</button>
        </div>
      </div>

      <div className="mt-10">
        <a
          href="#contact"
          className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-blue-700 transition"
        >
          무료 컨설팅 받기
        </a>
      </div>
    </section>
  );
}
