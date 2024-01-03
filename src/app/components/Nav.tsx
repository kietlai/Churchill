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
            <Popover>
              <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
                Product
                <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
              </Popover.Button>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 -translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 -translate-y-1"
              >
                <Popover.Panel className="absolute inset-x-0 top-0 -z-10 bg-white pt-14 shadow-lg ring-1 ring-gray-900/5">
                  <div className="mx-auto grid max-w-7xl grid-cols-4 gap-x-4 px-6 py-10 lg:px-8 xl:gap-x-8">
                    {products.map((item) => (
                      <div key={item.name} className="group relative rounded-lg p-6 text-sm leading-6 hover:bg-gray-50">
                        <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                          <item.icon className="h-6 w-6 text-gray-600 group-hover:text-sky-500" aria-hidden="true" />
                        </div>
                        <a href={item.href} className="mt-6 block font-semibold text-gray-900">
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    ))}
                  </div>
                  <div className="bg-gray-50">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                      <div className="grid grid-cols-3 divide-x divide-gray-900/5 border-x border-gray-900/5">
                        {callsToAction.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                          >
                            <item.icon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </Popover>

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
                  <Disclosure as="div" className="-mx-3">
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                          Product
                          <ChevronDownIcon
                            className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                            aria-hidden="true"
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className="mt-2 space-y-2">
                          {[...products, ...callsToAction].map((item) => (
                            <Disclosure.Button
                              key={item.name}
                              as="a"
                              href={item.href}
                              className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                            >
                              {item.name}
                            </Disclosure.Button>
                          ))}
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
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