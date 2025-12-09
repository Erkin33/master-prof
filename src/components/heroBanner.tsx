"use client";

export default function HeroBanner() {
  return (
    <div className="relative w-full bg-[url('/MainBanner/Santexnik.jpg')] bg-cover bg-center">
      {/* overlay */}
      <div className="absolute inset-0 bg-black/45"></div>

      <div className="relative w-full max-w-[1200px] mx-auto flex flex-col justify-center px-6 md:px-8 py-[80px] box-border h-[857px]">
        <h1 className="text-white font-bold leading-[78px] text-[72px] max-w-[900px] max-[450px]:text-center max-[450px]:text-[15px]">
          Услуги электрика под
          <br className="max-[450px]:hidden"/>
          ключ в Ташкенте и
          <br className="max-[450px]:hidden"/>
          области
        </h1>

        <p className="mt-6 text-white text-[30px] leading-[38px] max-w-[780px] max-[450px]:text-center">
          Закажите мастера прямо сейчас и <br />
          <span className="text-[#ffc11e] font-bold text-[34px] max-[450px]:text-center max-[450px]:text-[20px]">
            получите скидку 15%
          </span>{" "}
          на все виды услуг!
        </p>

        {/* Buttons row */}
        <div className="flex mt-10 gap-6 items-center flex-wrap">
          {/* Primary */}
          <a
            href="tel:+998935286601"
            className="btn-primary relative overflow-hidden inline-flex items-center justify-center rounded-[10px] shadow-[0_10px_20px_rgba(0,0,0,0.25)]"
            aria-label="+998935286601"
          >
            <span className="max-[450px]:text-center max-[450px]:text-[18px] btn-text relative z-10 block py-[14px] px-[28px] text-[16px] font-bold uppercase text-[#222]">
              +998935286601
            </span>
          </a>

          {/* Outlined */}
          <a
            href="tel:+998931994960"
            target="_blank"
            rel="noreferrer"
            className="btn-outline relative overflow-hidden inline-flex items-center justify-center rounded-[10px] shadow-[0_10px_20px_rgba(0,0,0,0.18)]"
            aria-label="+998931994960"
          >
            <span className="max-[450px]:text-center max-[450px]:text-[18px] btn-text relative z-10 block py-[14px] px-[28px] text-[16px] font-bold uppercase text-[#ffc11e]">
              +998931994960
            </span>
          </a>
        </div>

        {/* Small cards */}
        <div className="cards flex mt-16 gap-12 max-w-[980px] max-[450px]:mx-auto">
          <div className="card flex items-start gap-4 max-[450px]:mx-auto">
            <div className="icon min-w-[36px] min-h-[36px] rounded-full bg-[#ffc11e] flex items-center justify-center shadow-[0_4px_8px_rgba(0,0,0,0.2)]">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M20 6L9 17l-5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <p className="card-text text-white text-[20px] leading-[24px]">
              Бесплатный выезд — за 30 минут
            </p>
          </div>

          <div className="card flex items-start gap-4">
            <div className="icon min-w-[36px] min-h-[36px] rounded-full bg-[#ffc11e] flex items-center justify-center shadow-[0_4px_8px_rgba(0,0,0,0.2)]">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M20 6L9 17l-5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <p className="card-text text-white text-[20px] leading-[24px]">
              Обеспечиваем расходными материалами
            </p>
          </div>

          <div className="card flex items-start gap-4">
            <div className="icon min-w-[36px] min-h-[36px] rounded-full bg-[#ffc11e] flex items-center justify-center shadow-[0_4px_8px_rgba(0,0,0,0.2)]">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M20 6L9 17l-5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <p className="card-text text-white text-[20px] leading-[24px]">
              Всегда есть свободный мастер
            </p>
          </div>
        </div>
      </div>

      {/* Styles */}
      <style>{`
        /* base */
        .btn-primary {
          background: linear-gradient(180deg, #ffd24a 0%, #ffc11e 100%);
          border: 1px solid rgba(0,0,0,0.06);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 220px;
          max-width: 320px;
        }
        .btn-outline {
          background: rgba(0,0,0,0.45);
          border: 2px solid #ffc11e;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 220px;
          max-width: 320px;
        }

        /* gloss (kept as before) */
        .btn-primary::after,
        .btn-outline::after {
          content: "";
          position: absolute;
          top: -12%;
          left: -140%;
          width: 70%;
          height: 140%;
          transform: rotate(25deg);
          background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.65) 45%, rgba(255,255,255,0.95) 62%, rgba(255,255,255,0) 100%);
          pointer-events: none;
          opacity: 0.95;
          animation: glossMoveFull 5.2s linear infinite;
        }
        @keyframes glossMoveFull {
          0% { left: -140%; opacity: 0; }
          6% { opacity: 0.5; }
          40% { left: 10%; opacity: 0.95; }
          70% { left: 110%; opacity: 0.6; }
          100% { left: 180%; opacity: 0; }
        }
        .btn-primary:hover::after,
        .btn-outline:hover::after { animation-play-state: paused; }
        .btn-primary:hover, .btn-outline:hover { transform: none !important; transition: none !important; }

        /* CARDS layout fixes */
        .cards {
          display: flex;
          gap: 24px;
          align-items: flex-start;
          box-sizing: border-box;
          width: 100%;
        }
        .card {
          display: flex;
          gap: 12px;
          align-items: flex-start;
          box-sizing: border-box;
          min-width: 0; /* IMPORTANT to prevent overflow inside flex */
        }
        .icon { flex: 0 0 auto; } /* keep icon fixed size */
        .card-text {
          flex: 1 1 auto;      /* allow text to take remaining space but shrink if needed */
          min-width: 0;        /* allow flex child to shrink properly */
          word-break: normal;
          white-space: normal; /* allow wrapping to avoid overflow */
          overflow-wrap: anywhere; /* be safe with long words */
        }

        /* strict responsive for <=1200 (keep existing behavior) */
        @media (max-width: 1200px) {
          h1 { font-size: 48px !important; line-height: 56px !important; }
          p  { font-size: 18px !important; line-height: 24px !important; }
          .btn-primary, .btn-outline {
            width: 320px !important;
            max-width: 90% !important;
            min-width: 200px !important;
            display: block !important;
            margin-left: auto !important;
            margin-right: auto !important;
          }
        }

        /* <=768px: make cards column (top -> down), icons keep size, text wraps but won't overflow */
        @media (max-width: 768px) {
          .cards {
            flex-direction: column;
            gap: 12px;
            align-items: stretch;
          }
          .card {
            width: 100%;
            gap: 12px;
          }
          .card-text { font-size: 18px !important; line-height: 22px !important; }
        }

        /* <=600px: small tweaks */
        @media (max-width: 600px) {
          h1 { font-size: 32px !important; line-height: 40px !important; }
          p  { font-size: 16px !important; line-height: 22px !important; }
          .card-text { font-size: 16px !important; }
          .btn-primary, .btn-outline {
            width: 260px !important;
            max-width: 92% !important;
          }
        }
      `}</style>
    </div>
  );
}
