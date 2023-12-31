'use client'
import Image from 'next/image'
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { ChevronRightIcon } from '@heroicons/react/20/solid'

import { Logo } from '@/app/components/Logo'
import Navbar from '@/app/components/Nav'
import FooterProductPage from '@/app/components/FooterHome'
import PricingPageBody from '@/app/components/Pricing'

export default function ProductPresentation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <PricingPageBody />
    </>
  )
}