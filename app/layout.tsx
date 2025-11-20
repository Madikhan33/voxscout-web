import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "VoxScout - AI Interviews for Candidates",
  description: "VoxScout is your personal coach for interview preparation. Take an AI interview, get detailed analysis, and confidently step towards your dream job.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} antialiased bg-background-dark text-text-primary-dark font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
