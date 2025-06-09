// components/Hero.tsx
import React, { useRef, useEffect } from 'react';

export default function Hero() {
  const headerRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const elems = [headerRef.current, paragraphRef.current].filter(Boolean) as Element[];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('text-focus-in');
          } else {
            entry.target.classList.remove('text-focus-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    elems.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="hero"
      /*className="min-h-screen flex flex-col items-center justify-center text-center px-4"*/ //화면 꽉채우기 
      className="min-h-[85vh] flex flex-col items-center justify-center text-center px-4"  //85%만 채우기
      style={{
        background: 'linear-gradient(to top right, #335289, #bd6ecd, #bf6ece, #ee5a4d, #fc9230, #fc9a30, #edc51e)',
      }}
    >
      <h1
        ref={headerRef}
        className="text-4xl md:text-6xl font-bold mb-4 text-white text-focus-in"
        style={{ animationDuration: '1.5s', textShadow: '0 1px 3px rgba(0, 0, 0, 0.5)' }}
      >
        우리는, 온도를 조절하는 광고를 만듭니다.
        
        <br />
        <br />
      </h1>
      <p
        ref={paragraphRef}
        className="text-lg md:text-2xl mb-6 text-white text-focus-in"
        style={{ animationDelay: '1.0s' }}
              
       /* 원래 텍스트 스타일 : 
       style={{ textShadow: '0 1px 2px rgba(0, 0, 0, 0.4)' }} //원래 텍스트 스타일
      */
       >
        광고의 미세한 온도차가,  
        <br className="md:hidden" />  {/* 모바일에서만 줄 바꿈*/}
        결과의 큰 차이를 만듭니다. 
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
