import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Notif from './components/BannerNotif'

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
    <html lang="en">
      <body className={inter.className}><Notif />{children}</body>
    </html>
  )
}
