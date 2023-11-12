// supabase
import { createClient } from '@supabase/supabase-js'
import { sign } from 'crypto'

const client = createClient('https://hfzmknwnkgiibhmyvbwo.supabase.co',process.env.SUPABASE_KEY as string)

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