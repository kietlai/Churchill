'use client'
import { useEffect, useRef, useState } from 'react'
import GoogleLogo from '../../../images/PNGs/other/google-logo.png'
import Image from 'next/image'

import { createNewUser } from '@/app/actions'

import Logo from '@/app/images/PNGs/Large Favicon Brand Color.png'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'


export default function SignUp(){
    const client = createClientComponentClient({
        supabaseUrl: process.env.supabaseUrl,
        supabaseKey: process.env.SUPABASE_KEY
    })

    const [pwd,setPwd] = useState<string>('')
    const [confPwd,setConfPwd] = useState<string>('');
    const [error,setError] = useState<string>('')


    // check if passwords match
    useEffect(() => {
        if(confPwd.length > 0){
            setError(pwd == confPwd ? '' : 'Passwords must match')
        } else {
            setError('')
        }
    },[pwd,confPwd])

    const signInOAuth = async () => {
        await client.auth.signInWithOAuth({
            provider: "google",
            
        })
        
    }
    
    // symbol showing a field is required
    const Star = () => <span className="text-red-500">*</span>

    
    return (
        <>
        
            <main className="flex flex-col items-center w-[100%] ">
                <Image src={Logo} height={90} alt="Churchill Logo" />

                <form action={createNewUser} className="flex flex-col py-6 w-[60%] md:basis-[75%] lg:basis-[55%] border-t-sky-500 border-t-8 shadow-md ">
                    
                    {/* name field */}
                    <div className=" flex flex-col p-3 mx-2">
                        <div className=" text-sm ">
                            <span className="font-medium">Name </span>
                            <Star/>
                        </div>
                        <div className='flex flex-col gap-2 md:flex-row'>
                            <input name="first_name" className="rounded-md grow border-gray-300" type="text" placeholder="First Name" required/>
                            <input name="last_name" className="rounded-md grow border-gray-300" type="text" placeholder="Last Name" required />
                        </div>
                    </div>
                    
                    {/* birthday field */}
                    <div className=" flex flex-col justify-between p-3 mx-2">
                        <div className="">
                            <span className="font-medium text-sm">Birth Date </span>
                            <Star/>
                        </div>
                        <input name="birth_date" className="rounded-md basis-1/2 grow border-gray-300" type="date" placeholder="Birthdate" required/>
                    </div>

                    {/* email + phone-number field */}
                    <div className="flex justify-between gap-2 flex-col mx-2 p-3 md:flex-row">
                        
                        {/* email field */}
                        <div className='flex flex-col grow '>
                            <div className="">
                                <span className="font-medium text-sm ">Email </span>
                                <Star/>
                            </div>
                            <input name="email" className="rounded-md basis-1/2 grow border-gray-300" type="text" placeholder="name@example.com" required/>
                        </div>

                        {/* phone-number field */}
                        <div className='flex flex-col grow'>
                            <div className="">
                                <span className="font-medium text-sm ">Phone # </span>
                                
                            </div>
                            <input name="phone_number" className="rounded-md basis-1/3 border-gray-300" type="tel" placeholder="+1 123-456-7890" pattern="[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]"/>
                        </div>
                    </div>

                    

                    {/* password field */}
                    <div className=" flex flex-col justify-between mx-2 p-3">
                        <div className="">
                            <span className="font-medium text-sm ">Password </span>
                            <Star/>
                        </div>
                        <div className='flex gap-2 flex-col md:flex-row'>
                            <input onChange={(e) => setPwd(e.target.value)} className="rounded-md basis-1/2 grow border-gray-300" type="password" minLength={8} placeholder="Enter Password" required/>
                            <input onChange={(e) => setConfPwd(e.target.value)} name="password" className="rounded-md basis-1/2 grow border-gray-300" type="password" minLength={8} placeholder="Confirm Password" required/>
                        </div>
                    </div>

                    <span className='text-red-500 text-center'>{error}</span>
                    
                    

                    {/* sign-up button */}
                    <div className="my-6 flex justify-center ">
                        <input type="submit" value="Sign Up" className="px-4 py-2 w-[14rem] rounded-2xl hover:cursor-pointer hover:bg-sky-500 hover:text-white border border-sky-500 text-sky-500 font-medium" />
                    </div>

                    <div className="flex items-center px-2">
                        <hr className="grow-[5]"/> <span className="grow text-center">or</span> <hr className="grow-[5]" />
                    </div>
                    <div className='my-4 flex justify-center items-center'>
                        <button onClick={signInOAuth} className="flex gap-1 border py-2 px-4 rounded-2xl font-medium hover:bg-gray-300" >
                            <Image src={GoogleLogo} alt="Google Logo" width='25' height='25' ></Image>
                            <span>Continue with Google</span>
                        </button>
                    </div>
                </form>

            </main>
        
        </>
    )

}