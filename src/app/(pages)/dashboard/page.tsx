import Image from 'next/image'
import { Dialog } from '@headlessui/react'
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import DashboardPage from '@/app/components/dashboardOutside'
import Stats from '@/app/components/dashboardComponents/stats'
export default function ProductPresentation() {
  return (
    <>
      <html className="h-full bg-white">
        <body className="h-full">
          <DashboardPage>
            <Stats/>
              
          </DashboardPage>
        </body>
      </html>
    </>
  )
}