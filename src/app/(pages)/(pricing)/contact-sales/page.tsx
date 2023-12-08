import Image from 'next/image'
import { Dialog } from '@headlessui/react'
import { ChevronRightIcon } from '@heroicons/react/20/solid'

import { Logo } from '@/app/components/Logo'
import PricingPageBody from '@/app/components/Pricing'

export default function ProductPresentation() {
  return (
    <>
        <PricingPageBody></PricingPageBody>
    </>
  )
}