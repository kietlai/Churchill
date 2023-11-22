// supabase
import { createClient } from '@supabase/supabase-js'

// Types for Authentication
type GoogleLoginCredentials = {
    method: 'google'
}

type EmailLoginCredenials = {
    method: 'email',
    email: string,
    password: string;
}

type LoginCredentials = EmailLoginCredenials | GoogleLoginCredentials

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

export const signIn = async (credentials: LoginCredentials) => {

    switch(credentials.method){
        
        case 'email':
            const {data, error} = await client.auth.signInWithPassword({
                email: credentials.email,
                password: credentials.password,
                
            })

            if(!error){
                console.log(data)
            } else {
                console.log(error)
            }

            break;


        case 'google':
            await client.auth.signInWithOAuth({
                provider: "google"
            })


            
            break;
        
        
            
    }

}

export default client;