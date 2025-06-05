export default function Footer() {
  return (
    <footer className="bg-white border-t mt-20">
      <div className="max-w-7xl mx-auto px-6 py-8 text-gray-600 text-sm">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-4 md:mb-0">
            <h4 className="font-bold mb-2">주식회사 나봄</h4>
            <p>충남 천안시 동남구 대흥로 228, 706호</p>
            <p>대표: 김현진</p>
            <p>사업자등록번호: 560-87-02893</p>
          </div>
          <div className="flex flex-col space-y-1 mb-4 md:mb-0">
            <a href="/privacy" className="hover:underline">개인정보처리방침</a>
            <a href="/terms" className="hover:underline">이용약관</a>
            <a href="/contact-info" className="hover:underline">연락처 안내</a>
          </div>
          <div>
            <p>고객센터: 010-1234-5678</p>
            <p>이메일: nabom0217@gmail.com</p>
          </div>
        </div>
        <div className="mt-6 text-center">
          © {new Date().getFullYear()} 주식회사 나봄. All rights reserved.
        </div>
      </div>
    </footer>
  );
}