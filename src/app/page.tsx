'use client'

import Navbar from './components/Navbar'
import LogoClouds from './components/LogoCloud'
import FooterProductPage from './components/FooterProductPage'
import HeroSection from './components/HeroSection'
import Testimonial from './components/Testimonial'



export default async function ProductPresentation() {

  return (
    <>
      <Navbar />
      <HeroSection />
      <LogoClouds />
      <Testimonial />
      <FooterProductPage />
    </>
  )
}