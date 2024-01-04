'use client'
import { Fragment, useEffect, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
  BellAlertIcon,
  ChatBubbleBottomCenterIcon,
  LightBulbIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, RectangleGroupIcon } from '@heroicons/react/20/solid'
import { createClientComponentClient, createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { UserIdentity, UserMetadata, UserResponse } from '@supabase/supabase-js'
import { setOriginalNode } from 'typescript'
import { cookies } from 'next/headers'
import Image from 'next/image'
import {z} from 'zod'
import ProfileCard from './ProfileCard'

const products = [
  {
    name: 'Analytics',
    description: 'Coming Soon! More information being released soon.',
    href: '/products/analytics',
    icon: ChartPieIcon,
  },
  {
    name: 'Communication',
    description: 'Speak directly to each other and create a work community',
    href: '/products/community-collaboration',
    icon: ChatBubbleBottomCenterIcon,
  },
  { 
    name: 'AI Advisor', 
    description: 'Allow your HR work to be done faster and more streamlined', 
    href: '/products/ai-advisor', 
    icon: LightBulbIcon },
  {
    name: 'AI Customer Interactions',
    description: 'Allow our new trained GPT to interact with your customers based on what kind of business you are',
    href: '#',
    icon: SquaresPlusIcon,
  },
]
const callsToAction = [
  { name: 'Contact sales', href: '/contact-sales', icon: PhoneIcon },
  { name: 'View all products', href: '/products', icon: RectangleGroupIcon },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}


export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const [isLoggedIn,setLoggedIn] = useState<boolean>(false);
  const [user,setUser] = useState<any>({})
  const [authMethod,setAuthMethod] = useState<string>('email')

  const client = createClientComponentClient({
    supabaseUrl: process.env.supabaseUrl,
    supabaseKey: process.env.SUPABASE_KEY
  })

  const router = useRouter();

  useEffect(() => {
    
    client.auth.getUser().then(res => {
      setLoggedIn(Boolean(res.data.user?.aud))
      
      
      if(res.data.user != null && res.data.user != undefined){
        if(Object.keys(res.data.user.user_metadata as object).length > 0){
          setUser(res.data.user?.user_metadata)
          setAuthMethod('google')
        }
      } else {
        client.from('accounts').select().then((res) => setUser(res.data![0]))
        setAuthMethod('email')
      }

    })
    
  },[])



  return (
    <>
      <header className="relative isolate z-10 bg-white border-bottom-8 border-gray-400">
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="/" className="-m-1.5 p-1.5">
              <Image
                className="h-12 w-auto"
                src="/icon.svg"
                alt="Logo"
                width={75}
                height={75}
               />
              <span className="sr-only">Churchill App</span>
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <Popover.Group className="hidden lg:flex lg:gap-x-12">
            <a href="/pricing" className="text-sm font-semibold leading-6 text-gray-900">
              Pricing
            </a>
            <a href="/careers/about" className="text-sm font-semibold leading-6 text-gray-900">
              About Us
            </a>
            <a href="/careers/listing" className="text-sm font-semibold leading-6 text-gray-900">
              Careers
            </a>
          </Popover.Group>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {/* <button onClick={async () => {await client.auth.signOut(); router.refresh()}} >Log out</button> */}
            {isLoggedIn ? <ProfileCard profileSrc={authMethod == 'google' ? user.avatar_url : ''} authMethod={authMethod} userObj={user} /> : <Link href="/login" className="text-sm font-semibold leading-6 text-gray-900">
              Log in <span aria-hidden="true">&rarr;</span>
            </Link>}
          </div>
        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-10" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Churchill App</span>
                <Image 
                  src={"icon.svg"} 
                  width={75} 
                  height={75}
                  alt='company logo'
                  className="h-12 w-auto"
                 />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <a
                    href="/pricing"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Pricing
                  </a>
                  <a
                    href="/jobs/about"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    About Us
                  </a>
                  <a
                    href="/jobs/listing"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Careers
                  </a>
                </div>
                <div className="py-6">
                  <a
                    href="/login"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </>
  )
}