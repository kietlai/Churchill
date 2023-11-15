import Image from 'next/image'
import { Dialog } from '@headlessui/react'
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import Stats from '@/app/components/dashboardComponents/stats'

export default function ProductPresentation() {
  return (
    <>
      <html className="h-full bg-white">
        <body className="h-full">
          <div className="flex flex-col h-screen items-center justify-center pt-16 pb-48 sm:pt">
            <h1 className="bg-clip-text py-10 text-center text-[20vw] md:text-[10vw] text-transparent font-black bg-gradient-to-r from-sky-400 to-sky-500">Coming Soon.</h1>
          </div>
        </body>
      </html>
    </>
  )
}