'use client'

import Navbar from './components/Navbar'
import LogoClouds from './components/LogoCloud'
import FooterProductPage from './components/FooterProductPage'
import HeroSection from './components/HeroSection'
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