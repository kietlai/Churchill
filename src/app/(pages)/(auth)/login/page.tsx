'use client'

// import { signIn } from "@/app/client"
import Image from "next/image"

import {Logo} from '../../../components/logo'
import GoogleLogo from '../../../PNGs/other/google-logo.png'
import { FormEvent, useRef, useState } from "react"
import { createClientComponentClient, createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { useRouter } from "next/navigation"

export default function Login(){

    const router = useRouter();

    const client = createClientComponentClient({
        supabaseKey: process.env.SUPABASE_KEY,
        supabaseUrl: process.env.supabaseUrl
    })

    const signInOAuth = async () => await client.auth.signInWithOAuth({
        provider: "google"
    })

    const [userName, setUsername] = useState<string>('')
    const [password,setPassword] = useState<string>('')
    const [loginError,setError] = useState<string>('')

    const inputForm = useRef<HTMLFormElement>(null)

    async function handleSubmit(e: FormEvent){
        e.preventDefault();

        const { data, error } =  await client.auth.signInWithPassword(
            {
                email: userName,
                password: password 
            }
        )

        if(error) {
            console.log(error.message)
            setError(error.message)
            return
        }

        console.log(`Logged in as ${data.user?.email}`);

        router.back();
    }
    

    return (
        <>
            {/* <header className="flex justify-center ">
                <div className="pl-[13vw]" >
                    <Logo height={100} width={500} />
                </div>

            </header> */}

            <main className="flex flex-col items-center justify-center  w-[100%]" >

                <form onSubmit={handleSubmit} ref={inputForm} className="w-[300px] flex justify-center flex-col">

                    <label htmlFor="username-input">Email</label>
                    <input onChange={e => setUsername(e.target.value)} type="text" name="username" id="username-input" />

                    <label htmlFor="password-input">Password</label>
                    <input onChange={e => setPassword(e.target.value)} type="password" name="password" id="password-input" />
                    
                    <div className="flex justify-center m-2 ">
                        <button onClick={handleSubmit} className="w-[100px] text-center flex justify-center gap-1 border py-2 px-4 rounded-2xl font-medium hover:bg-gray-300" >Sign in</button>
                    </div>
                    <span className="text-red-500 flex justify-center">{loginError ?? loginError}</span>
                </form>
                <hr/>
                <p>or</p>
                {/* onClick={signInOAuth} */}
                <button onClick={signInOAuth} className="flex gap-1 border py-2 px-4 rounded-2xl font-medium hover:bg-gray-300" >
                    <Image src={GoogleLogo} alt="Google Logo" width='25' height='25' ></Image>
                    Sign in with Google
                </button>

            </main>
        
            {/* <button  onClick={(() => signIn({ method: 'email', email: 'heroemenalom73@gmail.com', password: 'password123123' }))}>Sign In</button>
            <br/>
            <button onClick={() => signIn({ method: 'google' })}>Sign In with Google</button> */}
        </>
    )
}