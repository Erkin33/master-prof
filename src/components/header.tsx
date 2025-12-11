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

  // helper: dispatch service change
  const emitService = (service: string) => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("service:change", { detail: { service } }));
    }
  };

  // smooth scroll helper
  const scrollToHash = (hash: string, updateHistory = true) => {
    if (!hash || typeof window === "undefined") return;
    try {
      // ensure it starts with #
      const normalized = hash.startsWith("#") ? hash : `#${hash}`;
      const el = document.querySelector(normalized);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        if (updateHistory && history && history.pushState) {
          // update URL without jumping
          history.pushState(null, "", normalized);
        }
      } else {
        // fallback: set location.hash (will jump), but only if nothing else
        if (updateHistory) window.location.hash = normalized;
      }
    } catch (err) {
      // silently ignore
      if (updateHistory) window.location.hash = hash;
    }
  };

  // unified handler for internal anchor links (desktop)
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, text: string) => {
    e.preventDefault();
    emitService(text);
    // if href is an anchor (#...), perform smooth scroll
    if (href && href.startsWith("#")) {
      scrollToHash(href);
    } else if (href) {
      // external or non-hash - follow normally
      window.location.href = href;
    }
  };

  // handler for mobile menu links (closes menu)
  const handleMobileNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, text: string) => {
    e.preventDefault();
    emitService(text);
    setOpen(false);
    if (href && href.startsWith("#")) {
      // small timeout to allow menu close animation then scroll (gives smoother UX)
      setTimeout(() => scrollToHash(href), 120);
    } else if (href) {
      window.location.href = href;
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white">
      <div className="w-full h-[80px] flex justify-around items-center">
        {/* LOGO */}
        <a href="/" className="text-[34px] text-[#ffc11e] font-[900] max-[600px]:text-[25px] max-[400px]:text-[35px]">
          Master Prof
        </a>

        {/* CENTER NAV: stays as-is on >1200px, hidden on <=1200px */}
        <div className="w-[474px] h-full flex justify-around items-center max-[1200px]:hidden">
          {links.map((linksInfo, index) => (
            <a
              className="text-[14px] font-[600] text-[#333333] my-auto cursor-pointer"
              key={index}
              href={linksInfo.href}
              onClick={(e) => handleNavClick(e as React.MouseEvent<HTMLAnchorElement>, linksInfo.href, linksInfo.text)}
            >
              {linksInfo.text}
            </a>
          ))}
        </div>

        {/* RIGHT BLOCK: phone + button.
            On <=1200px we keep phone visible but make space for burger.
            (Design/structure preserved) */}
        <div className="w-auto h-full flex justify-between items-center">
          <a href="#" className="font-[800] text-[24px] text-[#ffc11e] max-[1200px]:hidden">
            +998931994960
          </a>

          <a
            href="#"
            className="w-[206px] max-[400px]:hidden h-[40px] max-[600px]:w-[146px] max-[600px]:m-[0px] max-[600px]:text-[13px] flex justify-center items-center my-auto ml-[25px] bg-[#ffc11e] rounded-[10px] text-[#FFFFFF] text-[14px]"
          >
            Заказать мастера 24/7
          </a>

          {/* Burger visible ONLY when screen is <= 1200px.
              We keep it inline with the right block (so structure visually similar). */}
          <button
            onClick={() => setOpen(!open)}
            aria-label={open ? "Закрыть меню" : "Открыть меню"}
            className="ml-3 p-2 rounded-md border border-transparent max-[1200px]:inline-flex hidden items-center justify-center"
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path
                d={
                  open ? "M6 18L18 6M6 6l12 12" : "M3 7h18M3 12h18M3 17h18"
                }
                stroke="#111827"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* MOBILE/<=1200px SLIDEOVER (keeps same links + phone + order button) */}
      <div
        className={`fixed inset-0 z-40 max-[1200px]:block hidden transform ${open ? "translate-x-0" : "translate-x-full"} transition-transform duration-200 ease-in-out`}
        aria-hidden={!open}
      >
        {/* overlay */}
        <div
          className={`absolute inset-0 bg-black/30 ${open ? "opacity-100" : "opacity-0"} transition-opacity`}
          onClick={() => setOpen(false)}
        />

        {/* panel from right */}
        <aside className="absolute right-0 top-0 h-full w-72 bg-white shadow-lg p-5">
          <div className="flex items-start justify-between">
            <div>
              <div style={{ fontSize: 18 }} className="font-bold text-[#ffc11e]">
                Master Prof
              </div>
            </div>

            <button
              onClick={() => setOpen(false)}
              className="text-gray-500 hover:text-gray-700"
              aria-label="close"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path
                  d="M6 18L18 6M6 6l12 12"
                  stroke="#374151"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
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
                    onClick={(e) => handleMobileNavClick(e as React.MouseEvent<HTMLAnchorElement>, l.href, l.text)}
                  >
                    {l.text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-6">
            <a href="#" className="text-[#ffc11e] font-semibold block">
              +998931994960
            </a>

            <div className="mt-4 space-y-3">
              <a
                href="#"
                className="block text-center px-4 py-2 rounded-md bg-[#ffc11e] text-white font-medium"
                onClick={(e) => {
                  e.preventDefault();
                  emitService("Заказать мастера");
                  setOpen(false);
                }}
              >
                Заказать мастера
              </a>

              <a
                href="#"
                className="block text-center px-4 py-2 rounded-md border border-[#ffd98c] text-[#7a5a00] font-medium"
                onClick={(e) => {
                  e.preventDefault();
                  emitService("Написать в Telegram");
                  setOpen(false);
                }}
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
