import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { SITE } from '../lib/site';

/**
 * 개인정보처리방침.
 *
 * 내용은 **실제 처리 현황과 맞춰야 한다.** 지금 개인정보가 나가는 곳은 상담 폼뿐이고,
 * 그 폼은 Formspree(미국)로 전송된다 — 예전 문구("외부로 공유되지 않습니다")는 사실과 달랐다.
 * 수집 항목은 components/Contact.tsx 의 input name 과 1:1로 맞춘다.
 *
 * ⚠️ 아래 항목이 바뀌면 이 페이지도 같이 고쳐야 한다:
 *    - 폼 필드 추가·삭제 (Contact.tsx)
 *    - 폼 전송처 변경 (SITE.formspree)
 *    - 호스팅 이전 (아래 '처리위탁' 표의 Vercel)
 *    - 방문자 분석 도구 도입 (현재 없음)
 */
const EFFECTIVE_DATE = '2026년 8월 11일';

/** 개인정보를 다루는 외부 업체. 국외 이전이면 그 사실을 반드시 밝힌다. */
const PROCESSORS = [
  {
    name: 'Formspree, Inc.',
    country: '미국',
    task: '상담 신청 폼 접수·전달',
    items: '성함, 병원명, 연락처, 문의 내용',
    period: '전달 후 지체 없이 파기 (서비스 보관 정책에 따름)',
  },
  {
    name: 'Vercel Inc.',
    country: '미국',
    task: '웹사이트 호스팅',
    items: '접속 기록(IP 주소, 접속 일시, 브라우저 정보)',
    period: '서비스 로그 보관 기간',
  },
];

export default function PrivacyPolicy() {
  const title = `개인정보처리방침 | ${SITE.name} ${SITE.nameEn}`;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content={`${SITE.legalName}의 개인정보처리방침입니다. 상담 신청 시 수집하는 항목과 이용 목적, 보유 기간, 국외 이전 사항을 안내합니다.`}
        />
        <link rel="canonical" href={`${SITE.url}/privacy`} />
        <link rel="icon" href="/favicon-v1.ico" />
        {/* 검색 결과에 노출될 필요가 없는 문서다 */}
        <meta name="robots" content="noindex, follow" />
      </Head>

      <Navbar />

      <main id="main">
        <section className="sec legal">
          <div className="shell">
            <span className="note">Privacy Policy</span>
            <h1 className="title">개인정보처리방침</h1>
            <p className="lede">
              {SITE.legalName}(이하 &lsquo;회사&rsquo;)은 이용자의 개인정보를 소중히 다루며, 관련
              법령을 준수합니다. 회사가 개인정보를 수집하는 곳은 <b>상담 신청 폼 한 곳</b>입니다.
            </p>

            <h2>1. 수집하는 개인정보 항목</h2>
            <ul>
              <li>
                <b>필수</b> — 성함, 병원명, 연락처
              </li>
              <li>
                <b>선택</b> — 문의 내용
              </li>
              <li>
                <b>자동 수집</b> — 웹사이트 접속 시 IP 주소, 접속 일시, 브라우저·기기 정보가 호스팅
                서비스의 서버 기록에 남습니다.
              </li>
            </ul>
            <p className="legal-note">
              회사는 <b>방문자 분석 도구(구글 애널리틱스 등)를 사용하지 않으며</b>, 광고·추적 목적의
              쿠키를 심지 않습니다.
            </p>

            <h2>2. 수집 및 이용 목적</h2>
            <p>
              상담 신청에 대한 회신과 진단 미팅 안내 목적으로만 이용합니다. 그 외의 목적으로는
              이용하지 않으며, 마케팅·광고 발송에 활용하지 않습니다.
            </p>

            <h2>3. 보유 및 이용 기간</h2>
            <p>
              상담이 종료된 후 지체 없이 파기합니다. 다만 관계 법령에 따라 보존할 필요가 있는 경우
              해당 기간 동안 보관합니다.
            </p>

            <h2>4. 제3자 제공</h2>
            <p>
              회사는 이용자의 <b>동의 없이 개인정보를 제3자에게 제공하지 않습니다.</b> 다만 아래
              5항과 같이 서비스 운영에 필요한 범위에서 처리를 위탁하고 있습니다.
            </p>

            <h2>5. 처리위탁 및 국외 이전</h2>
            <p>
              회사는 아래 업체에 개인정보 처리를 위탁하고 있으며, 해당 업체의 서버가 <b>국외</b>에
              있어 개인정보가 국외로 이전됩니다.
            </p>
            <div className="legal-table-wrap">
              <table className="legal-table">
                <thead>
                  <tr>
                    <th>이전받는 자</th>
                    <th>국가</th>
                    <th>위탁 업무</th>
                    <th>이전 항목</th>
                    <th>보유·이용 기간</th>
                  </tr>
                </thead>
                <tbody>
                  {PROCESSORS.map((p) => (
                    <tr key={p.name}>
                      <td>{p.name}</td>
                      <td>{p.country}</td>
                      <td>{p.task}</td>
                      <td>{p.items}</td>
                      <td>{p.period}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="legal-note">
              이전 방법은 상담 신청·웹사이트 접속 시 네트워크를 통한 전송입니다. 이용자는 국외 이전을
              거부할 수 있으며, 이 경우 폼 대신 전화(<a href={SITE.telHref}>{SITE.tel}</a>) 또는
              이메일(<a href={`mailto:${SITE.email}`}>{SITE.email}</a>)로 상담을 신청하실 수 있습니다.
            </p>
            <p className="legal-note">
              이 밖에 본문 글꼴을 외부 CDN(jsDelivr)에서 내려받는 과정에서 접속 기록이 해당
              서비스에 남을 수 있습니다. 이는 개인정보 처리 위탁이 아닌 정적 자원 요청입니다.
            </p>

            <h2>6. 정보주체의 권리</h2>
            <p>
              이용자는 언제든지 자신의 개인정보에 대해 <b>열람·정정·삭제·처리정지</b>를 요구할 수
              있습니다. 아래 연락처로 요청하시면 지체 없이 조치합니다.
            </p>

            <h2>7. 파기 절차 및 방법</h2>
            <p>
              보유 기간이 지나거나 처리 목적이 달성된 개인정보는 지체 없이 파기합니다. 전자적
              파일은 복구할 수 없는 방법으로 삭제하고, 출력물은 분쇄하거나 소각합니다.
            </p>

            <h2>8. 안전성 확보 조치</h2>
            <p>
              개인정보 취급자를 최소한으로 제한하고, 웹사이트 전 구간에 HTTPS 암호화 통신을
              적용하고 있습니다.
            </p>

            <h2>9. 개인정보 보호책임자</h2>
            <ul>
              <li>책임자 — {SITE.ceo} (대표)</li>
              <li>
                이메일 — <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
              </li>
              <li>
                전화 — <a href={SITE.telHref}>{SITE.tel}</a>
              </li>
            </ul>
            <p className="legal-note">
              개인정보 침해로 인한 신고·상담이 필요하시면 개인정보침해신고센터(국번없이 118),
              개인정보 분쟁조정위원회(1833-6972)로 문의하실 수 있습니다.
            </p>

            <h2>10. 시행일자</h2>
            <p>이 개인정보처리방침은 {EFFECTIVE_DATE}부터 시행합니다.</p>

            <p className="legal-back">
              <a href="/#contact">← 상담 문의로 돌아가기</a>
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
