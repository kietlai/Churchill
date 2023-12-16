'use client'

import { XMarkIcon } from '@heroicons/react/20/solid'
import { Dialog, Transition } from '@headlessui/react'
import { useState } from 'react'

export default function Notif() {
  const [isShowing, setIsShowing] = useState(true);
  return (
    <>
      {/*
        Make sure you add some bottom padding to pages that include a sticky banner like this to prevent
        your content from being obscured when the user scrolls to the bottom of the page.
      */}
      <Transition 
        show={isShowing}
        enter="ease-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="pointer-events-none fixed inset-x-0 bottom-0 sm:flex sm:justify-center sm:px-6 sm:pb-5 lg:px-8 ">
          <div className="z-64 pointer-events-auto flex items-center justify-between gap-x-6 backdrop-blur-sm drop-shadow-lg bg-slate-200/50 px-6 py-2.5 sm:rounded-xl sm:py-3 sm:pl-4 sm:pr-3.5">
            <p className="text-sm leading-6 text-black">
              <a href="#">
                <strong className="font-semibold"></strong>
                <svg viewBox="0 0 2 2" className="mx-2 inline h-0.5 w-0.5 fill-current" aria-hidden="true">
                  <circle cx={1} cy={1} r={1} />
                </svg>
                Join us at Hereford Jan 19, 2024 for the FBLA competition see what’s coming next&nbsp;<span aria-hidden="true">&rarr;</span>
              </a>
            </p>
            <button onClick={() => setIsShowing((isShowing)=> !isShowing)} type="button" className="-m-1.5 flex-none p-1.5">
              <span className="sr-only">Dismiss</span>
              <XMarkIcon className="h-5 w-5 text-black" aria-hidden="true" />
            </button>
          </div>
        </div>
      </Transition>
    </>
  )
}