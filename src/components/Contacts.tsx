"use client";

import React from "react";

export default function ContactsNoJSX(): React.ReactElement {
  const phone = "+998 93 199 49 60";
  const phoneHref = "tel:+998931994960";
  const telegramHandle = "@rustambek875";
  const telegramHref = "https://t.me/rustambek875";

  // SVG telegram icon with white path
  const TelegramSVG = React.createElement(
    "svg",
    {
      className: "w-6 h-6",
      role: "img",
      viewBox: "0 0 100 100",
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      "aria-hidden": "true",
    },
    React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d:
        "M50 100c27.614 0 50-22.386 50-50S77.614 0 50 0 0 22.386 0 50s22.386 50 50 50Zm21.977-68.056c.386-4.38-4.24-2.576-4.24-2.576-3.415 1.414-6.937 2.85-10.497 4.302-11.04 4.503-22.444 9.155-32.159 13.734-5.268 1.932-2.184 3.864-2.184 3.864l8.351 2.577c3.855 1.16 5.91-.129 5.91-.129l17.988-12.238c6.424-4.38 4.882-.773 3.34.773l-13.49 12.882c-2.056 1.804-1.028 3.35-.129 4.123 2.55 2.249 8.82 6.364 11.557 8.16.712.467 1.185.778 1.292.858.642.515 4.111 2.834 6.424 2.319 2.313-.516 2.57-3.479 2.57-3.479l3.083-20.226c.462-3.511.993-6.886 1.417-9.582.4-2.546.705-4.485.767-5.362Z",
      fill: "#ffffff",
    })
  );

  const root = React.createElement(
    "div",
    { className: "max-w-[1200px] w-full flex mx-auto mb-[50px]" },
    React.createElement(
      "div",
      { className: "w-full", id:"contacts"},
      React.createElement(
        "div",
        { className: "mx-auto w-full flex justify-center" },
        React.createElement(
          "div",
          { className: "w-full max-w-[760px] text-center" },
          // Title
          React.createElement(
            "div",
            { className: "mb-4" },
            React.createElement(
              "h2",
              { className: "text-2xl md:text-3xl font-semibold text-gray-700" },
              "Контакты"
            )
          ),

          // Phone + Telegram row
          React.createElement(
            "div",
            { className: "mb-4 flex flex-col items-center gap-2" },
            React.createElement(
              "strong",
              null,
              React.createElement(
                "a",
                {
                  href: phoneHref,
                  className: "text-lg md:text-xl font-extrabold text-black no-underline",
                  "aria-label": `Позвонить ${phone}`,
                },
                phone
              )
            ),
            React.createElement(
              "a",
              {
                href: telegramHref,
                target: "_blank",
                rel: "nofollow noopener noreferrer",
                className: "text-base text-gray-800 hover:text-yellow-500 no-underline",
                "aria-label": `Перейти в Telegram ${telegramHandle}`,
              },
              telegramHandle
            )
          ),

          // Address block
          React.createElement(
            "div",
            { className: "text-gray-600 text-sm md:text-base mb-6 space-y-0" },
            React.createElement("div", null, "г. Ташкент"),
            React.createElement("div", null, "Миробадский район Массив Куйлюк, 1"),
            React.createElement("div", null, "ул. Муниса, 21")
          ),

          // Telegram icon (white path on black circle)
          React.createElement(
            "div",
            { className: "flex justify-center" },
            React.createElement(
              "a",
              {
                href: telegramHref,
                target: "_blank",
                rel: "nofollow noopener noreferrer",
                className:
                  "inline-flex items-center justify-center w-12 h-12 rounded-full bg-black hover:bg-yellow-400 transition-colors",
                "aria-label": `Telegram ${telegramHandle}`,
                title: "Telegram",
              },
              TelegramSVG
            )
          )
        )
      )
    )
  );

  return root;
}
