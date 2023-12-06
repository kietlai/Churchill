import Image from 'next/image'
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { ChevronRightIcon } from '@heroicons/react/20/solid'

import { Logo } from '@/app/components/logo'
import Navbar from '@/app/components/navbar'
import SearchBar from './SearchBar'
import FooterProductPage from '@/app/components/footerProductPage'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

export default async function JobOpenings() {
  const client = createServerComponentClient({
   cookies: () => cookies() 
  },{
    supabaseUrl: process.env.supabaseUrl,
    supabaseKey: process.env.SUPABASE_KEY
  })

  const { data, error } = await client.from('jobs').select()

  if(error) console.log(error.message)

  return (
    <>
      <header className='flex flex-col justify-center items-center py-4 gap-2'>
        <span className='text-blue-500 font-medium text-4xl'>Job Listings</span>
        <SearchBar/>
      </header>
      <hr/>
      <main>
      
      </main>
    </>
  )
}