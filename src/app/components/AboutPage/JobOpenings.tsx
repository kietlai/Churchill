'use client'

import { useEffect, useState } from 'react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

import JobListing from './JobList/JobListing'

interface Job {
  title: string
}

export default function JobOpeningsPanel() {
  const client = createClientComponentClient({
    supabaseUrl: process.env.supabaseUrl,
    supabaseKey: process.env.SUPABASE_KEY
  })

  const [query,setQuery] = useState<string>('')
  const [jobs,setJobs] = useState<any>([])

  useEffect(() => {

    client.from('jobs').select().like("title",`%${query}%`)
      .then((res) => setJobs(res.data))
      
  },[query])

  return (
    <>
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto flex max-w-2xl flex-col items-end justify-between gap-16 lg:mx-0 lg:max-w-none lg:flex-row">
          <div className="w-full lg:max-w-lg lg:flex-auto">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              We’re always on the look out for talented people
            </h2>
            <p className="mt-6 text-xl leading-8 text-gray-600">
              We're looking for people to help us in the following:
            </p>
            <img
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Team Working Together"
              className="mt-16 aspect-[6/5] w-full rounded-2xl bg-gray-50 object-cover lg:aspect-auto lg:h-[34.5rem]"
            />
          </div>
          <div className="w-full lg:max-w-xl lg:flex-auto">
            <h3 className="sr-only">Job openings</h3>
            <ul className="-my-8 divide-y divide-gray-100">
              {jobs.length > 0 ? jobs.map((job: any) => <JobListing id={job.id} title={job.title} desc={job.description} salary = {job.salary} />) : <span className="flex justify-center grow text-gray-600">No Current Jobs</span>}
            </ul>
            <div className="mt-8 flex border-t border-gray-100 pt-8">
              <a href="/jobs/listing" className="text-sm font-semibold leading-6 text-sky-600 hover:text-sky-500">
                View all openings <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
} 