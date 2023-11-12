// supabase
import { createClient } from '@supabase/supabase-js'
import { sign } from 'crypto'

// supabase client to access database
const client = createClient('https://hfzmknwnkgiibhmyvbwo.supabase.co',process.env.SUPABASE_KEY as string)

// Make a new account using email
export const signUpWithEmail = async (email: string, pass: string) => {
    
    await client.auth.signUp({
        email: email,
        password: pass,
        options: {
            emailRedirectTo: '/'
        }
    })

}

export default client;