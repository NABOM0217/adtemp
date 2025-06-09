
import { useScrollAnimation } from '../hooks/useScrollAnimation';


export default function Homepage() {
   const ref = useScrollAnimation();
  return (
    <section 
      ref={ref}
      id="Homepage" className="px-6 py-28 bg-white text-center invisible-before">
      <h2 className="text-3xl font-bold mb-4">홈페이지 제작 및 관리</h2>
      <p className="mb-8 text-gray-600">홈페이지 기획부터 제작, 관리, 업데이트 원스톱 서비스</p>
      
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