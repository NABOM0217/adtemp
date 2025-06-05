export default function SNS() {
  return (
    <section id="sns" className="min-h-screen px-6 py-20 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold mb-4">SNS 마케팅</h2>
      <p className="mb-8 text-gray-600">브랜드 인스타그램 운영부터 릴스 제작, 쓰레드 관리까지</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <div className="bg-white shadow rounded p-6">
          <div className="text-pink-500 text-4xl mb-2">📷</div>
          <h3 className="font-bold mb-2">브랜드 인스타</h3>
          <p className="text-sm text-gray-600 mb-4">맞춤형 콘텐츠로 팔로워 증가</p>
        </div>
        <div className="bg-white shadow rounded p-6">
          <div className="text-red-500 text-4xl mb-2">🎬</div>
          <h3 className="font-bold mb-2">릴스 제작</h3>
          <p className="text-sm text-gray-600 mb-4">짧고 임팩트 있는 영상 제작</p>
        </div>
        <div className="bg-white shadow rounded p-6">
          <div className="text-gray-800 text-4xl mb-2">🧵</div>
          <h3 className="font-bold mb-2">쓰레드 관리</h3>
          <p className="text-sm text-gray-600 mb-4">트렌드 기반 유용한 정보 공유</p>
        </div>
      </div>
    </section>
  );
}