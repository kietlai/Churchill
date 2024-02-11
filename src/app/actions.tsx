'use server'
import { redirect } from 'next/navigation'
import { createServerActionClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { z } from 'zod'

export async function createNewUser(formData: FormData){
    const client = createServerActionClient({
        cookies: () => cookies()
    },{
        supabaseUrl: process.env.supabaseUrl,
        supabaseKey: process.env.SUPABASE_KEY
    })

    const userSchema = z.object({
        firstName: z.string(),
        lastName: z.string(),
        birthDate: z.date(),
        email: z.string(),
        password: z.string().min(8),
        phoneNumber: z.number().optional()
    })

    const newUser = {
        firstName: formData.get('first_name'),
        lastName: formData.get('last_name'),
        birthDate: new Date(formData.get('birth_date') as string),
        password: formData.get('password'),
        email: formData.get('email'),
        phoneNumber: Number.parseInt(formData.get('phone_number') as string)
    }

    // validation
    // console.log(userSchema.parse(newUser))
    if(userSchema.safeParse(newUser).success){

        // sign up new user
        const newSignUp = await client.auth.signUp({
            email: newUser.email as string,
            password: newUser.password as string
            
        })

        const { firstName,lastName,birthDate,email,phoneNumber } = newUser
        
        const test = await client.from('accounts').insert([
            { id: newSignUp.data.user?.id, firstName, lastName, birthDate, phoneNumber }
        ])

    }



}