import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ServiceProvider } from "@/context/ServiceContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Master Prof — Услуги",
  description: "Сантехники и электрики Ташкента",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <head>
        {/* ✅ ВАЖНО: ЧИСТЫЙ HTML ДЛЯ GOOGLE */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-18020252228"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              window.gtag = gtag;
              gtag('js', new Date());
              gtag('config', 'AW-18020252228');
            `,
          }}
        />
      </head>

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ServiceProvider>
          <Header />
          {children}
        </ServiceProvider>
      </body>
    </html>
  );
}
