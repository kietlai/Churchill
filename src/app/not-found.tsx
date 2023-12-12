'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

import Logo from 'src/app/images/PNGs/Background/Large Favicon Brand Color.png'

export default function NotFound(){

    const router = useRouter()


    return (
        <>
        
         <main className="flex flex-col gap-2 justify-center items-center h-[100vh]">
            <Image height={225} src={Logo} alt='churchill logo'></Image>
            <span className="text-sky-500 font-medium text-5xl" >404 Not Found</span>
            <button onClick={() => router.back() } className='text-sky-500 border border-sky-500 px-5 py-2 rounded-md hover:bg-sky-500 hover:text-white'>Return</button>
         </main>

        </>
    )

}