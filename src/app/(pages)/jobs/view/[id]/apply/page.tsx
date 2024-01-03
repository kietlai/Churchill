import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"

import FileUpload from "@/app/components/FileUpload"

interface Job {
    id: string,
    title: string,
    desc: string,
    salary: number,
    isOpen: boolean,
    type: 'remote' | 'in-person'
}

export default async function JobApplication({ params }: { params: { id: string} }){

    const client = createServerComponentClient({
        cookies: () => cookies()
    },{
        supabaseKey: process.env.SUPABASE_KEY,
        supabaseUrl: process.env.supabaseUrl
    })

    const res: any = await client.from('jobs').select().eq('id',params.id)
    const jobData = res.data[0]

    const job: Job = {id: params.id, title: jobData.title, desc: jobData.description, salary: jobData.salary, isOpen: jobData.isOpen, type: jobData.type }

    return (
        <>
        
            <p>{job.title} Application here</p>

            <FileUpload/>
        </>
    )
}