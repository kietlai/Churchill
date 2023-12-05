'use client'
import Image from 'next/image'
//import { useEffect, useState } from 'react'
import { Dialog } from '@headlessui/react'
import { ChevronRightIcon } from '@heroicons/react/20/solid'

import Navbar from './components/navbar'
import { Logo } from './components/logo'
import LogoClouds from './components/logoCloud'
import FooterProductPage from './components/footerProductPage'
import HeroSection from './components/heroSection'
import { createClientComponentClient, createServerComponentClient } from '@supabase/auth-helpers-nextjs'




export default async function ProductPresentation() {

  return (
    <>
      <Navbar />
      <HeroSection />
      <LogoClouds />
      <FooterProductPage />
    </>
  )
}