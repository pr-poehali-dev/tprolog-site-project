import { useEffect, useRef, useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/8e3a5684-5bc4-41c5-b5fb-b576bd37d996/files/8232cbad-8750-438a-95af-ba4ef1b8e3aa.jpg";
const MAX_LOGO = "https://cdn.poehali.dev/projects/8e3a5684-5bc4-41c5-b5fb-b576bd37d996/bucket/fdd32f4d-3c86-430f-989e-e23e1794f7ac.png";
const TELEGRAM_URL = "https://t.me/guzaerovav";
const MAX_URL = "https://max.ru/u/f9LHodD0cOIbXELU29wbdfnAqdgzqJtVoKhsgHOhHJGaxCR8sjT9UrIBJec";

const stars = Array.from({ length: 60 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 2.5 + 0.5,
  delay: Math.random() * 4,
  duration: Math.random() * 3 + 2,
}));

const services = [
  {
    icon: "HelpCircle",
    title: "Один вопрос",
    desc: "Развёрнутый ответ с пояснением",
    price: "550 ₽",
  },
  {
    icon: "Heart",
    title: 'Расклад «Вокзал влюблённых»',
    desc: "Что чувствует партнёр, что происходит в отношениях, перспектива на ближайшее время",
    price: "1 300 ₽",
  },
  {
    icon: "Sparkles",
    title: "Оракул любви",
    desc: "Кем является партнёр и вы в отношениях, планы, что объединяет, что мешает, развитие и перспектива",
    price: "1 700 ₽",
  },
  {
    icon: "LayoutGrid",
    title: "Схематичные расклады",
    desc: "Многоплановый анализ ситуации по вашему запросу",
    price: "1 500 ₽",
  },
  {
    icon: "CalendarDays",
    title: "Годовой расклад с личной энергией года",
    desc: "Полный прогноз на год с учётом вашей личной энергии",
    price: "2 000 ₽",
  },
  {
    icon: "Eye",
    title: "Диагностика негатива",
    desc: "Выявление негативных программ, блоков и ограничений",
    price: "2 500 ₽",
  },
];

const consultations = [
  { icon: "Clock", title: "Консультация 1 час", price: "2 500 ₽" },
  { icon: "Clock3", title: "Консультация 2 часа", price: "4 500 ₽" },
  {
    icon: "Flame",
    title: "Восковые отливки (снятие негатива)",
    price: "20 000 ₽",
  },
  {
    icon: "Star",
    title: "Ставы на привлечение финансов, гармонизацию отношений и многое другое",
    price: "8 000 ₽",
  },
];

const teachings = [
  {
    icon: "BookOpen",
    title: "Обучение матрице судьбы",
    price: "20 000 ₽",
    desc: "Полный курс работы с матрицей судьбы",
  },
  {
    icon: "GraduationCap",
    title: "Индивидуальное обучение искусству Таро с 0 до практика",
    price: "30 000 ₽",
    desc: "12 тем: История, символика, нумерология, система чтения карт и многое другое",
  },
];

const reviews = [
  {
    name: "Анастасия М.",
    text: "Расклад на отношения был очень точным. Всё описание партнёра совпало один в один. Теперь понимаю ситуацию намного лучше!",
    stars: 5,
    service: "Оракул любви",
  },
  {
    name: "Елена К.",
    text: "Прошла обучение Таро — это перевернуло мой взгляд на мир. Очень структурированная программа, всё понятно даже для новичка.",
    stars: 5,
    service: "Обучение Таро",
  },
  {
    name: "Марина Д.",
    text: "Диагностика показала то, о чём я давно догадывалась. После консультации стало намного легче. Спасибо за поддержку и ясность!",
    stars: 5,
    service: "Диагностика негатива",
  },
  {
    name: "Ольга Р.",
    text: "Годовой расклад — просто огонь! Уже прошло несколько месяцев, и всё что было предсказано — сбылось. Очень рекомендую!",
    stars: 5,
    service: "Годовой расклад",
  },
];

function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

function RevealSection({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useScrollReveal();
  return (
    <div
      ref={ref}
      className={`scroll-reveal ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function StarField() {
  return (
    <div className="star-field">
      {stars.map((s) => (
        <div
          key={s.id}
          className="star-dot"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: s.size,
            height: s.size,
            animation: `twinkle ${s.duration}s ease-in-out infinite`,
            animationDelay: `${s.delay}s`,
            opacity: 0.4,
          }}
        />
      ))}
    </div>
  );
}

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="mystic-bg min-h-screen relative overflow-x-hidden">
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4"
        style={{ background: "linear-gradient(180deg, rgba(10,8,18,0.95) 0%, rgba(10,8,18,0) 100%)", backdropFilter: "blur(8px)" }}>
        <div className="font-serif text-2xl text-gradient-gold font-semibold tracking-wide">
          ✦ Таролог
        </div>
        <ul className="hidden md:flex gap-8 text-sm font-medium tracking-widest uppercase">
          {["Главная", "Услуги", "Матрица", "Обучение", "Отзывы", "Контакты"].map((item, i) => (
            <li key={i}>
              <a
                href={`#${["hero","services","matrix","teaching","reviews","contacts"][i]}`}
                className="nav-link text-xs tracking-widest"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
        <button
          className="md:hidden text-gold p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Icon name={menuOpen ? "X" : "Menu"} size={24} />
        </button>
      </nav>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-6"
          style={{ background: "rgba(10,8,18,0.97)", backdropFilter: "blur(20px)" }}>
          {["Главная", "Услуги", "Матрица", "Обучение", "Отзывы", "Контакты"].map((item, i) => (
            <a
              key={i}
              href={`#${["hero","services","matrix","teaching","reviews","contacts"][i]}`}
              className="font-serif text-3xl text-gradient-gold"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      )}

      {/* HERO */}
      <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
        <StarField />
        {/* Background glow blobs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(circle, #7B2FBE 0%, transparent 70%)" }} />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-15 blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(circle, #E91E8C 0%, transparent 70%)" }} />

        <div className="container mx-auto px-6 pt-24 pb-16 flex flex-col lg:flex-row items-center gap-12 relative z-10">
          {/* Text */}
          <div className="flex-1 text-center lg:text-left">
            <p className="text-sm tracking-[0.3em] uppercase text-gold mb-4 opacity-80">
              Таро · Расклады · Матрица судьбы · Обучение
            </p>
            <h1 className="font-serif text-5xl md:text-7xl leading-tight mb-6"
              style={{ color: "#F5E6B8" }}>
              Открой свой путь
              <br />
              <span className="text-gradient-gold">к лучшему будущему</span>
            </h1>
            <div className="flex flex-col gap-2 mb-8">
              {["Ясность.", "Поддержка.", "Верное решение."].map((t, i) => (
                <p key={i} className="font-serif italic text-xl md:text-2xl text-gold-light opacity-90"
                  style={{ animationDelay: `${0.3 + i * 0.15}s`, color: "#D4AF37" }}>
                  {t}
                </p>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#services"
                className="btn-gold px-8 py-4 rounded-full text-sm font-bold tracking-wider uppercase inline-block text-center"
                style={{ color: "#0a0812" }}>
                Выбрать расклад
              </a>
              <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-8 py-4 rounded-full text-sm font-bold tracking-wider uppercase justify-center"
                style={{ background: "rgba(36,161,222,0.15)", border: "1px solid rgba(36,161,222,0.5)", color: "#24A1DE", transition: "all 0.3s" }}
                onMouseEnter={e => (e.currentTarget.style.background = "rgba(36,161,222,0.28)")}
                onMouseLeave={e => (e.currentTarget.style.background = "rgba(36,161,222,0.15)")}>
                <Icon name="Send" size={18} />
                Telegram
              </a>
              <a href={MAX_URL} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-8 py-4 rounded-full text-sm font-bold tracking-wider uppercase justify-center"
                style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.25)", color: "#e0d4ff", transition: "all 0.3s" }}
                onMouseEnter={e => (e.currentTarget.style.background = "rgba(255,255,255,0.16)")}
                onMouseLeave={e => (e.currentTarget.style.background = "rgba(255,255,255,0.08)")}>
                <img src={MAX_LOGO} alt="Макс" style={{ width: 20, height: 20, objectFit: "contain" }} />
                Макс
              </a>
            </div>
            <div className="flex gap-8 mt-10 justify-center lg:justify-start">
              {[["Интуиция", "✦"], ["Опыт", "✦"], ["Результат", "✦"]].map(([label, sym], i) => (
                <div key={i} className="text-center">
                  <div className="text-gold text-xl mb-1">{sym}</div>
                  <div className="text-xs tracking-widest uppercase" style={{ color: "rgba(212,175,55,0.7)" }}>{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="flex-1 flex justify-center relative">
            <div className="relative" style={{ animation: "float 7s ease-in-out infinite" }}>
              <div className="absolute inset-0 rounded-full blur-3xl opacity-30"
                style={{ background: "radial-gradient(circle, #7B2FBE 0%, #E91E8C 50%, transparent 80%)", transform: "scale(1.2)" }} />
              <img
                src={HERO_IMAGE}
                alt="Таролог"
                className="relative z-10 rounded-2xl w-full max-w-md object-cover"
                style={{
                  boxShadow: "0 0 60px rgba(123,47,190,0.4), 0 0 120px rgba(212,175,55,0.1)",
                  border: "1px solid rgba(212,175,55,0.3)",
                  maxHeight: "550px",
                }}
              />
              {/* Floating badges */}
              <div className="absolute -bottom-4 -left-6 card-mystic rounded-xl px-4 py-3 text-sm z-20">
                <div className="text-gold font-bold text-lg">500+</div>
                <div style={{ color: "rgba(240,208,96,0.7)", fontSize: "0.7rem" }}>довольных клиентов</div>
              </div>
              <div className="absolute -top-4 -right-6 card-mystic rounded-xl px-4 py-3 text-sm z-20">
                <div className="text-gold font-bold text-lg">7+ лет</div>
                <div style={{ color: "rgba(240,208,96,0.7)", fontSize: "0.7rem" }}>практики</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
          <div className="text-xs tracking-widest uppercase" style={{ color: "#D4AF37" }}>Листай вниз</div>
          <Icon name="ChevronDown" size={20} className="text-gold animate-bounce" />
        </div>
      </section>

      {/* SERVICES — ТАРО И РАСКЛАДЫ */}
      <section id="services" className="relative py-24 overflow-hidden">
        <StarField />
        <div className="container mx-auto px-6 relative z-10">
          <RevealSection>
            <div className="text-center mb-16">
              <p className="text-xs tracking-[0.4em] uppercase mb-3" style={{ color: "#A855F7" }}>Раздел 1</p>
              <h2 className="font-serif text-5xl md:text-6xl mb-4" style={{ color: "#F5E6B8" }}>
                Таро и расклады
              </h2>
              <div className="section-divider mb-6" />
              <p className="text-sm tracking-wide max-w-md mx-auto" style={{ color: "rgba(240,208,96,0.6)" }}>
                Индивидуальный подход · Конфиденциальность и безопасность
              </p>
            </div>
          </RevealSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <RevealSection key={i} delay={i * 80}>
                <div className="card-mystic rounded-2xl p-6 h-full flex flex-col gap-4">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ background: "rgba(123,47,190,0.3)", border: "1px solid rgba(212,175,55,0.3)" }}>
                        <Icon name={s.icon} fallback="Star" size={18} className="text-gold" />
                      </div>
                      <h3 className="font-semibold leading-snug" style={{ color: "#F5E6B8", fontSize: "0.95rem" }}>
                        {s.title}
                      </h3>
                    </div>
                    <span className="price-badge flex-shrink-0">{s.price}</span>
                  </div>
                  {s.desc && (
                    <p className="text-sm leading-relaxed" style={{ color: "rgba(240,208,96,0.55)" }}>{s.desc}</p>
                  )}
                  <div className="mt-auto">
                    <a href="#contacts"
                      className="btn-outline-gold text-xs tracking-wider uppercase px-5 py-2 rounded-full inline-block">
                      Заказать
                    </a>
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* CONSULTATIONS */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 70% 50%, rgba(233,30,140,0.07) 0%, transparent 60%)" }} />
        <div className="container mx-auto px-6 relative z-10">
          <RevealSection>
            <div className="text-center mb-16">
              <p className="text-xs tracking-[0.4em] uppercase mb-3" style={{ color: "#E91E8C" }}>Раздел 2</p>
              <h2 className="font-serif text-5xl md:text-6xl mb-4" style={{ color: "#F5E6B8" }}>
                Консультации и практики
              </h2>
              <div className="section-divider mb-6" />
            </div>
          </RevealSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {consultations.map((c, i) => (
              <RevealSection key={i} delay={i * 100}>
                <div className="card-mystic rounded-2xl p-6 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: "rgba(233,30,140,0.2)", border: "1px solid rgba(233,30,140,0.4)" }}>
                      <Icon name={c.icon} fallback="Star" size={22} style={{ color: "#E91E8C" }} />
                    </div>
                    <span className="font-medium leading-snug" style={{ color: "#F5E6B8" }}>{c.title}</span>
                  </div>
                  <span className="price-badge flex-shrink-0">{c.price}</span>
                </div>
              </RevealSection>
            ))}
          </div>

          <RevealSection delay={400}>
            <div className="text-center mt-10">
              <a href="#contacts" className="btn-gold px-10 py-4 rounded-full text-sm font-bold tracking-wider uppercase inline-block"
                style={{ color: "#0a0812" }}>
                Записаться на консультацию
              </a>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* MATRIX */}
      <section id="matrix" className="relative py-24 overflow-hidden">
        <StarField />
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 30% 50%, rgba(123,47,190,0.15) 0%, transparent 60%)" }} />
        <div className="container mx-auto px-6 relative z-10">
          <RevealSection>
            <div className="text-center mb-16">
              <p className="text-xs tracking-[0.4em] uppercase mb-3" style={{ color: "#A855F7" }}>Раздел 3</p>
              <h2 className="font-serif text-5xl md:text-6xl mb-4" style={{ color: "#F5E6B8" }}>
                Матрица судьбы
              </h2>
              <div className="section-divider mb-6" />
            </div>
          </RevealSection>

          <div className="max-w-3xl mx-auto">
            <RevealSection>
              <div className="card-mystic rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none opacity-10"
                  style={{ background: "radial-gradient(circle at center, #A855F7 0%, transparent 70%)" }} />

                {/* Matrix symbol */}
                <div className="w-24 h-24 mx-auto mb-8 relative">
                  <div className="absolute inset-0 rounded-full border border-gold opacity-30"
                    style={{ animation: "spin-slow 20s linear infinite" }} />
                  <div className="absolute inset-3 rounded-full border border-gold opacity-20"
                    style={{ animation: "spin-slow 15s linear infinite reverse" }} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-5xl">✦</span>
                  </div>
                </div>

                <h3 className="font-serif text-3xl md:text-4xl mb-3" style={{ color: "#F5E6B8" }}>
                  Полный разбор матрицы судьбы
                </h3>
                <div className="inline-block price-badge text-xl mb-6">3 000 ₽</div>

                <p className="text-sm leading-loose max-w-xl mx-auto mb-8" style={{ color: "rgba(240,208,96,0.65)" }}>
                  Расчёт числа жизни, 3 ключевые энергии, положительные и отрицательные стороны, таланты,
                  предназначение в жизни, детско-родительский канал, сфера деятельности, родовой квадрат,
                  прошлое воплощение, личная энергия года.
                </p>

                <div className="grid grid-cols-3 gap-4 mb-8">
                  {["Числа жизни", "3 энергии", "Предназначение"].map((item, i) => (
                    <div key={i} className="rounded-xl p-3"
                      style={{ background: "rgba(123,47,190,0.2)", border: "1px solid rgba(168,85,247,0.3)" }}>
                      <div className="text-xs tracking-wide" style={{ color: "#A855F7" }}>{item}</div>
                    </div>
                  ))}
                </div>

                <a href="#contacts" className="btn-gold px-10 py-4 rounded-full text-sm font-bold tracking-wider uppercase inline-block"
                  style={{ color: "#0a0812" }}>
                  Заказать разбор
                </a>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* TEACHING */}
      <section id="teaching" className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 70% 30%, rgba(168,85,247,0.1) 0%, transparent 60%)" }} />
        <div className="container mx-auto px-6 relative z-10">
          <RevealSection>
            <div className="text-center mb-16">
              <p className="text-xs tracking-[0.4em] uppercase mb-3" style={{ color: "#A855F7" }}>Раздел 4</p>
              <h2 className="font-serif text-5xl md:text-6xl mb-4" style={{ color: "#F5E6B8" }}>
                Обучение
              </h2>
              <div className="section-divider mb-6" />
            </div>
          </RevealSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {teachings.map((t, i) => (
              <RevealSection key={i} delay={i * 150}>
                <div className="card-mystic rounded-3xl p-8 h-full flex flex-col">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                    style={{ background: "rgba(168,85,247,0.25)", border: "1px solid rgba(168,85,247,0.4)" }}>
                    <Icon name={t.icon} fallback="Star" size={26} style={{ color: "#A855F7" }} />
                  </div>
                  <h3 className="font-serif text-2xl mb-3" style={{ color: "#F5E6B8" }}>{t.title}</h3>
                  <p className="text-sm mb-6" style={{ color: "rgba(240,208,96,0.6)" }}>{t.desc}</p>
                  <div className="mt-auto flex items-center justify-between">
                    <span className="price-badge text-lg">{t.price}</span>
                    <a href="#contacts"
                      className="btn-outline-gold text-xs tracking-wider uppercase px-5 py-2 rounded-full inline-block">
                      Узнать подробнее
                    </a>
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>

          {/* Program */}
          <RevealSection delay={300}>
            <div className="mt-12 max-w-3xl mx-auto card-mystic rounded-3xl p-8">
              <h3 className="font-serif text-2xl text-center mb-6" style={{ color: "#F5E6B8" }}>
                Программа обучения Таро
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "История", "Знак, образ, символ", "Основы работы с картами", "Стихии",
                  "Символика цвета", "Каббалистическая нумерология", "Система чтения карт",
                  "Придворные арканы, старшие арканы", "Символика карт Таро",
                  "Методика с пошаговым описанием 78 карт", "Общие значения, образы, сильные и слабые стороны",
                  "Просмотр негатива на Таро",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="text-gold text-xs flex-shrink-0">✦</span>
                    <span className="text-sm" style={{ color: "rgba(240,208,96,0.75)" }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="relative py-24 overflow-hidden">
        <StarField />
        <div className="container mx-auto px-6 relative z-10">
          <RevealSection>
            <div className="text-center mb-16">
              <p className="text-xs tracking-[0.4em] uppercase mb-3" style={{ color: "#E91E8C" }}>Отзывы</p>
              <h2 className="font-serif text-5xl md:text-6xl mb-4" style={{ color: "#F5E6B8" }}>
                Говорят клиенты
              </h2>
              <div className="section-divider mb-6" />
            </div>
          </RevealSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {reviews.map((r, i) => (
              <RevealSection key={i} delay={i * 100}>
                <div className="card-mystic rounded-2xl p-7 flex flex-col gap-4 h-full">
                  <div className="flex gap-1">
                    {Array.from({ length: r.stars }).map((_, si) => (
                      <span key={si} className="text-gold text-lg">★</span>
                    ))}
                  </div>
                  <p className="text-sm leading-relaxed flex-1" style={{ color: "rgba(240,208,96,0.75)" }}>
                    «{r.text}»
                  </p>
                  <div className="flex items-center justify-between pt-2"
                    style={{ borderTop: "1px solid rgba(212,175,55,0.15)" }}>
                    <div>
                      <div className="font-semibold text-sm" style={{ color: "#F5E6B8" }}>{r.name}</div>
                      <div className="text-xs" style={{ color: "rgba(168,85,247,0.8)" }}>{r.service}</div>
                    </div>
                    <div className="text-gold text-2xl">✦</div>
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(123,47,190,0.15) 0%, transparent 70%)" }} />
        <div className="container mx-auto px-6 relative z-10">
          <RevealSection>
            <div className="text-center mb-16">
              <p className="text-xs tracking-[0.4em] uppercase mb-3" style={{ color: "#A855F7" }}>Контакты</p>
              <h2 className="font-serif text-5xl md:text-6xl mb-4" style={{ color: "#F5E6B8" }}>
                Записаться
              </h2>
              <div className="section-divider mb-6" />
              <p className="text-sm max-w-md mx-auto" style={{ color: "rgba(240,208,96,0.6)" }}>
                Напишите мне в удобный мессенджер или заполните форму — отвечу в течение часа
              </p>
            </div>
          </RevealSection>

          <div className="max-w-2xl mx-auto">
            <RevealSection>
              <div className="card-mystic rounded-3xl p-8 md:p-12">
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
                  <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-3 px-7 py-4 rounded-2xl text-sm font-semibold transition-all"
                    style={{ background: "rgba(36,161,222,0.15)", border: "1px solid rgba(36,161,222,0.4)", color: "#24A1DE" }}
                    onMouseEnter={e => (e.currentTarget.style.background = "rgba(36,161,222,0.25)")}
                    onMouseLeave={e => (e.currentTarget.style.background = "rgba(36,161,222,0.15)")}>
                    <Icon name="Send" size={22} />
                    Telegram
                  </a>
                  <a href={MAX_URL} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-3 px-7 py-4 rounded-2xl text-sm font-semibold transition-all"
                    style={{ background: "rgba(100,80,220,0.15)", border: "1px solid rgba(100,80,220,0.45)", color: "#a78bfa" }}
                    onMouseEnter={e => (e.currentTarget.style.background = "rgba(100,80,220,0.28)")}
                    onMouseLeave={e => (e.currentTarget.style.background = "rgba(100,80,220,0.15)")}>
                    <img src={MAX_LOGO} alt="Макс" style={{ width: 24, height: 24, objectFit: "contain" }} />
                    Макс
                  </a>
                </div>

                <div className="flex flex-col gap-4">
                  <input
                    type="text"
                    placeholder="Ваше имя"
                    className="w-full px-5 py-4 rounded-xl text-sm outline-none"
                    style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(212,175,55,0.25)", color: "#F5E6B8" }}
                  />
                  <input
                    type="tel"
                    placeholder="Телефон / Telegram"
                    className="w-full px-5 py-4 rounded-xl text-sm outline-none"
                    style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(212,175,55,0.25)", color: "#F5E6B8" }}
                  />
                  <textarea
                    placeholder="Ваш вопрос или желаемая услуга"
                    rows={4}
                    className="w-full px-5 py-4 rounded-xl text-sm outline-none resize-none"
                    style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(212,175,55,0.25)", color: "#F5E6B8" }}
                  />
                  <button
                    className="btn-gold w-full py-4 rounded-xl text-sm font-bold tracking-wider uppercase"
                    style={{ color: "#0a0812" }}>
                    Отправить заявку
                  </button>
                </div>

                <p className="text-center text-xs mt-5" style={{ color: "rgba(212,175,55,0.4)" }}>
                  Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
                </p>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* FLOATING BUTTONS */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        <a
          href={TELEGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          title="Написать в Telegram"
          className="w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all hover:scale-110 active:scale-95"
          style={{ background: "linear-gradient(135deg, #0088cc, #24A1DE)", boxShadow: "0 4px 20px rgba(36,161,222,0.5)" }}
        >
          <Icon name="Send" size={24} color="white" />
        </a>
        <a
          href={MAX_URL}
          target="_blank"
          rel="noopener noreferrer"
          title="Написать в Макс"
          className="w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all hover:scale-110 active:scale-95 overflow-hidden"
          style={{ background: "white", boxShadow: "0 4px 20px rgba(100,80,220,0.5)" }}
        >
          <img src={MAX_LOGO} alt="Макс" style={{ width: 38, height: 38, objectFit: "contain" }} />
        </a>
      </div>

      {/* FOOTER */}
      <footer className="py-10 text-center" style={{ borderTop: "1px solid rgba(212,175,55,0.12)" }}>
        <div className="font-serif text-2xl text-gradient-gold mb-3">✦ Таролог</div>
        <p className="text-xs tracking-widest uppercase mb-4" style={{ color: "rgba(212,175,55,0.4)" }}>
          Таро · Расклады · Матрица судьбы · Обучение
        </p>
        <p className="text-xs" style={{ color: "rgba(212,175,55,0.3)" }}>
          Доверься картам — создай свою судьбу
        </p>
      </footer>
    </div>
  );
}