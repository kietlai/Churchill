
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/app/components/Navbar'
import FooterProductPage from '@/app/components/FooterHome'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Churchill',
  description: 'A Next-Gen tech startup aimed at making business more effiecent',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
        <body className={inter.className}>
        <Navbar />
          {children}
        <FooterProductPage />
        </body>
    </>
  )
}
