// components/Hero.tsx

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center text-center px-4"
      style={{
        background: 'linear-gradient(to top right, #335289, #bd6ecd, #bf6ece, #ee5a4d, #fc9230, #fc9a30, #edc51e)',
      }}
    >
      <h1
        className="text-4xl md:text-6xl font-bold mb-4 text-white text-focus-in"
        style={{ textShadow: '0 1px 3px rgba(0, 0, 0, 0.5)' }}
      >
        우리는, 온도를 조절하는 광고를 만듭니다.
      </h1>
      <p
        className="text-lg md:text-2xl mb-6 text-white text-focus-in"
        style={{ animationDelay: '1.0s' }}
              
       /* 원래 텍스트 스타일 : 
       style={{ textShadow: '0 1px 2px rgba(0, 0, 0, 0.4)' }} //원래 텍스트 스타일
      */
       >
        광고의 미세한 온도차가, 결과의 큰 차이를 만듭니다. 
        <br />
        섬세하게 뜨겁고, 따뜻하게 정직한 광고.
      </p>
      <a
        href="#contact"
        className="bg-[#fc9a30] text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-[#e58e2d] hover:shadow-xl transition"
      >
        무료 상담하기
      </a>
    </section>
  );
}
