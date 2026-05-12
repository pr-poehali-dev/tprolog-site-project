const PRICE_IMAGE = "https://cdn.poehali.dev/projects/8e3a5684-5bc4-41c5-b5fb-b576bd37d996/bucket/944f3b7b-042f-467d-8860-5dfe11f94c98.jpg";
const MAX_LOGO = "https://cdn.poehali.dev/projects/8e3a5684-5bc4-41c5-b5fb-b576bd37d996/bucket/fdd32f4d-3c86-430f-989e-e23e1794f7ac.png";
const TELEGRAM_URL = "https://t.me/guzaerovav";
const MAX_URL = "https://max.ru/u/f9LHodD0cOIbXELU29wbdfnAqdgzqJtVoKhsgHOhHJGaxCR8sjT9UrIBJec";

export default function Index() {
  return (
    <div style={{ minHeight: "100vh", background: "#0a0812", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "20px" }}>
      <div style={{ position: "relative", width: "100%", maxWidth: "600px" }}>
        {/* Картинка-прайс */}
        <img
          src={PRICE_IMAGE}
          alt="Прайс-лист"
          style={{ width: "100%", borderRadius: "16px", display: "block" }}
        />

        {/* Кнопки поверх картинки — снизу по центру */}
        <div style={{
          position: "absolute",
          bottom: "16px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: "12px",
          zIndex: 10,
        }}>
          {/* Telegram */}
          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "12px 24px",
              borderRadius: "50px",
              background: "linear-gradient(135deg, #0088cc, #24A1DE)",
              color: "white",
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 700,
              fontSize: "14px",
              textDecoration: "none",
              boxShadow: "0 4px 20px rgba(36,161,222,0.6)",
              whiteSpace: "nowrap",
              transition: "transform 0.2s, box-shadow 0.2s",
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 8px 30px rgba(36,161,222,0.8)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 4px 20px rgba(36,161,222,0.6)";
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
              <path d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            </svg>
            Telegram
          </a>

          {/* Макс */}
          <a
            href={MAX_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "12px 24px",
              borderRadius: "50px",
              background: "white",
              color: "#5b21b6",
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 700,
              fontSize: "14px",
              textDecoration: "none",
              boxShadow: "0 4px 20px rgba(100,80,220,0.5)",
              whiteSpace: "nowrap",
              transition: "transform 0.2s, box-shadow 0.2s",
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 8px 30px rgba(100,80,220,0.7)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 4px 20px rgba(100,80,220,0.5)";
            }}
          >
            <img src={MAX_LOGO} alt="Макс" style={{ width: 20, height: 20, objectFit: "contain" }} />
            Макс
          </a>
        </div>
      </div>
    </div>
  );
}
