"use client";

import React from "react";

type WorkItem = {
  title: string;
  price: string;
  descr: string;
  img: string;
};

const DATA: WorkItem[] = [
  {
    title: "Установка сифона",
    price: "от 100 000 сум",
    descr:
      "Мы оказываем услуги по монтажу, замене, ремонту и переносу любой сантехники. Наши мастера справятся с любой задачей!",
    img: "https://optim.tildacdn.com/tild3938-3361-4134-b033-356138313632/-/cover/720x500/center/center/-/format/webp/1ef126fe340420da180b.jpeg.webp",
  },
  {
    title: "Замена смесителя",
    price: "от 150 000 сум",
    descr:
      "Опыт показывает, что монтаж, осуществляемый нашими специалистами, длится в два раза короче по времени, снижает затраты и дает возможность комфортно пользоваться ванной.",
    img: "https://optim.tildacdn.com/tild3164-3066-4935-a235-333231643933/-/cover/720x500/center/center/-/format/webp/25.jpeg.webp",
  },
  {
    title: "Прочистка канализации",
    price: "от 200 000 сум",
    descr:
      "Если возник засор, прочистка труб бытовым вантузом не поможет. Обратитесь к нам — мастера используют оборудование, учитывая степень засорения.",
    img: "https://optim.tildacdn.com/tild3332-3538-4761-b163-323238623637/-/cover/720x500/center/center/-/format/webp/3621f9aa6bfce49a87dc.jpeg.webp",
  },
  {
    title: "Установка унитаза",
    price: "от 250 000 сум",
    descr:
      "Заменим старый унитаз на новый/отремонтируем или проведем установку инсталляции 'под ключ'.",
    img: "https://optim.tildacdn.com/tild6566-6138-4336-b633-616534623931/-/cover/720x500/center/center/-/format/webp/Screen-Shot-2019-11-.png.webp",
  },
  {
    title: "Монтаж ГВС/ХВС",
    price: "от 65 000 сум",
    descr:
      "Выполним разводку трубопроводов любой сложности — безопасно и аккуратно, с гарантией.",
    img: "https://optim.tildacdn.com/tild3030-3462-4637-b435-303163613234/-/cover/720x500/center/center/-/format/webp/daa6cdded984123228a5.jpeg.webp",
  },

  // --- Добавленный контент (не меняя стилей) ---
  {
    title: "Установка розетки (внутренняя/наружняя)",
    price: "от 8 000/12 000 сум",
    descr:
      "Быстрая и безопасная установка розеток любой сложности — замена проводки, заземление и проверка на работоспособность.",
    img: "https://optim.tildacdn.com/tild3138-3035-4533-a161-623764323764/-/cover/720x500/center/center/-/format/webp/7c97deeb80e33683e071.jpeg.webp",
  },
  {
    title: "Установка выключателя (внутренний/наружный)",
    price: "от 8 000/12 000 сум",
    descr:
      "Монтаж выключателей, замена клавиш и установка современных модульных решений — аккуратно и с гарантией.",
    img: "https://optim.tildacdn.com/tild3135-6336-4139-a433-376562643538/-/cover/720x500/center/center/-/format/webp/Zamena_vyklyuchately.jpg.webp",
  },
  {
    title: "Установка светильника",
    price: "от 50 000 сум",
    descr:
      "Подключение потолочных и настенных светильников, настройка подвесных систем и безопасное скрытое подключение.",
    img: "https://optim.tildacdn.com/tild3332-3538-4761-b163-323238623637/-/cover/720x500/center/center/-/format/webp/3621f9aa6bfce49a87dc.jpeg.webp",
  },
  {
    title: "Установка люстры",
    price: "от 100 000 сум",
    descr:
      "Крепление, подвеска, подключение и регулировка люстр любого веса. Работа с натяжными потолками и скрытой проводкой.",
    img: "https://optim.tildacdn.com/tild3033-3866-4565-a631-353833313739/-/cover/720x500/center/center/-/format/webp/ustanovka-lyustr.jpg.webp",
  },
  {
    title: "Установка автоматов (однополюсный/двухполюсный)",
    price: "от 65 000 сум",
    descr:
      "Подбор и монтаж автоматических выключателей, пакетирование групп, настройка защит и проверка на короткое замыкание.",
    img: "https://optim.tildacdn.com/tild3164-3465-4266-b431-616530393136/-/cover/720x500/center/center/-/format/webp/453475fd.jpg.webp",
  },
];

export default function Works() {
  return (
    <section className="w-full bg-[#fafafa] py-10">
      <div id="hero" className="mx-auto max-w-[1200px] px-4">
        {/* grid: 3 cols desktop, 2 cols <=1200px, 1 col <=768px */}
        <div
          className="works-grid"
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 20 }}
        >
          {DATA.map((it, idx) => (
            <article
              key={idx}
              aria-label={it.title}
              className="work-card"
              style={{ boxSizing: "border-box", width: "100%" }}
            >
              <div
                className="card-root"
                style={{
                  // Desktop target size 360x513
                  width: "100%",
                  maxWidth: 360,
                  margin: "0 auto",
                  height: 513,
                  display: "flex",
                  flexDirection: "column",
                  background: "#fff",
                  overflow: "hidden",
                }}
              >
                {/* image area */}
                <div
                  className="image-wrap"
                  style={{ height: 236, position: "relative", overflow: "hidden", flexShrink: 0 }}
                >
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      backgroundImage: `url(${it.img})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                    role="img"
                    aria-label={it.title}
                  />
                  {/* circular badge */}
                  <div style={{ position: "absolute", top: 12, right: 12 }}>
                    <div className="discount-badge max-[768px]:!text-[10px] max-[768px]:!w-[50px] max-[768px]:!h-[50px]" aria-hidden>
                      -15%
                    </div>
                  </div>
                </div>

                {/* content */}
                <div style={{ display: "flex", flexDirection: "column", flex: 1, padding: "18px 20px" }}>
                  <div style={{ color: "#f0b105", fontWeight: 800, fontSize: 22, marginBottom: 6 }}>
                    {it.price}
                  </div>

                  <h3 style={{ fontSize: 16, fontWeight: 700, color: "#333", textTransform: "uppercase", margin: "0 0 8px 0" }}>
                    {it.title}
                  </h3>

                  <p style={{ color: "#444", fontSize: 14, lineHeight: "20px", margin: "0 0 12px 0", flex: "0 0 auto" }}>
                    {it.descr}
                  </p>

                  {/* buttons row */}
                  <div
                    className="buttons-row"
                    style={{
                      marginTop: "auto",
                      display: "flex",
                      gap: 10,
                      alignItems: "center",
                      justifyContent: "flex-start",
                      flexWrap: "nowrap",
                    }}
                  >
                    <a
                      href="tel:+998900621818"
                      style={{
                        background: "#ffc11e",
                        color: "#111827",
                        fontWeight: 700,
                        borderRadius: 6,
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        height: 38,
                        width: 160,
                        fontSize: 13,
                        textDecoration: "none",
                        boxSizing: "border-box",
                      }}
                    >
                      Вызвать мастера
                    </a>

                    <a
                      href="https://t.me/BigMaster_uzb"
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        background: "#fff",
                        color: "#878787",
                        border: "1px solid #e6e6e6",
                        borderRadius: 6,
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        height: 38,
                        width: 140,
                        fontSize: 13,
                        textDecoration: "none",
                        boxSizing: "border-box",
                      }}
                    >
                      Расчет в Telegram
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        /* Discount badge: compact, centered text, won't overflow image */
        .discount-badge {
          box-sizing: border-box;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: #ff4a4a;
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 12px;
          line-height: 1;
          padding: 2px;
        }

        /* If you want slightly bigger badge on very large screens, tweak here:
           (kept small to avoid covering card content) */

        /* Responsive badge adjustments */
        @media (max-width: 900px) {
          .discount-badge {
            width: 28px;
            height: 28px;
            font-size: 11px;
            padding: 1px;
          }
        }

        @media (max-width: 420px) {
          .discount-badge {
            width: 26px;
            height: 26px;
            font-size: 10px;
            padding: 1px;
          }
        }

        /* STRICT adaptation for max-width:1200px */
        @media (max-width: 1200px) {
          .works-grid {
            grid-template-columns: repeat(2, 1fr) !important; /* two columns <=1200px */
            gap: 20px !important;
          }

          /* make cards fluid but keep visual proportions */
          .card-root {
            max-width: none !important;
            width: 100% !important;
            height: auto !important;
            display: flex;
            flex-direction: column;
          }

          /* reduce image height a bit so content fits */
          .card-root > .image-wrap { height: 210px !important; } /* first child is image wrapper */

          /* text scaling */
          .card-root div[style] > div { font-size: 20px !important; } /* price */
          .card-root h3 { font-size: 15px !important; }
          .card-root p { font-size: 13px !important; line-height: 18px !important; }

          /* buttons: two per row (45% each) centered */
          .buttons-row {
            flex-wrap: wrap !important;
            justify-content: center !important;
            gap: 10px !important;
          }
          .buttons-row a[style] {
            width: 45% !important;
            min-width: 0 !important;
            height: 36px !important;
            font-size: 13px !important;
          }
        }

        /* <=900px: smaller cards */
        @media (max-width: 900px) {
          .works-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 16px !important;
          }
          .card-root > .image-wrap { height: 185px !important; }
          .card-root div[style] > div { font-size: 18px !important; }
          .card-root h3 { font-size: 14px !important; }
          .card-root p { font-size: 13px !important; line-height: 18px !important; }
          .buttons-row a[style] { width: 48% !important; height: 34px !important; }
        }

        /* <=768px: single column, cards 100%, buttons full-width stacked */
        @media (max-width: 768px) {
          .works-grid {
            grid-template-columns: 1fr !important;
            gap: 18px !important;
          }
          .card-root { width: 100% !important; height: auto !important; }
          .card-root > .image-wrap { height: 220px !important; }

          .buttons-row {
            flex-wrap: wrap !important;
            justify-content: center !important;
          }
          .buttons-row a[style] {
            width: 100% !important;
            max-width: none !important;
            height: 40px !important;
            font-size: 14px !important;
          }

          /* align content padding a bit for mobile */
          .card-root { padding-left: 0 !important; padding-right: 0 !important; }
        }

        /* ensure no anchor underline and no shadows/rounded if any default */
        .card-root { box-shadow: none !important; border-radius: 0 !important; border: none !important; }
        a { text-decoration: none; }
      `}</style>
    </section>
  );
}
