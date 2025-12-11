"use client";

import React from "react";

export default function IconsInfo() {
  const items = ["Квартиры", "Офисы", "Дома", "Коттеджи", "Производство"];

  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-[1200px] px-4">
        {/* добавил вертикальные отступы сверху/снизу */}
        <div className="w-full min-h-[100px] flex items-center py-6">
          <div
            className="w-full flex flex-wrap justify-between items-center gap-6"
            id="icons-row"
          >
            {items.map((text, i) => (
              <div
                key={i}
                className="icon-item flex items-center gap-4 min-w-[140px] max-w-[240px] box-border"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-sm border-2 border-[#ffc11e] flex-shrink-0">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="block"
                    aria-hidden
                  >
                    <path
                      d="M20 7L10.5 16.5L7 13"
                      stroke="#ffc11e"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <div className="icon-text text-[#222222] text-[18px] font-semibold leading-[20px]">
                  {text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        /* base safety */
        #icons-row { box-sizing: border-box; }

        /* Default: items try to stay in one row with spacing, each item can shrink */
        .icon-item { flex: 0 1 auto; }

        /* <=1200px: allow wrapping and center rows */
        @media (max-width: 1200px) {
          #icons-row {
            justify-content: center;
            gap: 20px;
          }

          /* try ~3 items per row when possible */
          .icon-item {
            flex: 0 1 30%;
            min-width: 160px;
            max-width: 260px;
            justify-content: flex-start;
          }
        }

        /* <=880px: make it ~2 per row */
        @media (max-width: 880px) {
          .icon-item {
            flex: 0 1 45%;
            min-width: 140px;
            max-width: none;
          }
        }

        /* <=450px: show 2 items per row and hide the 5th block so only 4 visible */
        @media (max-width: 450px) {
          #icons-row { gap: 10px; padding-left: 8px; padding-right: 8px; }

          .icon-item {
            flex: 0 1 48%;
            min-width: 0;
            box-sizing: border-box;
          }

          /* hide the 5th item on very small screens (so only first 4 are visible) */
          #icons-row > .icon-item:nth-child(5) {
            display: none;
          }

          /* decrease font-size on mobile to 16px as requested */
          .icon-text {
            font-size: 16px !important;
            line-height: 20px !important;
          }
        }

        /* Ensure text can wrap naturally and won't be clipped */
        .icon-item .icon-text { white-space: normal; overflow-wrap: anywhere; }
      `}</style>
    </section>
  );
}
