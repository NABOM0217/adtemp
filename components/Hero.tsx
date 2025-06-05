export default function Hero() {
  return (
    <section id="hero" className="min-h-screen bg-white text-black flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        우리는, 온도를 조절하는 광고를 만듭니다.
      </h1>
      <p className="text-lg md:text-2xl mb-6 text-gray-600">
        광고의 미세한 온도차가, 결과의 큰 차이를 만듭니다. 섬세하게 뜨겁고, 따뜻하게 정직한 광고.
      </p>
      <a
        href="#contact"
        className="bg-[#fc9a30] text-white font-semibold px-6 py-3 rounded-full shadow hover:bg-[#e58e2d] transition"
      >
        무료 상담하기
      </a>
    </section>
  );
}