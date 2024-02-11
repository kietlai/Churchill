'use client'
import { useEffect, useState } from 'react'

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import SearchIcon from './SearchIcon'
import Link from 'next/link'

import JobPanel from './JobPanel'
import JobOpeningsPanel from '@/app/components/AboutPage/JobOpenings'
import JobListing from '@/app/components/AboutPage/JobList/JobListing'
import BenefitsSection from '@/app/components/AboutPage/BenefitsSection'

interface Job {
  title: string
}

export default function JobOpenings() {
  const client = createClientComponentClient({
    supabaseUrl: process.env.supabaseUrl,
    supabaseKey: process.env.SUPABASE_KEY
  })

  const [query,setQuery] = useState<string>('')
  const [jobs,setJobs] = useState<any>([])

  useEffect(() => {

    client.from('jobs').select().ilike("title",`%${query.toLowerCase()}%`)
      .then((res) => setJobs(res.data))
      
  },[query])


  return (
    <>
      
      <section id="reasons" className="pb-12">
      <BenefitsSection />
      </section>

      <section id="jobs" className="bg-white pt-12">
        <header className='flex flex-col justify-center items-center py-4 gap-2'>
          <span className='text-black font-medium text-4xl'>Open Positions</span>
          <div className="flex justify-center items-center w-[35vw] min-w-[300px] border px-5 focus-within:border-blue-500 rounded-md">
            <SearchIcon/>
            <input onChange={(e) => setQuery(e.target.value)} className='grow border-none outline-[none]' type="text" placeholder='Search' />
          </div>
        </header>
        <hr/>
        <main className='flex gap-5 m-4 justify-center items-center flex-col  flex-wrap'>
          {jobs.length > 0 ? jobs.map((j: any) => <JobPanel title={j.title} id={j.id} key={j.id} />) : <span className='flex justify-center grow text-gray-400'>No Results</span>}
        </main>
      </section>
    </>
  )
}