"use client";

import React from "react";

export default function Info() {
  return (
    <section className="w-full bg-[#fafafa]">
      <div className="mx-auto max-w-[1200px] px-4 box-border">
        <div className="py-[60px] flex flex-col items-center text-center">
          {/* Title */}
          <h2 className="text-[28px] leading-[34px] text-[rgb(97,95,95)] font-semibold">
            <span className="block">Выполняем все виды</span>
            <span className="block">сантехнических и электромонтажных работ</span>
          </h2>

          {/* Description */}
          <p className="mt-6 max-w-[820px] text-[20px] leading-[28px] text-[rgb(51,51,51)]">
            Мы оказываем услуги по монтажу, замене, ремонту и переносу любой сантехники и
            электрики. Наши мастера справятся с любой задачей!
          </p>
        </div>
      </div>

      <style>{`
        /* Responsive adjustments to keep text inside container and readable */
        @media (max-width: 880px) {
          h2 { font-size: 22px !important; line-height: 28px !important; }
          p  { font-size: 16px !important; line-height: 22px !important; max-width: 90% !important; }
        }
        @media (max-width: 480px) {
          h2 { font-size: 20px !important; line-height: 26px !important; }
          p  { font-size: 14px !important; line-height: 20px !important; max-width: 92% !important; }
        }

        /* Extra safety: ensure container paddings keep content inside */
        .max-w-[1200px] { box-sizing: border-box; }
      `}</style>
    </section>
  );
}
