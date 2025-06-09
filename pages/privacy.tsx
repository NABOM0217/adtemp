// pages/privacy.tsx
import Head from 'next/head';

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>개인정보처리방침 | 광고의 온도</title>
      </Head>
      <main className="max-w-3xl mx-auto px-6 py-16 text-gray-800 leading-relaxed">
        <h1 className="text-3xl font-bold mb-6">개인정보처리방침</h1>
        <p className="mb-4">
          주식회사 나봄(이하 ‘회사’)은 고객의 개인정보를 중요시하며, 문의 시 입력하신 정보는 오직 상담 목적의 연락을 위해서만 사용됩니다.
        </p>
        <h2 className="text-xl font-semibold mt-8 mb-2">1. 수집하는 개인정보 항목</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>성함, 상호명, 연락처, 문의내용</li>
        </ul>
        <h2 className="text-xl font-semibold mt-8 mb-2">2. 개인정보 수집 및 이용 목적</h2>
        <p className="mb-4">
          수집된 개인정보는 상담 문의에 대한 답변 및 연락 목적 이외의 용도로는 사용되지 않습니다.
        </p>
        <h2 className="text-xl font-semibold mt-8 mb-2">3. 개인정보의 보유 및 이용기간</h2>
        <p className="mb-4">
          상담 완료 후 관련 법령에 따른 보관 기간을 제외하고 즉시 파기합니다.
        </p>
        <h2 className="text-xl font-semibold mt-8 mb-2">4. 개인정보 제3자 제공</h2>
        <p className="mb-4">
          고객의 동의 없이 제3자에게 개인정보를 제공하지 않으며, 당사의 웹사이트 및 Formspree를 통해 접수된 정보는 외부로 공유되지 않습니다.
        </p>
        <h2 className="text-xl font-semibold mt-8 mb-2">5. 개인정보 보호 문의</h2>
        <p className="mb-4">
          개인정보 처리에 관한 문의사항은 이메일(nabom0217@gmail.com)로 연락주시면 신속히 안내해 드리겠습니다.
        </p>
      </main>
    </>
  );
}
