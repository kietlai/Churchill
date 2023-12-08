import Image from 'next/image'
import { Dialog } from '@headlessui/react'
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import DashboardPage from '@/app/components/DashboardOutside'
import Stats from '@/app/components/dashboardComponents/Stats'
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