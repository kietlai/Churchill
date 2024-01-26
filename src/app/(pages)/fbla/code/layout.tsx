import Navbar from "@/app/components/Nav"
import FooterProductPage from "@/app/components/FooterProductPage"
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Churchill',
  description: 'A Next-Gen tech startup aimed at making business more efficiently',
}

export default function MDXLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="prose mx-auto max-w-xl">
           {children}
        </div>
       
        <FooterProductPage />
      </body>
    </html>
  )
}
