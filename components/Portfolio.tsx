// components/Portfolio.tsx
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Portfolio() {
   const ref = useScrollAnimation();
  return (
    <section      
      ref={ref}
      id="portfolio"
      className="px-6 py-28 bg-white text-center invisible-before"
    >
      {/* 제목 문구 변경 */}
      <h2 className="text-3xl font-bold mb-4">함께 성공을 만든 파트너들</h2>
      <p className="mb-8 text-gray-600">
        아래 파트너사 로고를 클릭하면 해당 병원/클리닉 홈페이지로 이동합니다.
      </p>

      {/* 로고 그리드: 최대 3개씩 가로 정렬, 모바일에서는 2개씩 */}
     <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-10 px-4 max-w-6xl mx-auto items-center">

        {/* 1) 금강메디컬의원 */}
        <a
          href="http://kkhosp.com/" /* 실제 URL로 교체하세요 */
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center"
        >
          <img
            src="/partners/geumgang_medical.gif"
            alt="금강메디컬의원 로고"
            className="h-20 object-contain"
          />
        </a>

        {/* 2) 한사랑비만클리닉 */}
        <a
          href="http://myhansarang.kr/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center"
        >
          <img
            src="/partners/hansarang_obesity.png"
            alt="한사랑비만클리닉 로고"
            className="h-20 object-contain"
          />
        </a>

        {/* 3) 한사랑요양병원 */}
        <a
          href="http://myhansarang.co.kr/#"
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center"
        >
          <img
            src="/partners/hansarang_nursing.png"
            alt="한사랑요양병원 로고"
            className="h-20 object-contain"
          />
        </a>

        {/* 4) 한사랑의원 */}
        <a
          href="http://www.myhansarang.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center"
        >
          <img
            src="/partners/hansarang_clinic.png"
            alt="한사랑의원 로고"
            className="h-20 object-contain"
          />
        </a>

        {/* 5) 화홍병원 */}
        <a
          href="https://www.hwahonghospital.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center"
        >
          <img
            src="/partners/hwahong_hospital.png"
            alt="화홍병원 로고"
            className="h-20 object-contain"
          />
        </a>

        {/* 6) 금강이화의원 */}
        <a
          href="http://kkhosp-beauty.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center"
        >
          <img
            src="/partners/geumgang_ihwa.png"
            alt="금강이화의원 로고"
            className="h-20 object-contain"
          />
        </a>
      </div>
    </section>
  );
}