'use client'
import Image from 'next/image'
import { ChangeEventHandler, useEffect, useRef, useState } from 'react'
import { Dialog } from '@headlessui/react'
import { ChevronRightIcon } from '@heroicons/react/20/solid'

import { Logo } from '@/app/components/logo'
import Navbar from '@/app/components/navbar'
import SearchBar from './SearchBar'
import FooterProductPage from '@/app/components/footerProductPage'
import { createClientComponentClient, createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import SearchIcon from './SearchIcon'

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

    client.from('jobs').select().like("title",`%${query}%`)
      .then((res) => setJobs(res.data))
      
  },[query])


  return (
    <>
      <header className='flex flex-col justify-center items-center py-4 gap-2'>
        <span className='text-sky-500 font-medium text-4xl'>Job Listings</span>
        <div className="flex justify-center items-center w-[35vw] min-w-[300px] border px-5 focus-within:border-blue-500">
          <SearchIcon/>
          <input onChange={(e) => setQuery(e.target.value)} className='grow border-none outline-[none]' type="text" placeholder='Search' />
        </div>
      </header>
      <hr/>
      <main>
        <ul>

          {jobs.map((j: any) => <li>{j.title}</li>)}

        </ul>
      </main>
    </>
  )
}