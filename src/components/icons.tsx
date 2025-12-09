"use client";

import React from "react";

export default function IconsInfo() {
  const items = ["Квартиры", "Офисы", "Дома", "Коттеджи", "Производство"];

  return (
    <section className="w-full bg-white">
      <div className="w-full h-[100px] flex justify-center items-center">
        <div
          className="max-w-[1200px] w-full h-full px-4 flex justify-between items-center gap-6"
          id="icons-row"
        >
          {items.map((text, i) => (
            <div
              key={i}
              className="flex items-center gap-4 min-w-[140px] md:min-w-0 icon-item"
            >
              {/* outlined square with check */}
              <div className="flex items-center justify-center w-10 h-10 rounded-sm border-2 border-[#ffc11e]">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="block"
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

              {/* label */}
              <div className="text-[#222222] text-[18px] font-semibold leading-[20px]">
                {text}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        /* Safety / base */
        #icons-row { box-sizing: border-box; }
        .icon-item {
          flex: 0 1 auto;
          min-width: 120px;
        }

        /* ===== Adaptation for <=1200px: enable wrapping ===== */
        @media (max-width: 1200px) {
          #icons-row {
            flex-wrap: wrap;
            justify-content: center;
            gap: 20px;
            align-items: center;
            padding-top: 6px;
            padding-bottom: 6px;
          }

          /* try to fit ~3 per row */
          .icon-item {
            flex: 0 1 30%;
            min-width: 180px;
            justify-content: flex-start;
          }
        }

        /* medium-small -> 2 per row */
        @media (max-width: 880px) {
          .icon-item {
            flex: 0 1 45%;
            min-width: 160px;
          }
        }

        /* <=768 keep column behavior if needed (fallback) */
        @media (max-width: 768px) {
          .icon-item {
            flex: 0 1 100%;
            min-width: 0;
            justify-content: flex-start;
          }
        }

        /* <=640 small tweaks */
        @media (max-width: 640px) {
          .icon-item { font-size: 16px; }
        }

        /* <=450px: show 2 items per row */
        @media (max-width: 450px) {
          #icons-row { gap: 10px; padding-left: 8px; padding-right: 8px; }
          .icon-item {
            flex: 0 1 48%;
            min-width: 0;
            justify-content: flex-start;
          }
        }
      `}</style>
    </section>
  );
}
