import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import FormCards from "./FormCard"

interface Job {
    id: string,
    title: string,
    desc: string,
    salary: number,
    isOpen: boolean,
    type: 'remote' | 'in-person'
    teams: string,
    [benefits:number]: string,
    [aboutYou:number]: string,
    [bonus:number]: string,
    [responsibilities:number]: string,

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
    //TODO: Need to add in the types for the arrays i dunno how to.
    const job: Job = {id: params.id, title: jobData.title, desc: jobData.description, salary: jobData.salary, isOpen: jobData.isOpen, type: jobData.type, teams: jobData.teams,}
    return (
        <>
            
            <p>{job.title} Application here</p>

            <FormCards />


        
        </>
    )
}