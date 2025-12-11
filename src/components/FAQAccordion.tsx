"use client";

import React, { useEffect, useRef, useState } from "react";

type QA = {
  id: string;
  q: string;
  a: string;
};

const DATA: QA[] = [
  {
    id: "accordion1",
    q: "Стоимость вызова?",
    a: "Стоимость вызова мастера - бесплатно! Вы платите только за выполненную работу.",
  },
  {
    id: "accordion2",
    q: "Нужно ли мне самостоятельно закупать материалы?",
    a: "Вы можете самостоятельно купить материалы, а также мы можем помочь в выборе или привезем свои.",
  },
  {
    id: "accordion3",
    q: "В течении какого времени приезжает мастер?",
    a: "Мастер выезжает к Вам в течение 30 минут. Либо к назначенному Вами времени.",
  },
  {
    id: "accordion4",
    q: "Имеется ли у мастера весь нужный инструмент?",
    a: "Мастер приезжает к Вам со всем необходимым инструментом.",
  },
  {
    id: "accordion5",
    q: "Как проходит оплата?",
    a: "Оплата выполненных услуг происходит по их окончании. Когда вы полностью удовлетворены результатом!",
  },
];

// svg string for icon (plus / cross via rotation class)
const ICON_SVG = `
<svg viewBox="0 0 40 40" width="40" height="40" xmlns="http://www.w3.org/2000/svg" focusable="false" aria-hidden="true">
  <circle cx="20" cy="20" r="20" fill="#ffc11e"/>
  <g class="lines" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none">
    <path d="M9 20H31"></path>
    <path d="M20 9V31"></path>
  </g>
</svg>
`;

export default function FAQAccordionNoJSX(): React.ReactElement {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const triggersRef = useRef<Array<HTMLButtonElement | null>>([]);

  useEffect(() => {
    triggersRef.current = triggersRef.current.slice(0, DATA.length);
  }, []);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  const onKey = (e: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
    const key = e.key;
    if (key === "Enter" || key === " ") {
      e.preventDefault();
      toggle(index);
      return;
    }
    if (key === "ArrowDown") {
      e.preventDefault();
      const next = (index + 1) % DATA.length;
      triggersRef.current[next]?.focus();
      return;
    }
    if (key === "ArrowUp") {
      e.preventDefault();
      const prev = (index - 1 + DATA.length) % DATA.length;
      triggersRef.current[prev]?.focus();
      return;
    }
  };

  // build children for FAQ list
  const faqItems = DATA.map((item, i) => {
    const isOpen = openIndex === i;

    // header button
    const button = React.createElement(
      "button",
      {
        // callback ref must return void -> use block callback
        ref: (el: HTMLButtonElement | null) => {
          triggersRef.current[i] = el;
        },
        className: "faq-trigger",
        "aria-controls": item.id,
        "aria-expanded": isOpen,
        onClick: (e: React.MouseEvent) => {
          e.preventDefault();
          toggle(i);
        },
        onKeyDown: (e: React.KeyboardEvent<HTMLButtonElement>) => onKey(e, i),
        type: "button",
      },
      // children of button: question span and icon span (icon via dangerouslySetInnerHTML)
      React.createElement("span", { className: "faq-question" }, item.q),
      React.createElement("span", {
        className: "faq-icon",
        "aria-hidden": "true",
        dangerouslySetInnerHTML: { __html: ICON_SVG },
      })
    );

    // header wrapper
    const header = React.createElement(
      "div",
      {
        className: `faq-header ${isOpen ? "is-open" : ""}`,
        style: { borderTop: "1px solid #eee" } as React.CSSProperties,
      },
      button
    );

    // panel content
    const panel = React.createElement(
      "div",
      {
        id: item.id,
        className: "faq-panel",
        role: "region",
        "aria-labelledby": item.id + "-label",
        "data-open": isOpen ? "true" : "false",
      },
      React.createElement(
        "div",
        { className: "faq-panel-inner" },
        React.createElement(
          "div",
          { id: item.id + "-label", className: "faq-answer" },
          item.a
        )
      )
    );

    return React.createElement(
      "div",
      { className: "faq-item", key: item.id },
      header,
      panel
    );
  });

  // style string
  const css = `
    /* container */
    .faq { background: #fff; padding: 48px 12px 60px; }
    .faq-inner { max-width: 1100px; margin: 0 auto; padding: 0 16px; box-sizing: border-box; }
    .faq-title {
      text-align: center;
      color: #61615f;
      font-size: 30px;
      margin: 0 0 40px;
      font-weight: 600;
    }

    /* list */
    .faq-list { display: block; }

    .faq-item { margin: 0; }

    .faq-header {
      display: block;
      background: transparent;
    }

    .faq-trigger {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      padding: 20px 12px;
      background: transparent;
      border: none;
      text-align: left;
      cursor: pointer;
    }

    .faq-trigger:focus { outline: 2px solid rgba(0,0,0,0.08); outline-offset: 2px; }

    .faq-question {
      font-size: 20px;
      font-weight: 700;
      color: #222;
    }

    /* icon on right */
    .faq-icon { display:flex; align-items:center; justify-content:center; flex:0 0 auto; }
    .faq-icon svg { display:block; }

    /* rotate/transform the vertical line to make plus -> cross when open */
    .faq-icon .lines { transition: transform 200ms ease; transform-origin: center; }
    .faq-icon .lines.rotated { transform: rotate(45deg); }

    /* panel hidden/visible with smooth height transition */
    .faq-panel {
      overflow: hidden;
      box-sizing: border-box;
      max-height: 0;
      transition: max-height 280ms ease, padding 200ms ease;
      padding: 0 12px;
    }

    .faq-panel[data-open="true"] {
      max-height: 500px;
      padding: 12px 12px 22px 12px;
    }

    .faq-panel-inner {
      border-bottom: 1px solid #eee;
    }

    .faq-answer {
      color: #555;
      font-size: 18px;
      line-height: 26px;
      padding: 0 6px 12px 6px;
    }

    .faq-border {
      height: 1px;
      background: #eee;
      margin-top: 8px;
    }

    /* responsive adjustments */
    @media (max-width: 1200px) {
      .faq-title { font-size: 28px; margin-bottom: 34px; }
      .faq-question { font-size: 18px; }
      .faq-answer { font-size: 16px; line-height: 24px; }
    }

    @media (max-width: 768px) {
      .faq { padding: 28px 12px 36px; }
      .faq-title { font-size: 22px; margin-bottom: 26px; }
      .faq-trigger { padding: 14px 8px; }
      .faq-question { font-size: 16px; }
      .faq-icon svg { width: 36px; height: 36px; }
      .faq-answer { font-size: 15px; line-height: 20px; }
    }

    @media (max-width: 420px) {
      .faq-title { font-size: 20px; }
      .faq-question { font-size: 15px; }
      .faq-answer { font-size: 14px; }
      .faq-icon svg { width: 34px; height: 34px; }
    }
  `;

  // add small script to toggle rotation class on svg lines based on data-open attribute
  // We'll use a MutationObserver to add/remove 'rotated' class for accessibility when panels open/close.
  // This runs on client side after mount.
  useEffect(() => {
    const root = document;
    if (!root) return;
    const observer = new MutationObserver(() => {
      // find all panels and set svg lines class
      const panels = Array.from(document.querySelectorAll<HTMLElement>(".faq-panel"));
      panels.forEach((p) => {
        const open = p.getAttribute("data-open") === "true";
        // icon is previous sibling header -> find .faq-icon .lines inside
        const header = p.previousElementSibling;
        if (header) {
          const svgLines = header.querySelector<SVGGElement>(".lines");
          if (svgLines) {
            if (open) {
              svgLines.classList.add("rotated");
            } else {
              svgLines.classList.remove("rotated");
            }
          }
        }
      });
    });

    observer.observe(document.body, { attributes: true, subtree: true, attributeFilter: ["data-open"] });

    // initial run
    const panelsInit = Array.from(document.querySelectorAll<HTMLElement>(".faq-panel"));
    panelsInit.forEach((p) => {
      const open = p.getAttribute("data-open") === "true";
      const header = p.previousElementSibling;
      if (header) {
        const svgLines = header.querySelector<SVGGElement>(".lines");
        if (svgLines) {
          if (open) svgLines.classList.add("rotated");
          else svgLines.classList.remove("rotated");
        }
      }
    });

    return () => observer.disconnect();
  }, []);

  // build tree
  const tree = React.createElement(
    "section",
    { className: "faq", "aria-labelledby": "faq-title" },
    React.createElement(
      "div",
      { className: "faq-inner" },
      React.createElement("h2", { id: "faq-title", className: "faq-title" }, "Ответы на Ваши вопросы"),
      React.createElement("div", { className: "faq-list", role: "list" }, faqItems),
      React.createElement("div", { className: "faq-border", "aria-hidden": "true" })
    ),
    React.createElement("style", null, css)
  );

  return tree;
}
