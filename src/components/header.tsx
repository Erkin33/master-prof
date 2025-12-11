"use client";

import React, { useState } from "react";

const links = [
  { text: "Преимущества", href: "#plus" },
  { text: "Сантехника", href: "#hero" },
  { text: "Электрика", href: "#hero" },
  { text: "Контакты", href: "#contacts" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  const emitService = (service: string) => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("service:change", { detail: { service } }));
    }
  };

  const scrollToHash = (hash: string, updateHistory = true) => {
    if (!hash || typeof window === "undefined") return;
    try {
      const normalized = hash.startsWith("#") ? hash : `#${hash}`;
      const el = document.querySelector(normalized);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        if (updateHistory && history.pushState) {
          history.pushState(null, "", normalized);
        }
      } else {
        if (updateHistory) window.location.hash = normalized;
      }
    } catch {
      if (updateHistory) window.location.hash = hash;
    }
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, text: string) => {
    e.preventDefault();
    emitService(text);
    if (href.startsWith("#")) scrollToHash(href);
    else window.location.href = href;
  };

  const handleMobileNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, text: string) => {
    e.preventDefault();
    emitService(text);
    setOpen(false);
    if (href.startsWith("#")) {
      setTimeout(() => scrollToHash(href), 120);
    } else window.location.href = href;
  };

  return (
    <header className="sticky top-0 z-50 bg-white">
      <div className="w-full h-[80px] flex justify-around items-center">

        {/* LOGO */}
        <a href="/" className="text-[34px] text-[#ffc11e] font-[900] max-[600px]:text-[25px]">
          Master Prof
        </a>

        {/* NAV DESKTOP */}
        <div className="w-[474px] h-full flex justify-around items-center max-[1200px]:hidden">
          {links.map((l, i) => (
            <a
              key={i}
              href={l.href}
              className="text-[14px] font-[600] text-[#333] cursor-pointer"
              onClick={(e) => handleNavClick(e, l.href, l.text)}
            >
              {l.text}
            </a>
          ))}
        </div>

        {/* RIGHT AREA */}
        <div className="w-auto h-full flex justify-between items-center">

          {/* PHONE (desktop only) */}
          <a href="tel:+998931994960" className="font-[800] text-[24px] text-[#ffc11e] max-[1200px]:hidden">
            +998 93 199 49 60
          </a>

          {/* MAIN BUTTON */}
          <a
            href="tel:+998931994960"
            className="w-[206px] max-[400px]:hidden h-[40px] max-[600px]:w-[146px] flex justify-center items-center ml-[25px] bg-[#ffc11e] rounded-[10px] text-white text-[14px]"
          >
            Заказать мастера 24/7
          </a>

          {/* BURGER */}
          <button
            onClick={() => setOpen(!open)}
            aria-label="menu"
            className="ml-3 p-2 rounded-md hidden max-[1200px]:inline-flex"
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
              <path
                d={open ? "M6 18L18 6M6 6l12 12" : "M3 7h18M3 12h18M3 17h18"}
                stroke="#111"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 z-40 max-[1200px]:block hidden transform ${
          open ? "translate-x-0" : "translate-x-full"
        } transition-transform`}
      >
        <div
          className="absolute inset-0 bg-black/30"
          onClick={() => setOpen(false)}
        />

        <aside className="absolute right-0 top-0 h-full w-72 bg-white shadow-lg p-5">
          <div className="flex justify-between">
            <div className="font-bold text-[#ffc11e] text-[18px]">Master Prof</div>

            <button onClick={() => setOpen(false)}>
              <svg width="22" height="22" viewBox="0 0 24 24">
                <path d="M6 18L18 6M6 6l12 12" stroke="#333" strokeWidth="2" />
              </svg>
            </button>
          </div>

          <nav className="mt-6">
            <ul className="flex flex-col gap-3 text-gray-700">
              {links.map((l, i) => (
                <li key={i}>
                  <a
                    href={l.href}
                    className="block py-2"
                    onClick={(e) => handleMobileNavClick(e, l.href, l.text)}
                  >
                    {l.text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-6">
            <a href="tel:+998931994960" className="text-[#ffc11e] font-semibold block">
              +998 93 199 49 60
            </a>

            <div className="mt-4 space-y-3">

              <a
                href="tel:+998931994960"
                className="block text-center px-4 py-2 rounded-md bg-[#ffc11e] text-white font-medium"
              >
                Заказать мастера
              </a>

              <a
                href="https://t.me/rustambek875"
                className="block text-center px-4 py-2 rounded-md border border-[#ffd98c] text-[#7a5a00] font-medium"
              >
                Написать в Telegram 24/7
              </a>

            </div>
          </div>
        </aside>
      </div>
    </header>
  );
}
