'use client'
import Image from 'next/image'
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { ChevronRightIcon } from '@heroicons/react/20/solid'


//Componentized Stuff
// Job opening component
//Check out the components/aboutpage for further code/components.
import JobOpeningsPanel from '@/app/components/AboutPage/JobOpenings'
import HeroSection from '@/app/components/AboutPage/HeroSection'
import Timeline from '@/app/components/AboutPage/TimelineSection'
import People from '@/app/components/AboutPage/OurPeople'

import BenefitsSection from '@/app/components/AboutPage/BenefitsSection'



export default function AboutUs() {
  return (
    <>
      <main className="isolate bg-white">
        {/* Hero section */}
        <HeroSection />
        {/* Timeline section */}
        <Timeline />
        {/* Our People section */}
        <People />
        {/* Benefits section */}
        <BenefitsSection />
        {/* Job Openings preview section */}
        <JobOpeningsPanel />
      </main>
    </>
  )
}
