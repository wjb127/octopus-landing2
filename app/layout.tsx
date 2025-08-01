import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "황금쭈꾸미집",
  description: "대한민국 쭈꾸미 맛의 기준을 세우다. 전국 가맹문의 1577-6615",
  keywords: "황금쭈꾸미집,황금쭈꾸미집창업,황금쭈꾸미창업,쭈꾸미맛집,쭈꾸미전문점,쭈꾸미프랜차이즈",
  openGraph: {
    title: "황금쭈꾸미집",
    description: "대한민국 쭈꾸미 맛의 기준을 세우다. 전국 가맹문의 1577-6615",
    url: "https://www.24khouses.com/",
    siteName: "황금쭈꾸미집",
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>{children}</body>
    </html>
  );
}