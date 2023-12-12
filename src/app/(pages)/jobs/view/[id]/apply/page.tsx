import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"


export default async function JobApplication({ params }: { params: { id: string} }){

    const client = createServerComponentClient({
        cookies: () => cookies()
    },{
        supabaseKey: process.env.SUPABASE_KEY,
        supabaseUrl: process.env.supabaseUrl
    })

    const res: any = await client.from('jobs').select().eq('id',params.id)

    const job = { title: res.data[0].title }

    return (
        <>
        
            <p>{job.title} Application here</p>    
        
        </>
    )
}