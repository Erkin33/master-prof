import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ServiceProvider } from "@/context/ServiceContext";
import Script from "next/script";

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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>

        {/* ✅ GOOGLE TAG (ОБЯЗАТЕЛЬНО В BODY) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18020252228"
          strategy="afterInteractive"
        />
        <Script id="google-ads-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag('js', new Date());
            gtag('config', 'AW-18020252228');
          `}
        </Script>

        <ServiceProvider>
          <Header />
          {children}
        </ServiceProvider>

      </body>
    </html>
  );
}
