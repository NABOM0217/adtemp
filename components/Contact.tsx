import { useState, useRef } from 'react';
import { Lock } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { SITE } from '../lib/site';

const STEPS = [
  { i: 'STEP 01', h: '연락 주시기', p: '전화·문자·메일 또는 아래 폼으로 간단한 병원 정보를 공유해 주세요.' },
  { i: 'STEP 02', h: '방문 진단 미팅', p: '대표가 직접 방문합니다. 무료 1회 컨설팅.' },
  { i: 'STEP 03', h: '맞춤 제안서', p: '병원에 맞춘 구체적 제안과 견적을 전달합니다.' },
];

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function Contact() {
  const ref = useScrollAnimation();
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch(SITE.formspree, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formData,
      });

      if (res.ok) {
        setStatus('success');
        form.reset();
      } else {
        const data = await res.json().catch(() => null);
        setErrorMessage(
          data?.errors?.[0]?.message ||
            '전송에 실패했습니다. 잠시 후 다시 시도하시거나 전화로 연락 주세요.'
        );
        setStatus('error');
      }
    } catch {
      setErrorMessage('네트워크 오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
      setStatus('error');
    }
  };

  // 브라우저 기본 검증 실패 시 첫 번째 문제 필드로 포커스를 옮긴다
  const handleInvalid = (e: React.FormEvent) => {
    const el = e.target as HTMLInputElement;
    if (formRef.current?.querySelectorAll(':invalid')[0] === el) {
      el.focus();
    }
  };

  const closeModal = () => setStatus('idle');

  return (
    <section className="sec dark" id="contact">
      <div className="shell reveal" ref={ref}>
        <span className="note">Next Step</span>
        <h2 className="title" style={{ color: '#fff' }}>
          결과로 증명하는 마케팅,
          <br />
          진단 미팅부터 시작합니다.
        </h2>

        <div className="steps stagger">
          {STEPS.map((s) => (
            <div className="step" key={s.i}>
              <div className="sidx">{s.i}</div>
              <h3>{s.h}</h3>
              <p>{s.p}</p>
            </div>
          ))}
        </div>

        {/* 이모지 자물쇠는 기기마다 자형·색이 제각각이라 톤이 깨진다 → 선 아이콘으로 통일 */}
        <div className="excl">
          <Lock size={15} strokeWidth={2.2} aria-hidden="true" />
          같은 지역, 같은 진료과는 한 곳만 — 단독으로 진행합니다
        </div>

        {/* 시안은 전화 링크 하나뿐이라 PC 방문자의 전환 경로가 없었다 → 폼 추가 */}
        <div className="form-wrap">
          <div className="form-aside">
            <h3>무료 진단 미팅 신청</h3>
            <p>
              병원 정보를 남겨주시면 대표가 직접 확인하고 빠르게 연락드립니다. 상담은 무료이며,
              신청했다고 계약해야 하는 것은 아닙니다.
            </p>
            <div className="direct">
              전화 <a href={SITE.telHref}>{SITE.tel}</a>
              <br />
              메일 <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            </div>
          </div>

          <form className="nform" onSubmit={handleSubmit} ref={formRef} noValidate={false}>
            <input type="hidden" name="_subject" value="[나봄 홈페이지] 무료 진단 미팅 신청" />

            <div className="nf-row">
              <div className="nf">
                <label htmlFor="cf-name">
                  성함<span className="req" aria-hidden="true">*</span>
                </label>
                <input
                  id="cf-name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="김원장"
                  onInvalid={handleInvalid}
                />
              </div>

              <div className="nf">
                <label htmlFor="cf-hospital">
                  병원명<span className="req" aria-hidden="true">*</span>
                </label>
                <input
                  id="cf-hospital"
                  name="hospital"
                  type="text"
                  required
                  autoComplete="organization"
                  placeholder="○○의원"
                  onInvalid={handleInvalid}
                />
              </div>
            </div>

            <div className="nf">
              <label htmlFor="cf-phone">
                연락처<span className="req" aria-hidden="true">*</span>
              </label>
              <input
                id="cf-phone"
                name="phone"
                type="tel"
                required
                autoComplete="tel"
                inputMode="tel"
                placeholder="010-1234-5678"
                onInvalid={handleInvalid}
              />
            </div>

            <div className="nf">
              <label htmlFor="cf-message">문의 내용</label>
              <textarea
                id="cf-message"
                name="message"
                placeholder="진료과, 현재 진행 중인 마케팅, 고민되는 점을 적어주시면 미팅이 훨씬 빨라집니다."
              />
            </div>

            <label className="nf-agree" htmlFor="cf-agree">
              <input id="cf-agree" name="agree" type="checkbox" required onInvalid={handleInvalid} />
              <span>
                상담 진행을 위한 개인정보(성함·병원명·연락처) 수집·이용에 동의합니다. 수집한 정보는
                상담 목적으로만 사용합니다. <a href="/privacy">개인정보처리방침</a>
              </span>
            </label>

            {status === 'error' && (
              <p className="nf-error" role="alert">
                {errorMessage}
              </p>
            )}

            <button type="submit" className="nf-submit" disabled={status === 'submitting'}>
              {status === 'submitting' ? '전송 중…' : '무료 진단 미팅 신청 →'}
            </button>
            <p aria-live="polite" className="sr-only">
              {status === 'submitting' ? '전송 중입니다' : ''}
              {status === 'success' ? '신청이 접수되었습니다' : ''}
            </p>
          </form>
        </div>

        <div className="book">
          <div className="bi">
            <h3>전화가 편하시면</h3>
            <p>
              {/* 번호는 어디에 적히든 눌러서 바로 걸리게 한다 — 모바일에서 전화앱으로 넘어간다 */}
              전화 <a href={SITE.telHref}>{SITE.tel}</a>
            </p>
          </div>
          <a href={SITE.telHref} className="btn btn-fill">
            지금 전화 상담 →
          </a>
        </div>
      </div>

      {status === 'success' && (
        <>
          <div className="modal-bg" onClick={closeModal} />
          <div className="modal-wrap" role="dialog" aria-modal="true" aria-labelledby="modal-h">
            <div className="modal-box">
              <h3 id="modal-h">감사합니다.</h3>
              <p>
                신청이 접수되었습니다.
                <br />
                대표가 직접 확인하고 빠르게 연락드리겠습니다.
              </p>
              <button type="button" onClick={closeModal} autoFocus>
                닫기
              </button>
            </div>
          </div>
        </>
      )}
    </section>
  );
}
