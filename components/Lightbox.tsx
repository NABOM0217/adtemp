import { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import type { Shot } from '../lib/works';

/**
 * 이미지 확대 모달. 원래 Results 섹션에만 있던 것을 Services에서도 쓰려고 뺐다.
 *
 * 한 장이면 순위 캡처 확대(기존 동작 그대로), 여러 장이면 ‹ › 로 넘겨보는 갤러리가 된다.
 * aria-modal="true" 를 선언한 이상 포커스도 실제로 갇혀 있어야 하므로
 * Esc 닫기 · Tab 순환 · 배경 스크롤 잠금 · 닫은 뒤 원래 버튼으로 포커스 복귀까지 여기서 처리한다.
 *
 * 열려 있을 때만 마운트하는 컴포넌트다 — 부모가 조건부로 렌더한다.
 */
type Props = {
  items: Shot[];
  /** 처음 보여줄 장 (기본 0) */
  startIndex?: number;
  /** 다이얼로그 이름. 예: "'콘텐츠 제작' 작업 결과물" */
  label: string;
  /**
   * true면 세로로 긴 이미지도 한 화면에 다 들어오게 축소해서 보여준다(디자인 작업물용).
   * false(기본)면 원본 크기를 넘기지 않고 넘치는 만큼 스크롤한다 —
   * 검색결과 캡처처럼 작은 글씨를 읽어야 하는 것은 늘려버리면 뭉개진다.
   */
  fit?: boolean;
  onClose: () => void;
};

export default function Lightbox({ items, startIndex = 0, label, fit = false, onClose }: Props) {
  const [i, setI] = useState(startIndex);
  // 포커스 트랩 범위. ‹ › 버튼이 .lightbox-in 바깥에 있으므로 최상위 오버레이를 잡는다.
  const rootRef = useRef<HTMLDivElement>(null);

  /**
   * 닫은 뒤 되돌려줄 포커스 대상 — 이 컴포넌트를 열어준 버튼.
   * useEffect 에서 잡으면 늦는다: 닫기(X) 버튼의 autoFocus 가 커밋 단계에서 먼저 실행돼
   * activeElement 가 이미 X 버튼으로 바뀌어 있고, 그 버튼은 닫히면서 사라져 포커스가 body 로 떨어진다.
   * 첫 렌더(커밋 이전) 시점에 잡아야 원래 버튼이 남는다.
   */
  const [opener] = useState<HTMLElement | null>(() =>
    typeof document === 'undefined' ? null : (document.activeElement as HTMLElement | null)
  );

  const many = items.length > 1;

  const prev = useCallback(
    () => setI((v) => (v - 1 + items.length) % items.length),
    [items.length]
  );
  const next = useCallback(() => setI((v) => (v + 1) % items.length), [items.length]);

  // 닫힐 때 원래 버튼으로 포커스 복귀.
  useEffect(() => () => opener?.focus(), [opener]);

  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }
      if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
        // 재생기에 포커스가 있으면 ←/→ 는 구간 이동이다 — 장 넘기기가 가로채면 안 된다.
        if ((e.target as HTMLElement | null)?.tagName === 'VIDEO') return;
        if (!many) return;
        if (e.key === 'ArrowLeft') prev();
        else next();
        return;
      }
      if (e.key !== 'Tab') return;

      const focusables = rootRef.current?.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (!focusables || focusables.length === 0) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose, prev, next, many]);

  const cur = items[i];
  if (!cur) return null;

  return (
    <div
      className={fit ? 'lightbox fit' : 'lightbox'}
      role="dialog"
      aria-modal="true"
      aria-label={label}
      onClick={onClose}
      ref={rootRef}
    >
      <div className="lightbox-in" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="lightbox-x" onClick={onClose} aria-label="닫기" autoFocus>
          <X size={19} aria-hidden="true" />
        </button>

        {cur.video ? (
          // key 를 주어 다른 장으로 넘어가면 새 요소로 갈린다 — 이전 영상이 뒤에서 계속 재생되지 않는다.
          <video
            key={cur.video}
            src={cur.video}
            poster={cur.src}
            controls
            playsInline
            preload="metadata"
            aria-label={cur.alt}
          />
        ) : (
          <Image
            src={cur.src}
            alt={cur.alt}
            width={cur.w}
            height={cur.h}
            // 판독용 모드에서는 원본 픽셀보다 크게 늘리지 않는다.
            style={fit ? undefined : { maxWidth: cur.w }}
          />
        )}

        <div className="lightbox-cap">
          {cur.cap}
          {many && (
            <span className="lb-n">
              {i + 1} / {items.length}
            </span>
          )}
        </div>
      </div>

      {many && (
        <>
          <button
            type="button"
            className="lightbox-nav prev"
            aria-label="이전 이미지"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
          >
            <ChevronLeft size={22} aria-hidden="true" />
          </button>
          <button
            type="button"
            className="lightbox-nav next"
            aria-label="다음 이미지"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
          >
            <ChevronRight size={22} aria-hidden="true" />
          </button>
        </>
      )}
    </div>
  );
}
