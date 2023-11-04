import Image from 'next/image'
import { Dialog } from '@headlessui/react'
import { ChevronRightIcon } from '@heroicons/react/20/solid'

import { Logo } from '@/app/components/logo'
import PricingPageBody from '@/app/components/pricing'

export default function ProductPresentation() {
  return (
    <>
        <PricingPageBody></PricingPageBody>
    </>
  )
}