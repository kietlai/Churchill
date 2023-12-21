'use client'


import Navbar from './components/Nav'
import LogoClouds from './components/LogoCloud'
import Footer from './components/FooterHome'
import Notif from './components/BannerNotif'
import Testimonial from './components/TestimonalNew'
import Features from './components/Features'
import CTAJoinUs from './components/JoinUs'
import Hero from './components/HeroSection'

export default function ProductPresentation() {

  return (
    <>
      <Navbar />
      <Hero />
      <LogoClouds /> 
      <Features />
      <Testimonial />
      <CTAJoinUs />
      <Footer />
      <Notif />
    </>
  )
}