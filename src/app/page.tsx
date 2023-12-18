'use client'

import Navbar from './components/navbar'
import LogoClouds from './components/logoCloud'
import FooterProductPage from './components/footerProductPage'
import HeroSection from './components/heroSection'
import Notif from './components/BannerNotif'
import Testimonial from './components/TestimonalNew'
import Features from './components/Features'

export default async function ProductPresentation() {

  return (
    <>
      <Navbar />
      <HeroSection />
      <LogoClouds /> 
      <Features />
      <Testimonial />
      <FooterProductPage />
      <Notif />
    </>
  )
}