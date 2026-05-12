const PRICE_IMAGE = "https://cdn.poehali.dev/projects/8e3a5684-5bc4-41c5-b5fb-b576bd37d996/bucket/944f3b7b-042f-467d-8860-5dfe11f94c98.jpg";
const MAX_LOGO = "https://cdn.poehali.dev/projects/8e3a5684-5bc4-41c5-b5fb-b576bd37d996/bucket/fdd32f4d-3c86-430f-989e-e23e1794f7ac.png";
const TELEGRAM_URL = "https://t.me/guzaerovav";
const MAX_URL = "https://max.ru/u/f9LHodD0cOIbXELU29wbdfnAqdgzqJtVoKhsgHOhHJGaxCR8sjT9UrIBJec";

const reviewScreenshots = [
  { img: "https://cdn.poehali.dev/projects/8e3a5684-5bc4-41c5-b5fb-b576bd37d996/bucket/a3e8ca0c-3641-411e-8614-478eac9df4ef.jpg", caption: "Восковые отливки — снятие негатива" },
  { img: "https://cdn.poehali.dev/projects/8e3a5684-5bc4-41c5-b5fb-b576bd37d996/bucket/fd0b0e03-7946-4875-a91d-2cec35c0ae05.jpg", caption: "Результат после сеанса" },
  { img: "https://cdn.poehali.dev/projects/8e3a5684-5bc4-41c5-b5fb-b576bd37d996/bucket/76e21497-d14e-4cdc-9ec7-dd17ee73662a.jpg", caption: "Отзыв после расклада" },
  { img: "https://cdn.poehali.dev/projects/8e3a5684-5bc4-41c5-b5fb-b576bd37d996/bucket/277701d6-beab-4210-baf4-c2560b96ab14.jpg", caption: "Точность предсказаний" },
  { img: "https://cdn.poehali.dev/projects/8e3a5684-5bc4-41c5-b5fb-b576bd37d996/bucket/9d2fe337-a0ea-4100-9293-000a781b0f0c.jpg", caption: "Диагностика — всё верно до деталей" },
  { img: "https://cdn.poehali.dev/projects/8e3a5684-5bc4-41c5-b5fb-b576bd37d996/bucket/c7819d8c-92e6-4822-8e36-43e9bb7371cc.jpg", caption: "Ставы на финансы — всё работает" },
  { img: "https://cdn.poehali.dev/projects/8e3a5684-5bc4-41c5-b5fb-b576bd37d996/bucket/4aad7a4f-1b6e-4b9c-b34a-22283bb7a5ab.jpg", caption: "Расклад Таро — год назад предсказала" },
  { img: "https://cdn.poehali.dev/projects/8e3a5684-5bc4-41c5-b5fb-b576bd37d996/bucket/dabfb954-34fc-44fe-8d22-134fe1eb6b6e.jpg", caption: "Вы не зная ничего — сказали всё как есть" },
  { img: "https://cdn.poehali.dev/projects/8e3a5684-5bc4-41c5-b5fb-b576bd37d996/bucket/59f95f0b-11b1-4fd8-b618-8f68db44cc33.jpg", caption: "Матрица судьбы — точно про меня" },
];

const utp = [
  { icon: "🔮", title: "Точность до деталей", desc: "Глубокий анализ, а не общие слова" },
  { icon: "🤫", title: "Конфиденциальность", desc: "Ваши вопросы — только между нами" },
  { icon: "⚡", title: "Ответ в течение часа", desc: "Работаю быстро, без ожидания" },
  { icon: "💛", title: "7+ лет практики", desc: "Сотни клиентов, которые вернулись снова" },
];

const tgSvg = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <path d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function Index() {
  return (
    <>
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #f5f0fa; }

        .page {
          min-height: 100vh;
          background: linear-gradient(160deg, #fdf8ff 0%, #f0e8ff 50%, #fce8f3 100%);
          font-family: 'Montserrat', sans-serif;
          color: #1a0a2e;
        }

        .wrap {
          width: 100%;
          max-width: 540px;
          margin: 0 auto;
          padding: 0 14px 48px;
        }

        /* ─── УТП ─── */
        .utp-section {
          padding: 28px 0 16px;
          text-align: center;
        }
        .utp-label {
          font-size: 11px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: #9333ea;
          margin-bottom: 8px;
        }
        .utp-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(26px, 7vw, 38px);
          color: #1a0a2e;
          line-height: 1.2;
          margin-bottom: 6px;
        }
        .utp-sub {
          font-size: 13px;
          color: #6b21a8;
          margin-bottom: 20px;
        }
        .utp-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 10px;
        }
        .utp-card {
          background: white;
          border: 1px solid rgba(147,51,234,0.15);
          border-radius: 16px;
          padding: 14px 12px;
          text-align: left;
          box-shadow: 0 2px 12px rgba(147,51,234,0.08);
        }
        .utp-icon { font-size: 24px; margin-bottom: 6px; }
        .utp-card-title { font-weight: 700; font-size: 12px; color: #1a0a2e; margin-bottom: 3px; }
        .utp-card-desc { font-size: 11px; color: #6b21a8; line-height: 1.5; }

        /* ─── ПРАЙС ─── */
        .price-wrap { position: relative; margin-top: 24px; }
        .price-wrap img { width: 100%; border-radius: 16px; display: block; }
        .price-btns {
          position: absolute;
          bottom: 12px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 8px;
          width: 92%;
          justify-content: center;
        }

        /* ─── CTA БЛОК ─── */
        .cta-block {
          margin: 24px 0;
          background: linear-gradient(135deg, #f3e8ff, #fce7f3);
          border: 1.5px solid rgba(147,51,234,0.25);
          border-radius: 20px;
          padding: 24px 16px;
          text-align: center;
        }
        .cta-emoji { font-size: 30px; margin-bottom: 8px; }
        .cta-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(20px, 6vw, 30px);
          color: #1a0a2e;
          margin-bottom: 8px;
          line-height: 1.25;
        }
        .cta-text {
          font-size: 13px;
          color: #4c1d95;
          line-height: 1.7;
          margin-bottom: 18px;
        }
        .cta-text strong { color: #7c3aed; font-weight: 700; }

        /* ─── ОТЗЫВЫ ─── */
        .reviews-label {
          font-size: 11px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: #db2777;
          margin-bottom: 8px;
          text-align: center;
        }
        .reviews-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(24px, 7vw, 36px);
          color: #1a0a2e;
          text-align: center;
          margin-bottom: 4px;
        }
        .reviews-sub {
          font-size: 12px;
          color: #9333ea;
          text-align: center;
          margin-bottom: 6px;
        }
        .divider {
          width: 60px;
          height: 2px;
          background: linear-gradient(90deg, transparent, #9333ea, transparent);
          margin: 8px auto 20px;
        }
        .reviews-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 10px;
        }
        .review-card {
          background: white;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 2px 16px rgba(147,51,234,0.1);
          border: 1px solid rgba(147,51,234,0.12);
        }
        .review-card img { width: 100%; display: block; }
        .review-card-footer {
          padding: 8px 10px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 4px;
        }
        .review-stars { color: #f59e0b; font-size: 11px; letter-spacing: 1px; }
        .review-caption { font-size: 10px; color: #7c3aed; font-style: italic; line-height: 1.3; text-align: right; }

        /* ─── ФИНАЛЬНЫЙ CTA ─── */
        .final-cta {
          margin-top: 28px;
          text-align: center;
        }
        .final-quote {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(16px, 5vw, 22px);
          color: #6b21a8;
          font-style: italic;
          margin-bottom: 18px;
        }

        /* ─── КНОПКИ ─── */
        .btn-row {
          display: flex;
          gap: 10px;
          justify-content: center;
          flex-wrap: wrap;
        }
        .btn-tg {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 14px 22px;
          border-radius: 50px;
          background: linear-gradient(135deg, #0088cc, #24A1DE);
          color: white;
          font-family: 'Montserrat', sans-serif;
          font-weight: 700;
          font-size: 14px;
          text-decoration: none;
          box-shadow: 0 4px 18px rgba(36,161,222,0.45);
          flex: 1 1 130px;
          transition: transform 0.2s, box-shadow 0.2s;
          white-space: nowrap;
        }
        .btn-tg:hover { transform: translateY(-2px); box-shadow: 0 7px 24px rgba(36,161,222,0.6); }
        .btn-max {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 14px 22px;
          border-radius: 50px;
          background: white;
          color: #5b21b6;
          font-family: 'Montserrat', sans-serif;
          font-weight: 700;
          font-size: 14px;
          text-decoration: none;
          box-shadow: 0 4px 18px rgba(100,80,220,0.3);
          border: 1.5px solid rgba(147,51,234,0.3);
          flex: 1 1 130px;
          transition: transform 0.2s, box-shadow 0.2s;
          white-space: nowrap;
        }
        .btn-max:hover { transform: translateY(-2px); box-shadow: 0 7px 24px rgba(100,80,220,0.45); }

        /* ─── МОБИЛЬНАЯ АДАПТАЦИЯ ─── */
        @media (max-width: 400px) {
          .utp-grid { grid-template-columns: 1fr 1fr; }
          .reviews-grid { grid-template-columns: 1fr 1fr; }
          .price-btns { flex-direction: column; align-items: center; width: 80%; }
          .btn-tg, .btn-max { flex: 1 1 100%; padding: 12px 18px; font-size: 13px; }
          .utp-card { padding: 12px 10px; }
          .utp-card-title { font-size: 11px; }
        }
      `}</style>

      <div className="page">
        <div className="wrap">

          {/* ── УТП ── */}
          <div className="utp-section">
            <div className="utp-label">Почему выбирают меня</div>
            <h2 className="utp-title">Ясность там, где был туман</h2>
            <p className="utp-sub">Не гадание — системная работа с картами и энергиями</p>
            <div className="utp-grid">
              {utp.map((u, i) => (
                <div key={i} className="utp-card">
                  <div className="utp-icon">{u.icon}</div>
                  <div className="utp-card-title">{u.title}</div>
                  <div className="utp-card-desc">{u.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── ПРАЙС-КАРТИНКА ── */}
          <div className="price-wrap">
            <img src={PRICE_IMAGE} alt="Прайс-лист" />
            <div className="price-btns">
              <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" className="btn-tg">
                {tgSvg} Telegram
              </a>
              <a href={MAX_URL} target="_blank" rel="noopener noreferrer" className="btn-max">
                <img src={MAX_LOGO} alt="Макс" style={{ width: 18, height: 18, objectFit: "contain" }} />
                Макс
              </a>
            </div>
          </div>

          {/* ── ПРИЗЫВ К ДЕЙСТВИЮ ── */}
          <div className="cta-block">
            <div className="cta-emoji">✨</div>
            <h3 className="cta-title">Готова дать тебе ответ<br />прямо сейчас</h3>
            <p className="cta-text">
              Напиши мне — и уже через несколько часов<br />
              у тебя будет ясность по твоему вопросу.
            </p>
            <div className="btn-row">
              <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" className="btn-tg">
                {tgSvg} Написать в Telegram
              </a>
              <a href={MAX_URL} target="_blank" rel="noopener noreferrer" className="btn-max">
                <img src={MAX_LOGO} alt="Макс" style={{ width: 20, height: 20, objectFit: "contain" }} />
                Написать в Макс
              </a>
            </div>
          </div>

          {/* ── ОТЗЫВЫ ── */}
          <div className="reviews-label">Отзывы клиентов</div>
          <h2 className="reviews-title">Реальные результаты</h2>
          <p className="reviews-sub">Скриншоты настоящих переписок с клиентами</p>
          <div className="divider" />

          <div className="reviews-grid">
            {reviewScreenshots.map((r, i) => (
              <div key={i} className="review-card">
                <img src={r.img} alt={r.caption} />
                <div className="review-card-footer">
                  <span className="review-stars">★★★★★</span>
                  <span className="review-caption">{r.caption}</span>
                </div>
              </div>
            ))}
          </div>

          {/* ── ФИНАЛЬНЫЙ CTA ── */}
          <div className="final-cta">
            <p className="final-quote">Доверься картам — создай свою судьбу</p>
            <div className="btn-row">
              <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" className="btn-tg">
                {tgSvg} Telegram
              </a>
              <a href={MAX_URL} target="_blank" rel="noopener noreferrer" className="btn-max">
                <img src={MAX_LOGO} alt="Макс" style={{ width: 20, height: 20, objectFit: "contain" }} />
                Макс
              </a>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}