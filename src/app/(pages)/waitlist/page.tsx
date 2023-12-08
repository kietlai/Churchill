import Image from 'next/image'
import { Dialog } from '@headlessui/react'
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import Stats from '@/app/components/dashboardComponents/Stats'

export default function ProductPresentation() {
  return (
    <>
      <html className="h-full bg-white">
        <body className="h-full">
          {/*
          <div className="flex flex-col h-screen items-center justify-center pt-16 pb-48 sm:pt">
            <h1 className="bg-clip-text py-10 text-center text-[20vw] md:text-[10vw] text-transparent font-black bg-gradient-to-r from-sky-400 to-sky-500">Coming Soon.</h1>
          </div>
      */}
          <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-sky-600">404</h3>
              <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Currently being built</h1>
              <p className="mt-6 text-base leading-7 text-gray-600">Give us some time</p>
            </div>
          </main>
        </body>
      </html>
    </>
  )
} 