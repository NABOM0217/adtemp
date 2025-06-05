// components/Contact.tsx
import { useState } from 'react';
import { User, Building2, Phone, MessageCircle } from 'lucide-react';

export default function Contact() {
  // 상태 관리: 'idle', 'submitting', 'success', 'error'
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  // 폼 제출 핸들러
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xdkgrrve", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        const data = await response.json();
        setErrorMessage(data.error || "알 수 없는 오류가 발생했습니다.");
        setStatus("error");
      }
    } catch {
      setErrorMessage("네트워크 오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
      setStatus("error");
    }
  };

  // 모달 닫기 시 처리
  const handleCloseModal = () => {
    setStatus("idle");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // 필수 입력란에서 onInvalid 시 보여줄 커스텀 메시지
  const handleInvalidField = (e: React.FormEvent<HTMLInputElement>) => {
    const target = e.currentTarget;
    if (!target.value.trim()) {
      if (target.name === "name") {
        target.setCustomValidity("성함을 입력해주세요.");
      } else if (target.name === "company") {
        target.setCustomValidity("상호를 입력해주세요.");
      } else if (target.name === "phone") {
        target.setCustomValidity("연락처를 입력해주세요.");
      }
    }
  };

  // 입력 시작 시 커스텀 메시지 초기화
  const handleInputField = (e: React.FormEvent<HTMLInputElement>) => {
    e.currentTarget.setCustomValidity("");
  };

  return (
    <section id="contact" className="relative min-h-screen px-6 py-20 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold mb-4">상담문의</h2>
      <p className="mb-6 text-gray-600">아래 정보를 입력하시면 빠르게 연락드리겠습니다.</p>

      {status === "error" && (
        <div className="max-w-md mx-auto mb-6 p-4 bg-red-100 text-red-800 rounded">
          {errorMessage}
        </div>
      )}

      <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4 text-left">
        {/* 성함 (필수) */}
        <div className="flex items-center">
          <User className="text-gray-700 w-6 h-6 mr-2" />
          <label className="block mb-1 font-medium" htmlFor="name">
            성함 <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="성함을 입력해주세요"
            required
            onInvalid={handleInvalidField}
            onInput={handleInputField}
            className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>

        {/* 상호 (필수) */}
        <div className="flex items-center">
          <Building2 className="text-gray-700 w-6 h-6 mr-2" />
          <label className="block mb-1 font-medium" htmlFor="company">
            상호 <span className="text-red-500">*</span>
          </label>
          <input
            id="company"
            type="text"
            name="company"
            placeholder="상호를 입력해주세요"
            required
            onInvalid={handleInvalidField}
            onInput={handleInputField}
            className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>

        {/* 연락처 (필수) */}
        <div className="flex items-center">
          <Phone className="text-gray-700 w-6 h-6 mr-2" />
          <label className="block mb-1 font-medium" htmlFor="phone">
            연락처 <span className="text-red-500">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            name="phone"
            placeholder="010-1234-5678"
            required
            onInvalid={handleInvalidField}
            onInput={handleInputField}
            className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>

        {/* 문의내용 (선택) */}
        <div className="flex items-start">
          <MessageCircle className="text-gray-700 w-6 h-6 mr-2 mt-2" />
          <label className="block mb-1 font-medium" htmlFor="message">
            문의내용
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="문의하실 내용을 입력해주세요"
            className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
            rows={4}
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={status === "submitting"}
          className={`w-full py-3 rounded font-semibold shadow transition
            ${status === "submitting"
              ? "bg-gray-400 text-gray-200 cursor-not-allowed"
              : "bg-blue-600 text-white hover:bg-blue-700"}`}
        >
          {status === "submitting" ? "문의 중…" : "문의하기"}
        </button>
      </form>

      {status === "success" && (
        <>
          <div className="fixed inset-0 bg-black/30 z-10"></div>
          <div className="fixed inset-0 flex items-center justify-center z-20">
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
          </div>
        </>
      )}
    </section>
  );
}
