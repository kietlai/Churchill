'use client'

import Navbar from './components/Navbar'
import LogoClouds from './components/logoCloud'
import FooterProductPage from './components/FooterProductPage'
import HeroSection from './components/heroSection'
import Notif from './components/BannerNotif'
import Testimonial from './components/TestimonalNew'
import TT from './components/Testimonial'

export default async function ProductPresentation() {

  return (
    <>
      <Navbar />
  
      <HeroSection />
      <TT />
      <LogoClouds /> 
      <Testimonial />
      <FooterProductPage />
      <Notif />
    </>
  )
}