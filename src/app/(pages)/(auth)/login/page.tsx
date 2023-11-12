'use client'

import { signIn } from "@/app/client"


export default async function Login(){

    return (
        <>
        
            <button  onClick={(() => signIn({ method: 'email', email: 'heroemenalom73@gmail.com', password: 'password123123' }))}>Sign In</button>
        
        </>
    )
}