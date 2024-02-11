import { createClientComponentClient, createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import { notFound } from "next/navigation"
import Result from "./Result"
import Link from "next/link"

export default async function JobView({ params }: { params: { id: string} }){
    const client = createServerComponentClient({
        cookies: () => cookies()
    },{
        supabaseUrl: process.env.supabaseUrl,
        supabaseKey: process.env.SUPABASE_KEY
    })

    const res: any = await client.from('jobs').select().eq('id',params.id)

    if(!res.data?.length){
        notFound()
    } 
    
    const job = { title: res.data[0].title }

    return (
        <>
                
        </>
    )

}


// client.from('jobs').select().eq('id',params.id)
//             .then(res => {
//                 if(res.data?.length) {
//                     setJob(res.data[0])
//                 } else {
//                     notFound()
//                 }

               
//             })