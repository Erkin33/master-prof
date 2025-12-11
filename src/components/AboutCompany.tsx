"use client";

import React from "react";

type Item = {
  id: number;
  title: string;
  descr: string;
};

const ITEMS: Item[] = [
  {
    id: 1,
    title: "5+ ЛЕТ",
    descr: "Сантехники и электрики с опытом минимум от 5 лет",
  },
  {
    id: 2,
    title: "ГИБКОСТЬ",
    descr: "Работаем с юридическими и \nфизичискими лицами",
  },
  {
    id: 3,
    title: "1 ЧАС",
    descr: "Приезжаем \nза 1 час",
  },
  {
    id: 4,
    title: "ГАРАНТИЯ",
    descr: "Даем гарантию на выполненную \nработу",
  },
  {
    id: 5,
    title: ">100",
    descr: "Положительных отзывов \nежемесячно",
  },
  {
    id: 6,
    title: "0 СУМ",
    descr: "Бесплатный выезд. В случае \nвыполнения заказа",
  },
];

export default function AboutCompany() {
  return (
    <section className="about-company" aria-labelledby="about-company-title">
      <div className="container">
        <h2 id="about-company-title" className="section-title">
          О компании
        </h2>

        <ul className="items" role="list">
          {ITEMS.map((it) => (
            <li key={it.id} className="item">
              <div className="item-inner">
                <div className="circle" aria-hidden>
                  <span className="circle-number">{it.id}</span>
                </div>

                <div className="text">
                  <div className="item-title">{it.title}</div>
                  <div className="item-desc">
                    {it.descr.split("\n").map((line, i) => (
                      <p key={i}>{line}</p>
                    ))}
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <style>{`
        .about-company { width: 100%; background: #fff; padding: 40px 12px 60px; box-sizing: border-box; }
        .container { max-width: 1200px; margin: 0 auto; padding: 0 16px; box-sizing: border-box; }

        .section-title {
          text-align: center;
          color: #61615f;
          font-size: 28px;
          margin: 0 0 48px;
          font-weight: 600;
        }

        /* grid: 3 columns desktop, 2 columns <=1200, 2 columns <=768 */
        .items {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 44px 36px;
          list-style: none;
          padding: 0;
          margin: 0;
          align-items: start;
        }

        .item { display: flex; }
        .item-inner { display: flex; align-items: flex-start; gap: 18px; }

        .circle {
          width: 64px;
          height: 64px;
          min-width: 64px;
          border-radius: 50%;
          background: #ffc11e;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .circle-number {
          font-weight: 700;
          font-size: 18px;
          color: #000;
        }

        .text { flex: 1 1 auto; }

        .item-title {
          font-size: 18px;
          font-weight: 700;
          color: #333333;
          margin-bottom: 6px;
          text-transform: uppercase;
        }

        .item-desc {
          color: #666666;
          font-size: 15px;
          line-height: 22px;
        }

        .item-desc p { margin: 0; }

        /* tablets / medium screens: two columns <=1200 */
        @media (max-width: 1200px) {
          .items { grid-template-columns: repeat(2, 1fr); gap: 34px 28px; }
          .section-title { margin-bottom: 36px; font-size: 26px; }
          .circle { width: 56px; height: 56px; min-width: 56px; }
          .circle-number { font-size: 16px; }
          .item-title { font-size: 17px; }
          .item-desc { font-size: 14px; line-height: 20px; }
        }

        /* small devices: two columns <=768 - уменьшенные размеры для читабельности */
        @media (max-width: 768px) {
          .about-company { padding: 22px 12px 36px; }
          .items {
            grid-template-columns: repeat(2, 1fr); /* 2 columns on small devices */
            gap: 18px 14px;
          }
          .section-title { font-size: 22px; margin-bottom: 20px; }
          .item-inner { gap: 12px; }
          .circle { width: 48px; height: 48px; min-width: 48px; }
          .circle-number { font-size: 14px; font-weight: 700; }
          .item-title { font-size: 15px; margin-bottom: 6px; }
          .item-desc { font-size: 13px; line-height: 18px; color: #666; }
        }

        /* very small screens: single column <=420px */
        @media (max-width: 420px) {
          .items {
            grid-template-columns: 1fr;
            gap: 14px;
          }
          .section-title { font-size: 20px; margin-bottom: 18px; }
          .circle { width: 44px; height: 44px; min-width: 44px; }
          .circle-number { font-size: 13px; }
          .item-title { font-size: 14px; }
          .item-desc { font-size: 13px; line-height: 18px; }
        }

        /* ensure left alignment and prevent overflow */
        .item { align-items: flex-start; min-width: 0; }
        .text { min-width: 0; }
      `}</style>
    </section>
  );
}
