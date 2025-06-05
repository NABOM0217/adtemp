// components/Contact.tsx
import { useState } from 'react';
import { useRouter } from 'next/router';
import { User, Building2, Phone, MessageCircle } from 'lucide-react';

export default function Contact() {
  // 상태 관리: 'idle', 'submitting', 'success', 'error'
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const router = useRouter();

  // 1. 폼 제출 핸들러
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    // HTML5 유효성 검사가 통과된 상태에서만 이 함수가 실행됨
    e.preventDefault();
    setStatus('submitting');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/xdkgrrve', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formData,
      });

      if (response.ok) {
        setStatus('success');
        form.reset(); // 입력값 초기화
      } else {
        const data = await response.json();
        setErrorMessage(data.error || '알 수 없는 오류가 발생했습니다.');
        setStatus('error');
      }
    } catch {
      setErrorMessage('네트워크 오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
      setStatus('error');
    }
  };

  // 2. 모달 닫기 버튼 클릭 시: 상태 초기화 + 맨 위로 스크롤
  const handleCloseModal = () => {
    setStatus('idle');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // 실제 라우팅을 원한다면 아래 주석을 해제하세요.
    // router.push('/');
  };

  // 3. 필수 입력란(onInvalid)에서 보여줄 커스텀 메시지
  const handleInvalidField = (e: React.FormEvent<HTMLInputElement>) => {
    const target = e.currentTarget;
    if (!target.value.trim()) {
      if (target.name === 'name') {
        target.setCustomValidity('성함을 입력해주세요.');
      } else if (target.name === 'company') {
        target.setCustomValidity('상호를 입력해주세요.');
      } else if (target.name === 'phone') {
        target.setCustomValidity('연락처를 입력해주세요.');
      }
    }
  };

  // 4. 사용자가 입력을 시작하면 커스텀 메시지 초기화
  const handleInputField = (e: React.FormEvent<HTMLInputElement>) => {
    e.currentTarget.setCustomValidity('');
  };

  return (
    // ┌───────────────────────────────────────────────────────────────────────────┐
    // │                        5. 최상위 <section> 여는 태그                      │
    // └───────────────────────────────────────────────────────────────────────────┘
    <section id="contact" className="relative min-h-screen px-6 py-20 bg-gray-50 text-center">
      {/* ──────────────────────────────────────────────────────────────────────────── */}
      {/* 5-1. 제목과 설명 */}
      <h2 className="text-3xl font-bold mb-4">상담문의</h2>
      <p className="mb-6 text-gray-600">아래 정보를 입력하시면 빠르게 연락드리겠습니다.</p>

      {/* ──────────────────────────────────────────────────────────────────────────── */}
      {/* 5-2. 서버/네트워크 에러 메시지(조건부 렌더링) */}
      {status === 'error' && (
        // ┌─────────────────────────────────────────────────────────────────────────┐
        // │  ┌─────────────── error 상태일 때 보여줄 <div> 여는 태그             │
        // └─────────────────────────────────────────────────────────────────────────┘
        <div className="max-w-md mx-auto mb-6 p-4 bg-red-100 text-red-800 rounded">
          {errorMessage}
        </div>
        // ┌─────────────────────────────────────────────────────────────────────────┐
        // │  └─────────────── error 상태일 때 보여줄 <div> 닫는 태그             │
        // └─────────────────────────────────────────────────────────────────────────┘
      )}

      {/* ──────────────────────────────────────────────────────────────────────────── */}
      {/* 5-3. <form> 여는 태그 */}
      <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4 text-left">
        {/* ────────────────────────────────────────────────────────────────────────── */}
        {/* 5-3-1. 성함 (필수) */}
        <div className="flex items-center space-x-2">
          {/* ┌────────────────────────────────────────────────────────────────────────┐ */}
          {/* │   아이콘+레이블을 묶는 고정 너비 컨테이너 <div> 여는 태그           │ */}
          {/* └────────────────────────────────────────────────────────────────────────┘ */}
          <div className="w-24 flex items-center">
            <User className="text-gray-700 w-6 h-6 mr-1" />
            <label htmlFor="name" className="font-medium whitespace-nowrap">
              성함 <span className="text-red-500">*</span>
            </label>
          </div>
          {/* ┌────────────────────────────────────────────────────────────────────────┐ */}
          {/* │   input 여는 태그 (self-closing)                                    │ */}
          {/* └────────────────────────────────────────────────────────────────────────┘ */}
          <input
            id="name"
            type="text"
            name="name"
            placeholder="성함을 입력해주세요"
            required
            onInvalid={handleInvalidField}
            onInput={handleInputField}
            className="flex-1 border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>
        {/* ┌─────────────────────────────────────────────────────────────────────────┐ */}
        {/* │  └─────────────── 성함 필드 <div> 닫는 태그                        │ */}
        {/* └─────────────────────────────────────────────────────────────────────────┘ */}

        {/* ────────────────────────────────────────────────────────────────────────── */}
        {/* 5-3-2. 상호 (필수) */}
        <div className="flex items-center space-x-2">
          <div className="w-24 flex items-center">
            <Building2 className="text-gray-700 w-6 h-6 mr-1" />
            <label htmlFor="company" className="font-medium whitespace-nowrap">
              상호 <span className="text-red-500">*</span>
            </label>
          </div>
          <input
            id="company"
            type="text"
            name="company"
            placeholder="상호를 입력해주세요"
            required
            onInvalid={handleInvalidField}
            onInput={handleInputField}
            className="flex-1 border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>
        {/* └─────────────── 상호 필드 <div> 닫는 태그                            */}

        {/* ────────────────────────────────────────────────────────────────────────── */}
        {/* 5-3-3. 연락처 (필수) */}
        <div className="flex items-center space-x-2">
          <div className="w-24 flex items-center">
            <Phone className="text-gray-700 w-6 h-6 mr-1" />
            <label htmlFor="phone" className="font-medium whitespace-nowrap">
              연락처 <span className="text-red-500">*</span>
            </label>
          </div>
          <input
            id="phone"
            type="tel"
            name="phone"
            placeholder="예) 010-1234-5678"
            required
            onInvalid={handleInvalidField}
            onInput={handleInputField}
            className="flex-1 border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>
        {/* └─────────────── 연락처 필드 <div> 닫는 태그                          */}

        {/* ────────────────────────────────────────────────────────────────────────── */}
        {/* 5-3-4. 문의내용 (선택) */}
        <div className="flex items-start space-x-2">
          <div className="w-24 flex items-center pt-2">
            <MessageCircle className="text-gray-700 w-6 h-6 mr-1" />
            <label htmlFor="message" className="font-medium whitespace-nowrap">
              문의내용
            </label>
          </div>
          <textarea
            id="message"
            name="message"
            placeholder="문의하실 내용을 입력해주세요"
            className="flex-1 border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
            rows={4}
          ></textarea>
        </div>
        {/* └─────────────── 문의내용 필드 <div> 닫는 태그                          */}

        {/* ────────────────────────────────────────────────────────────────────────── */}
        {/* 5-3-5. 제출 버튼 */}
        <button
          type="submit"
          disabled={status === 'submitting'}
          className={`w-full py-3 rounded font-semibold shadow transition ${
            status === 'submitting'
              ? 'bg-gray-400 text-gray-200 cursor-not-allowed'
              : 'bg-blue-600 text-white hover:bg-blue-700'
          }`}
        >
          {status === 'submitting' ? '문의 중…' : '문의하기'}
        </button>
        {/* └─────────────── 버튼 <button> 닫는 태그                            */}
      </form>
      {/* └─────────────── <form> 닫는 태그                                     */}

      {/* ──────────────────────────────────────────────────────────────────────────── */}
      {/* 5-4. 성공 시 모달 형태 메시지 박스 (조건부 렌더링) */}
      {status === 'success' && (
        // ┌────────────────────────────────────────────────────────────────────────┐
        // │                    JSX Fragment 여는 태그                               │
        // └────────────────────────────────────────────────────────────────────────┘
        <>
          {/* ┌──────────────────────────────────────────────────────────────────────┐ */}
          {/* │       배경 반투명 오버레이 <div> 여는 태그                           │ */}
          {/* └──────────────────────────────────────────────────────────────────────┘ */}
          <div className="fixed inset-0 bg-black/30 z-10"></div>
          {/* └────────────── 배경 반투명 오버레이 <div> 닫는 태그                 */}

          {/* ┌──────────────────────────────────────────────────────────────────────┐ */}
          {/* │        중앙 메시지 박스 래퍼 <div> 여는 태그                         │ */}
          {/* └──────────────────────────────────────────────────────────────────────┘ */}
          <div className="fixed inset-0 flex items-center justify-center z-20">
            {/* ┌───────────────────────────────────────────────────────────────────┐ */}
            {/* │          메시지 박스 내용 <div> 여는 태그                        │ */}
            {/* └───────────────────────────────────────────────────────────────────┘ */}
            <div className="bg-white max-w-sm w-full p-6 rounded-lg shadow-lg text-center">
              <p className="mb-4 text-lg font-medium">
                감사합니다. 빠르게 연락드리겠습니다.
              </p>
              <button
                onClick={handleCloseModal}
                className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
              >
                닫기
              </button>
            </div>
            {/* └────────────── 메시지 박스 내용 <div> 닫는 태그                 */}
          </div>
          {/* └────────────── 중앙 메시지 박스 래퍼 <div> 닫는 태그               */}
        </>
        // └────────────────────────────────────────────────────────────────────────┘
        //                    JSX Fragment 닫는 태그
      )}

    {/* └───────────────────────────────────────────────────────────────────────────┐ */}
    {/*                   5-5. 최상위 <section> 닫는 태그                        */}
    {/* └───────────────────────────────────────────────────────────────────────────┘ */}
    </section>
  );
}
