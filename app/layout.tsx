import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "VoxScout - AI-интервью для кандидатов",
  description: "VoxScout — ваш личный тренер для подготовки к собеседованиям. Пройдите AI-интервью, получите детальный анализ и уверенно шагните к работе мечты.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="dark">
      <body
        className={`${inter.variable} antialiased bg-background-dark text-text-primary-dark font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
