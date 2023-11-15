import Image from 'next/image'
//import { useEffect, useState } from 'react'
import { Dialog } from '@headlessui/react'
import { ChevronRightIcon } from '@heroicons/react/20/solid'

import Navbar from './components/navbar'
import { Logo } from './components/logo'
import LogoClouds from './components/logoCloud'
import FooterProductPage from './components/footerProductPage'
import HeroSection from './components/heroSection'

import client from './client'


export default async function ProductPresentation() {
//  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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

  return (
    <>
      <Navbar />
      <HeroSection />
      <LogoClouds />
      <FooterProductPage />
    </>
  )
}