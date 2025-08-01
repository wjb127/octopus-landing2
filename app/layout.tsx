import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '황금쭈꾸미집',
  description: '대한민국 쭈꾸미 맛의 기준을 세우다. 전국 가맹문의 1577-6615',
  keywords: '황금쭈꾸미집,황금쭈꾸미집창업,황금쭈꾸미창업,쭈꾸미맛집,쭈꾸미전문점,쭈꾸미프랜차이즈,대구쭈꾸미집,대구맛집,쭈꾸미볶음맛집,대창쭈꾸미,대창쭈꾸미맛집,쭈꾸미집,삼겹쭈꾸미맛집,삼겹쭈꾸미,삼겹살쭈꾸미,우삼겹쭈꾸미맛집,우삼겹쭈꾸미,쭈꾸미창업,황금쭈꾸미',
  openGraph: {
    title: '황금쭈꾸미집',
    description: '대한민국 쭈꾸미 맛의 기준을 세우다. 전국 가맹문의 1577-6615',
    url: 'https://www.24khouses.com/',
    siteName: '황금쭈꾸미집',
    locale: 'ko_KR',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className="font-pretendard">
        {children}
      </body>
    </html>
  )
}