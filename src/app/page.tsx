'use client'

import Navbar from './components/navbar'
import LogoClouds from './components/LogoCloud'
import FooterProductPage from './components/FooterProductPage'
import HeroSection from './components/heroSection'
import Notif from './components/BannerNotif'
import Testimonial from './components/TestimonalNew'
import Features from './components/Features'
import CTAJoinUs from './components/JoinUs'

export default async function ProductPresentation() {

  return (
    <>
      <Navbar />
      <HeroSection />
      <LogoClouds /> 
      <Features />
      <Testimonial />
      <CTAJoinUs />
      <FooterProductPage />
      <Notif />
    </>
  )
}