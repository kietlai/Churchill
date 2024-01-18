import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import FormCards from "./FormCard"
import Desc from "./JobDesc"
interface Job {
    id: string,
    title: string,
    desc: string,
    longDesc: string,
    salary: string,
    isOpen: boolean,
    type: 'Remote' | 'In-person'
    teams: string,
    times: string,
    // In the JSONB
    reqs: string[]
    bonus: string[],
    aboutYou: string[],
    responsibilities: string[]
}


export default async function JobApplication({ params }: { params: { id: string } }){

    const client = createServerComponentClient({
        cookies: () => cookies()
    },{
        supabaseKey: process.env.SUPABASE_KEY,
        supabaseUrl: process.env.supabaseUrl
    })

    const infoRes: any = await client.from('jobs').select('info').eq('id',params.id);
    const jobInfo = infoRes[0]; // reqs etc


    const res: any = await client.from('jobs').select().eq('id',params.id)
    const jobData = res.data[0]

    console.log(jobData);
    //TODO: Need to add in the types for the arrays i dunno how to do this
    const job: Job = {id: params.id, title: jobData.title, desc: jobData.description, longDesc: jobData.longDesc, salary: jobData.salary, isOpen: jobData.isOpen, type: jobData.type, teams: jobData.teams, times: jobData.time, reqs: jobData.info.reqs, bonus: jobData.info.bonus, aboutYou: jobData.info.aboutYou, responsibilities: jobData.info.responsibilities }
    return (
        <>

            <Desc key={job.id} id={job.id} title={job.title} desc={job.desc} longDesc={job.longDesc} salary={job.salary} teams={job.teams} location={job.type} times={job.times} reqs={job.reqs} bonus={job.bonus} aboutYou={job.aboutYou} responsibilities={job.responsibilities}/>
            
            <section id="apply">
                <FormCards appliedFor={job.title} appliedForId={job.id} /> 
            </section>
        
        </>
    )
}