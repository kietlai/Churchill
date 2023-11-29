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
//  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const client = createClientComponentClient({
    supabaseUrl: process.env.supabaseUrl,
    supabaseKey: process.env.SUPABASE_KEY
  })


  const {data , error } = await client
    .from('accounts')
    .select('*')
    
  if(error){
    console.log(error)

  } else {
    console.log('data')
    console.log(data)
    console.log('---')
  }

  console.log()

  return (
    <>
      <Navbar />
      <HeroSection />
      <LogoClouds />
      <FooterProductPage />
    </>
  )
}