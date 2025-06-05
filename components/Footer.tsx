export default function Footer() {
  return (
    <footer className="bg-white border-t mt-20">
      <div className="max-w-7xl mx-auto px-6 py-8 text-gray-600 text-sm space-y-1">
        {/* 1행: 법인명 */}
        <div>
          <h4 className="font-bold">주식회사 나봄</h4>
        </div>

        {/* 2행: 주소 + 개인정보처리방침 */}
        <div className="flex flex-col md:flex-row md:items-center md:gap-4">
          <p>충남 천안시 동남구 대흥로 228, 706호</p>
          <a href="/privacy" className="hover:underline">
            개인정보처리방침
          </a>
        </div>

        {/* 3행: 사업자등록번호 + 대표 */}
        <div className="flex flex-col md:flex-row md:items-center md:gap-4">
          <p>사업자등록번호: 560-87-02893</p>
          <p>대표: 김현진</p>
        </div>

        {/* 카피라이트 */}
        <div className="pt-4 text-center">
          © {new Date().getFullYear()} 주식회사 나봄. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
