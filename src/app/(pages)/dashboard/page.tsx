import Image from 'next/image'
import { Dialog } from '@headlessui/react'
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import DashboardPage from '@/app/components/DashboardOutside'
import Stats from '@/app/components/DashboardComponents/Stats'
import { useRouter } from 'next/navigation'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

import { redirect } from 'next/navigation'
import Header from '@/app/components/DashboardComponents/DashboardHeader'

export default async function ProductPresentation() {

  const client = createServerComponentClient({
    cookies: () => cookies()
  },{
    supabaseUrl: process.env.supabaseUrl,
    supabaseKey: process.env.SUPABASE_KEY
  })


  const user = await (await client.auth.getUser()).data.user

  if(!user){
    redirect('/login')
  }

  return (
    <>
      <html className="h-full bg-white">
        <body className="h-full">
          <DashboardPage>
            <Header />
                          
          </DashboardPage>
        </body>
      </html>
    </>
  )
}