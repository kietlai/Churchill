'use client'
import Image from 'next/image'
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { ChevronRightIcon } from '@heroicons/react/20/solid'

import { Logo } from '@/app/components/logo'
import Navbar from '@/app/components/navbar'
import FooterProductPage from '@/app/components/footerProductPage'
import PricingPageBody from '@/app/components/pricing'

export default function ProductPresentation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <PricingPageBody />
    </>
  )
}