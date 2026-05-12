const PRICE_IMAGE = "https://cdn.poehali.dev/projects/8e3a5684-5bc4-41c5-b5fb-b576bd37d996/bucket/944f3b7b-042f-467d-8860-5dfe11f94c98.jpg";
const MAX_LOGO = "https://cdn.poehali.dev/projects/8e3a5684-5bc4-41c5-b5fb-b576bd37d996/bucket/fdd32f4d-3c86-430f-989e-e23e1794f7ac.png";
const TELEGRAM_URL = "https://t.me/guzaerovav";
const MAX_URL = "https://max.ru/u/f9LHodD0cOIbXELU29wbdfnAqdgzqJtVoKhsgHOhHJGaxCR8sjT9UrIBJec";

const reviewScreenshots = [
  {
    img: "https://cdn.poehali.dev/projects/8e3a5684-5bc4-41c5-b5fb-b576bd37d996/bucket/a3e8ca0c-3641-411e-8614-478eac9df4ef.jpg",
    caption: "Восковые отливки — снятие негатива",
  },
  {
    img: "https://cdn.poehali.dev/projects/8e3a5684-5bc4-41c5-b5fb-b576bd37d996/bucket/fd0b0e03-7946-4875-a91d-2cec35c0ae05.jpg",
    caption: "Результат после сеанса",
  },
  {
    img: "https://cdn.poehali.dev/projects/8e3a5684-5bc4-41c5-b5fb-b576bd37d996/bucket/76e21497-d14e-4cdc-9ec7-dd17ee73662a.jpg",
    caption: "Отзыв после расклада",
  },
  {
    img: "https://cdn.poehali.dev/projects/8e3a5684-5bc4-41c5-b5fb-b576bd37d996/bucket/277701d6-beab-4210-baf4-c2560b96ab14.jpg",
    caption: "Точность предсказаний",
  },
];

const utp = [
  { icon: "🔮", title: "Точность до деталей", desc: "Каждый расклад — это глубокий анализ, а не общие слова" },
  { icon: "🤫", title: "Полная конфиденциальность", desc: "Ваши вопросы остаются только между нами" },
  { icon: "⚡", title: "Ответ в течение часа", desc: "Работаю быстро — вы не ждёте днями" },
  { icon: "💛", title: "7+ лет практики", desc: "Сотни клиентов, которые вернулись снова" },
];

const S = {
  page: {
    minHeight: "100vh",
    background: "#0a0812",
    fontFamily: "'Montserrat', sans-serif",
    color: "#F5E6B8",
  } as React.CSSProperties,
  wrap: {
    width: "100%",
    maxWidth: "620px",
    margin: "0 auto",
    padding: "0 16px 40px",
  } as React.CSSProperties,
  btnRow: {
    display: "flex",
    gap: "12px",
    justifyContent: "center",
    flexWrap: "wrap" as const,
    padding: "20px 0 4px",
  },
  btnTg: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    padding: "14px 28px",
    borderRadius: "50px",
    background: "linear-gradient(135deg, #0088cc, #24A1DE)",
    color: "white",
    fontWeight: 700,
    fontSize: "15px",
    textDecoration: "none",
    boxShadow: "0 4px 24px rgba(36,161,222,0.55)",
    flex: "1 1 140px",
    justifyContent: "center" as const,
    transition: "transform 0.2s",
  } as React.CSSProperties,
  btnMax: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    padding: "14px 28px",
    borderRadius: "50px",
    background: "white",
    color: "#5b21b6",
    fontWeight: 700,
    fontSize: "15px",
    textDecoration: "none",
    boxShadow: "0 4px 24px rgba(100,80,220,0.45)",
    flex: "1 1 140px",
    justifyContent: "center" as const,
    transition: "transform 0.2s",
  } as React.CSSProperties,
};

export default function Index() {
  return (
    <div style={S.page}>
      <div style={S.wrap}>

        {/* ───── УТП ───── */}
        <div style={{ padding: "32px 0 8px", textAlign: "center" }}>
          <div style={{ fontSize: "11px", letterSpacing: "0.35em", textTransform: "uppercase", color: "#A855F7", marginBottom: "10px" }}>
            Почему выбирают меня
          </div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(28px, 7vw, 42px)", color: "#F5E6B8", margin: "0 0 6px", lineHeight: 1.2 }}>
            Ясность там, где был туман
          </h2>
          <p style={{ color: "rgba(212,175,55,0.65)", fontSize: "14px", margin: "0 0 24px" }}>
            Не гадание — системная работа с картами и энергиями
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "10px" }}>
            {utp.map((u, i) => (
              <div key={i} style={{
                background: "linear-gradient(135deg, rgba(123,47,190,0.12), rgba(10,8,18,0.85))",
                border: "1px solid rgba(212,175,55,0.2)",
                borderRadius: "16px",
                padding: "16px",
                textAlign: "left",
              }}>
                <div style={{ fontSize: "26px", marginBottom: "6px" }}>{u.icon}</div>
                <div style={{ fontWeight: 700, fontSize: "13px", color: "#F5E6B8", marginBottom: "4px" }}>{u.title}</div>
                <div style={{ fontSize: "12px", color: "rgba(240,208,96,0.6)", lineHeight: 1.5 }}>{u.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ───── ПРАЙС-КАРТИНКА ───── */}
        <div style={{ position: "relative", marginTop: "28px" }}>
          <img
            src={PRICE_IMAGE}
            alt="Прайс-лист"
            style={{ width: "100%", borderRadius: "16px", display: "block" }}
          />
          {/* Оверлей с кнопками поверх картинки */}
          <div style={{
            position: "absolute",
            bottom: "12px",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            gap: "10px",
            zIndex: 10,
            width: "90%",
            justifyContent: "center",
          }}>
            <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" style={{ ...S.btnTg, padding: "11px 20px", fontSize: "13px" }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Telegram
            </a>
            <a href={MAX_URL} target="_blank" rel="noopener noreferrer" style={{ ...S.btnMax, padding: "11px 20px", fontSize: "13px" }}>
              <img src={MAX_LOGO} alt="Макс" style={{ width: 18, height: 18, objectFit: "contain" }} />
              Макс
            </a>
          </div>
        </div>

        {/* ───── ПРИЗЫВ К ДЕЙСТВИЮ ───── */}
        <div style={{
          margin: "28px 0",
          background: "linear-gradient(135deg, rgba(233,30,140,0.18), rgba(123,47,190,0.18))",
          border: "1px solid rgba(212,175,55,0.3)",
          borderRadius: "20px",
          padding: "28px 20px",
          textAlign: "center",
        }}>
          <div style={{ fontSize: "32px", marginBottom: "10px" }}>✨</div>
          <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(22px, 6vw, 32px)", color: "#F5E6B8", margin: "0 0 10px", lineHeight: 1.25 }}>
            Готова дать тебе ответ<br/>прямо сейчас
          </h3>
          <p style={{ color: "rgba(212,175,55,0.7)", fontSize: "13px", lineHeight: 1.7, margin: "0 0 22px" }}>
            Напиши мне — и уже через несколько часов<br/>
            у тебя будет ясность по твоему вопросу.<br/>
            <strong style={{ color: "#D4AF37" }}>Первая консультация — бесплатно.</strong>
          </p>
          <div style={S.btnRow}>
            <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" style={S.btnTg}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Написать в Telegram
            </a>
            <a href={MAX_URL} target="_blank" rel="noopener noreferrer" style={S.btnMax}>
              <img src={MAX_LOGO} alt="Макс" style={{ width: 20, height: 20, objectFit: "contain" }} />
              Написать в Макс
            </a>
          </div>
        </div>

        {/* ───── ОТЗЫВЫ ───── */}
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <div style={{ fontSize: "11px", letterSpacing: "0.35em", textTransform: "uppercase", color: "#E91E8C", marginBottom: "10px" }}>
            Отзывы клиентов
          </div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(26px, 7vw, 38px)", color: "#F5E6B8", margin: "0 0 4px" }}>
            Реальные результаты
          </h2>
          <p style={{ color: "rgba(212,175,55,0.5)", fontSize: "12px", margin: "6px 0 0" }}>
            Скриншоты настоящих переписок с клиентами
          </p>
          <div style={{ width: "60px", height: "2px", background: "linear-gradient(90deg, transparent, #D4AF37, transparent)", margin: "12px auto 24px" }} />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {reviewScreenshots.map((r, i) => (
            <div key={i} style={{
              background: "linear-gradient(135deg, rgba(123,47,190,0.1), rgba(10,8,18,0.9))",
              border: "1px solid rgba(212,175,55,0.2)",
              borderRadius: "20px",
              overflow: "hidden",
            }}>
              <img
                src={r.img}
                alt={r.caption}
                style={{ width: "100%", display: "block", borderRadius: "20px 20px 0 0" }}
              />
              <div style={{
                padding: "12px 16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}>
                <div style={{ display: "flex", gap: "1px" }}>
                  {[1,2,3,4,5].map(s => <span key={s} style={{ color: "#D4AF37", fontSize: "13px" }}>★</span>)}
                </div>
                <span style={{ fontSize: "12px", color: "#A855F7", fontStyle: "italic" }}>{r.caption}</span>
              </div>
            </div>
          ))}
        </div>

        {/* ───── ФИНАЛЬНЫЙ CTA ───── */}
        <div style={{ marginTop: "32px", textAlign: "center" }}>
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(18px, 5vw, 24px)", color: "rgba(212,175,55,0.7)", fontStyle: "italic", marginBottom: "20px" }}>
            Доверься картам — создай свою судьбу
          </p>
          <div style={S.btnRow}>
            <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" style={S.btnTg}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Telegram
            </a>
            <a href={MAX_URL} target="_blank" rel="noopener noreferrer" style={S.btnMax}>
              <img src={MAX_LOGO} alt="Макс" style={{ width: 20, height: 20, objectFit: "contain" }} />
              Макс
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}