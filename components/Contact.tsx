// components/Contact.tsx
import { useState } from 'react';
import { User, Building2, Phone, MessageCircle } from 'lucide-react';
import { useRouter } from 'next/router';

export default function Contact() {
  // 상태 관리: 'idle', 'submitting', 'success', 'error'
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const router = useRouter();

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

  // 모달 닫기 시 처리: status 초기화 + 화면 맨 위로 스크롤
  const handleCloseModal = () => {
    setStatus("idle");             
    window.scrollTo({ top: 0, behavior: "smooth" });
    // 실제 첫 화면으로 이동하려면: router.push("/");
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
        <div className="flex items-center space-x-2">
          {/* 아이콘 + 레이블: 고정 너비 w-24 */}
          <div className="w-24 flex items-center">
            <User className="text-gray-700 w-6 h-6 mr-1" />
            <label htmlFor="name" className="font-medium whitespace-nowrap">
              성함 <span className="text-red-500">*</span>
            </label>
          </div>
          {/* 입력창: 남은 공간 채우기 */}
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

        {/* 상호 (필수) */}
        <div className="
