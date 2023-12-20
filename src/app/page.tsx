'use client'

import Navbar from './components/Navbar'
import LogoClouds from './components/LogoCloud'
import Footer from './components/FooterHome'
import HeroSection from './components/HeroSection'
import Notif from './components/BannerNotif'
import Testimonial from './components/TestimonalNew'
import Features from './components/Features'
import CTAJoinUs from './components/JoinUs'

export default function ProductPresentation() {

  return (
    <>
      <Navbar />
      <HeroSection />
      <LogoClouds /> 
      <Features />
      <Testimonial />
      <CTAJoinUs />
      <Footer />
      <Notif />
    </>
  )
}