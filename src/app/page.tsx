'use client'

import Navbar from './components/Navbar'
import LogoClouds from './components/logoCloud'
import FooterProductPage from './components/FooterProductPage'
import HeroSection from './components/heroSection'
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