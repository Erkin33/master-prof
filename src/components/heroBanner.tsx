"use client";

import React, { useEffect, useState } from "react";

/**
 * HeroBanner без JSX — сохранить как HeroBanner.nojsx.tsx
 */

type Topic = "default" | "Электрика" | "Сантехника";

export default function HeroBannerNoJSX(): React.ReactElement {
  const [topic, setTopic] = useState<Topic>("default");

  useEffect(() => {
    const handler = (e: Event) => {
      const ev = e as CustomEvent;
      const service = ev?.detail?.service;
      if (service === "Сантехника") setTopic("Сантехника");
      else if (service === "Электрика") setTopic("Электрика");
      else setTopic("default");
    };

    window.addEventListener("service:change", handler as EventListener);
    return () => window.removeEventListener("service:change", handler as EventListener);
  }, []);

  const headingText = topic === "Сантехника"
    ? ["Услуги сантехника под", "ключ в Ташкенте и", "области"]
    : ["Услуги электрика под", "ключ в Ташкенте и", "области"];

  const promoLines = topic === "Сантехника"
    ? ["Закажите мастера прямо сейчас и", "получите скидку 15% на все виды сантехнических работ!"]
    : ["Закажите мастера прямо сейчас и", "получите скидку 15% на все виды услуг!"];

  // helper to map lines into spans + br
  const headingChildren: React.ReactElement[] = headingText.map((line, i) =>
    React.createElement(
      "span",
      { key: `h-${i}` },
      line,
      React.createElement("br", { key: `br-h-${i}`, className: "max-[450px]:hidden" })
    )
  );

  const promoChildren: React.ReactElement[] = promoLines.map((line, i) =>
    React.createElement(
      "span",
      { key: `p-${i}` },
      line,
      React.createElement("br", { key: `br-p-${i}` })
    )
  );

  // small card helper (checkmark svg)
  const checkSvg = React.createElement(
    "svg",
    { width: 16, height: 16, viewBox: "0 0 24 24", fill: "none", "aria-hidden": "true" },
    React.createElement("path", { d: "M20 6L9 17l-5-5", stroke: "#fff", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" })
  );

  // build tree
  const root = React.createElement(
    "div",
    { className: "relative w-full bg-[url('/MainBanner/Santexnik.jpg')] bg-cover bg-center", id:"plus" },

    // overlay
    React.createElement("div", { className: "absolute inset-0 bg-black/45" }),

    // content container
    React.createElement(
      "div",
      { className: "relative w-full max-w-[1200px] mx-auto flex flex-col justify-center px-6 md:px-8 py-[80px] box-border h-[857px]" },

      // H1
      React.createElement(
        "h1",
        { className: "text-white font-bold leading-[78px] text-[72px] max-w-[900px] max-[450px]:text-center max-[450px]:text-[15px]" },
        ...headingChildren
      ),

      // promo paragraph
      React.createElement(
        "p",
        { className: "mt-6 text-white text-[30px] leading-[38px] max-w-[780px] max-[450px]:text-center" },
        ...promoChildren,
        React.createElement(
          "span",
          { className: "text-[#ffc11e] font-bold text-[34px] max-[450px]:text-center max-[450px]:text-[20px]" },
          "получите скидку 15%"
        ),
        " ",
        "на все виды услуг!"
      ),

      // buttons row
      React.createElement(
        "div",
        { className: "flex mt-10 gap-6 items-center flex-wrap" },
        // primary
        React.createElement(
          "a",
          {
            href: "tel:+998935286601",
            className: "btn-primary relative overflow-hidden inline-flex items-center justify-center rounded-[10px] shadow-[0_10px_20px_rgba(0,0,0,0.25)]",
            "aria-label": "+998935286601",
          },
          React.createElement(
            "span",
            { className: "max-[450px]:text-center max-[450px]:text-[18px] btn-text relative z-10 block py-[14px] px-[28px] text-[16px] font-bold uppercase text-[#222]" },
            "+998935286601"
          )
        ),

        // outlined
        React.createElement(
          "a",
          {
            href: "tel:+998931994960",
            target: "_blank",
            rel: "noreferrer",
            className: "btn-outline relative overflow-hidden inline-flex items-center justify-center rounded-[10px] shadow-[0_10px_20px_rgba(0,0,0,0.18)]",
            "aria-label": "+998931994960",
          },
          React.createElement(
            "span",
            { className: "max-[450px]:text-center max-[450px]:text-[18px] btn-text relative z-10 block py-[14px] px-[28px] text-[16px] font-bold uppercase text-[#ffc11e]" },
            "+998931994960"
          )
        )
      ),

      // small cards section
      React.createElement(
        "div",
        { className: "cards flex mt-16 gap-12 max-w-[980px] max-[450px]:mx-auto" },

        // card 1
        React.createElement(
          "div",
          { className: "card flex items-start gap-4 max-[450px]:mx-auto" },
          React.createElement("div", { className: "icon min-w-[36px] min-h-[36px] rounded-full bg-[#ffc11e] flex items-center justify-center shadow-[0_4px_8px_rgba(0,0,0,0.2)]" }, checkSvg),
          React.createElement("p", { className: "card-text text-white text-[20px] leading-[24px]" }, "Бесплатный выезд — за 30 минут")
        ),

        // card 2
        React.createElement(
          "div",
          { className: "card flex items-start gap-4" },
          React.createElement("div", { className: "icon min-w-[36px] min-h-[36px] rounded-full bg-[#ffc11e] flex items-center justify-center shadow-[0_4px_8px_rgba(0,0,0,0.2)]" }, checkSvg),
          React.createElement("p", { className: "card-text text-white text-[20px] leading-[24px]" }, "Обеспечиваем расходными материалами")
        ),

        // card 3
        React.createElement(
          "div",
          { className: "card flex items-start gap-4" },
          React.createElement("div", { className: "icon min-w-[36px] min-h-[36px] rounded-full bg-[#ffc11e] flex items-center justify-center shadow-[0_4px_8px_rgba(0,0,0,0.2)]" }, checkSvg),
          React.createElement("p", { className: "card-text text-white text-[20px] leading-[24px]" }, "Всегда есть свободный мастер")
        )
      )
    ),

    // style tag (kept same CSS)
    React.createElement(
      "style",
      null,
      `
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
          min-width: 0;
        }
        .icon { flex: 0 0 auto; }
        .card-text {
          flex: 1 1 auto;
          min-width: 0;
          word-break: normal;
          white-space: normal;
          overflow-wrap: anywhere;
        }

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

        @media (max-width: 600px) {
          h1 { font-size: 32px !important; line-height: 40px !important; }
          p  { font-size: 16px !important; line-height: 22px !important; }
          .card-text { font-size: 16px !important; }
          .btn-primary, .btn-outline {
            width: 260px !important;
            max-width: 92% !important;
          }
        }
      `
    )
  );

  return root;
}
