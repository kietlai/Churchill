'use client'
import { PhotoIcon, UserCircleIcon, DocumentArrowUpIcon } from '@heroicons/react/24/solid'
import { User, createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { FormEvent, Reducer, use, useEffect, useReducer, useRef, useState } from 'react'
import { Resend } from 'resend'
import { z } from 'zod'

//Where you learned about us at
const places = [
  { id: "email-p", title: "Email" },
  { id: "instagram-p", title: "Instagram" },
  { id: "network-p", title: "Your Network" },
  { id: "other-p", title: "Other" },
]

const genderIdentities = [
  { id: "male", title: "Man"},
  { id: "female", title: "Woman"},
  { id: "non-binary", title: "Non-binary"},
  { id: "self-describe-gi", title: "I prefer to self-describe"},
  { id: "dont-wish-gi", title: "I don't wish to answer"},
]

const ethnicities = [
  { id: "black-african", title:"Black or of African descent"},
  { id: "white", title:"White or European"},
  { id: "hispanic", title:"Hispanic, Latinx or of Spanish Origin"},
  { id: "islander", title:"Native Hawaiian or Pacific Islander"},
  { id: "middle-eastern", title:"Middle Eastern or North African"},
  { id: "indigenous", title:"Indigenous, American Indian or Alaska Native"},
  { id: "east-asian", title:"East Asian"},
  { id: "southeast-asian", title:"Southeast Asian"},
  { id: "south-asian", title:"South Asian"},
  { id: "self-describe-e", title: "I prefer to self-describe"},
  { id: "dont-wish-e", title: "I don't wish to answer"},
]

const orientations = [
  { id: "straight", title:"Heterosexual"},
  { id: "bi", title:"Bisexual and/or Pansexual"},
  { id: "gay", title:"Gay"},
  { id: "lesbian", title:"Lesbian"},
  { id: "queer", title:"Queer"},
  { id: "asexual", title:"Asexual"},  
  { id: "self-describe-o", title: "I prefer to self-describe"},
  { id: "dont-wish-o", title: "I don't wish to answer"},
]

const disabilities = [
  { id: "yes-d", title:"Yes"},
  { id: "no-d", title:"No"},
  { id: "self-describe-d", title: "I prefer to self-describe"},
  { id: "dont-wish-d", title: "I don't wish to answer"},
]

const veteran = [
  { id: "yes-v", title:"Yes, I am a veteran or active member"},
  { id: "no-v", title:"No, I am not a veteran or active member"},
  { id: "self-describe-v", title: "I prefer to self-describe"},
  { id: "dont-wish-v", title: "I don't wish to answer"},
]

const socials = [
  { id: "linkedin", link:"linkedin.com/in/", placeholder: "handle"},
  { id: "github", link:"github.com/", placeholder: "user"},
  { id: "x", link: "x.com", placeholder: "handle"},
  { id: "portfolio", link: "https://", placeholder: "portfolio.com"},
  { id: "instagram", link: "instagram.com/", placeholder: "handle"},
  { id: "tiktok", link: "tiktok.com/@", placeholder: "handle"},

]


export default function FormCards({appliedFor, appliedForId}: {appliedFor: string, appliedForId: string}) {

  const client = createClientComponentClient({
    supabaseUrl: process.env.supabaseUrl,
    supabaseKey: process.env.SUPABASE_KEY
  })

  const fileInput = useRef<HTMLInputElement>(null)

  const [firstName,setFName] = useState('')
  const [lastName,setLName] = useState('')
  const [email,setEmail] = useState('')
  const [phoneNumber,setPhoneNumber] = useState('')
  const [state,setState] = useState('')
  const [file,setFile] = useState<any>()

  const [aboutMeText,setAboutMe] = useState('')
  const [ethnics,setEtnics] = useState<string[]>([])
  const [genderIds,setGenderIds] = useState<string[]>([])
  const [orientationList,setOrientations] = useState<string[]>([])

  const [hasDisability,setHasDisability] = useState<boolean | null>(null)
  const [isVeteran,setIsVeteran] = useState<boolean | null>(null)
  const [source,setSource] = useState<string>('')

  async function sendAndSave(e: FormEvent){
    e.preventDefault()

    const applicationSchema = z.object({
      first_name: z.string().min(3),
      middle_name: z.string().optional(),
      last_name: z.string(),
      email: z.string(),
      number: z.string().min(10),
      gender: z.string(),
      applied_job_id: z.string()
    })
  
    const newAppForm = {
      first_name: firstName,
      middle_name: '',
      last_name: lastName,
      email: email,
      number: phoneNumber,
      gender: genderIds.join(','),
      applied_job_id: appliedForId

    }

    // if user form is valid, add to db
    if(applicationSchema.safeParse(newAppForm)){
      await client.from('applications').insert(newAppForm)
      
      // upload resume doc url
      const data = await client.storage.from('resumes').upload(`resume_${file.name}`,file)
      const resumeUrl = await client.storage.from('resumes').createSignedUrl(`resume_${file.name}`,100,{download: true})

      // upload file to resume_docs table
      await client.from('resume_docs').insert({
        author_id: user?.id,
        doc_url: resumeUrl.data?.signedUrl
      })


      // send email Notification after application is submitted
      const res = await fetch('/api/send',{
        method: 'POST',
        body: JSON.stringify({email, firstName, lastName, appliedFor})
      })
      console.log('Sent Email Notification',res.status)


    } else {
      // let the user know it was invalid 
      window.alert('Error: Please make sure all fields are filled in correctly.')
    }
  }

  // socials here
  const [selectedSocials,setSocials] = useState({
    linkedin: '',
    github: '',
    x: '',
    portfolio: '',
    instagram: '',
    tiktok: ''
  })


  const [user,setUser] = useState<User | null>();
  // useEffect(() => {
  //   client.auth.getUser().then(res => setUser(res.data.user))
  // })
  // helper functions
  function handleFile(){

    if(fileInput.current?.files){
      
      const file = fileInput.current.files[0]

      setFile(file)
       

        
    
    }
  }
  const updateEthnics = (checked: boolean, ethnic: string) => {
    if(checked){
      setEtnics(prev => [...prev,ethnic])
    } else {
      setEtnics(prev => prev.filter(e => e != ethnic))
    }
  }

  const updateGenderIds = (checked: boolean, gender: string) => {
    if(checked){
      setGenderIds(prev => [...prev,gender])
    } else {
      setGenderIds(prev => prev.filter(e => e != gender))
    }
  }
  
  const updateOrientations = (checked: boolean, orientation: string) => {
    if(checked){
      setOrientations(prev => [...prev,orientation])
    } else {
      setOrientations(prev => prev.filter(e => e != orientation))
    }
  }

  const updateHasDisability = (chosen: string) => {
    if(chosen != 'Yes' && chosen != 'No') {
      setHasDisability(null); 
      return;
    }

    setHasDisability(chosen == 'Yes');
  }
  const updateIsVeteran = (chosen: string) => {
    if(chosen != 'yes-v' && chosen != 'no-v') {
      setIsVeteran(null); 
      return;
    }

    setIsVeteran(chosen == 'yes-v');
  }
  


  useEffect(() => {
    let userForm = {
      firstName,lastName,email,phoneNumber,selectedSocials,state,aboutMeText,ethnics,genderIds,orientationList,hasDisability,isVeteran,source
    }

    console.dir(userForm)
  },[firstName,lastName,email,phoneNumber,selectedSocials,state,aboutMeText,ethnics,genderIds,orientationList,hasDisability,isVeteran,source])
  
  return(
    <>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl py-5">
          <div className="divide-y ring-1 ring-gray-300 divide-gray-200 overflow-hidden rounded-lg bg-zinc-[50] shadow">
            <div className="px-4 py-5 sm:px-6">
              <h1 className="font-semibold text-3xl">Apply Now</h1>
              <h3 className="font-normal">Tell us why you are a good fit for Churchill.</h3>
            </div>
            <div className="px-4 py-5 sm:p-6">
              <form onSubmit={sendAndSave}>
                <div className="space-y-12">
                  <div className="border-b border-gray-900/10 pb-12">
                    
                  <div className="border-b border-gray-900/10 pb-12">
                    <h2 className="text-xl font-semibold leading-7 text-gray-900">Personal Information</h2>
                    <p className="mt-1 text-base leading-6 text-gray-600">Some of the required information.</p>

                    <div className="mt-10 grid grid-rows-5 grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 sm:grid-rows-1">
                      <div className="row-start-1 sm:row-start-auto col-span-4 sm:col-span-3 ">
                        <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                          First name
                        </label>
                        <div className="mt-2">
                          <input
                            required
                            onChange={(e) => setFName(e.target.value)}
                            type="text"
                            name="first-name"
                            id="first-name"
                            autoComplete="given-name"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>

                      <div className="row-start-2 sm:row-start-auto col-span-4 sm:col-span-3">
                        <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                          Last name
                        </label>
                        <div className="mt-2">
                          <input
                          required
                          onChange={(e) => setLName(e.target.value)}
                            type="text"
                            name="last-name"
                            id="last-name"
                            autoComplete="family-name"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>

                      <div className="row-start-3 sm:row-start-auto col-span-4 sm:col-span-3">
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                          Email address
                        </label>
                        <div className="mt-2">
                          <input
                          required
                            onChange={(e) => setEmail(e.target.value)}
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>
                      <div className="row-start-4 sm:row-start-auto sm:col-span-3 col-span-4">
                        <label htmlFor="phone-number" className="block text-sm font-medium leading-6 text-gray-900">
                          Phone Number
                        </label>
                        <div className="relative mt-2 rounded-md shadow-sm">
                          <div className="absolute inset-y-0 left-0 flex items-center">
                            <label htmlFor="country" className="sr-only">
                              Country
                            </label>
                            <select
                              required
                              id="country"
                              name="country"
                              autoComplete="country"
                              className="h-full rounded-md border-0 bg-transparent py-0 pl-3 pr-7 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm"
                            >
                              <option>US</option>
                            </select>
                          </div>
                          <input
                          required
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            type="text"
                            name="phone-number"
                            id="phone-number"
                            className="block w-full rounded-md border-0 py-1.5 pl-16 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                            placeholder="+1 (443) 456-0987"
                          />
                        </div>
                      </div>

                      <div className="row-start-5 col-span-4 sm:row-start-auto sm:col-span-3">
                        <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                          State (Open to a select number of states)
                        </label>
                        <div className="mt-2">
                          <select
                            onChange={(e) => setState(e.target.value)}
                            id="state"
                            name="state"
                            autoComplete="state-name"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:max-w-xs sm:text-sm sm:leading-6"
                          >
                            <option>California</option>
                            <option>Delaware</option>
                            <option>Florida</option>
                            <option>Georgia</option>
                            <option>Hawaii</option>
                            <option>Maryland</option>
                            <option>New Jersey</option>
                            <option>New York</option>
                            <option>Pennsylvania</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                      <div className="sm:col-span-4">
                        <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                          Voluntary, include links to your socials.
                        </label>
                        <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3">
                          {socials.map((social) => (
                            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-sky-600 sm:max-w-md" key={social.id}>
                              <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm ">{social.link}</span>
                              <input
                                onChange={(e) => setSocials(prev => {

                                  let newS = {[social.id]: e.target.value}

                                  return {...prev,...newS}

                                })}
                                type="text"
                                name={social.id}
                                id={social.id}
                                autoComplete="username"
                                className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                placeholder={social.placeholder}
                              />
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="col-span-full">
                        <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                          Getting to know you
                        </label>
                        <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about yourself.</p>
                        <div className="mt-2">
                          <textarea
                            onChange={(e) => setAboutMe(e.target.value)}
                            id="about"
                            name="about"
                            rows={3}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                            defaultValue={''}
                            placeholder="Type here!"
                          />
                        </div>
                      </div>

                      <div className="col-span-full">
                        <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
                          Resume Upload
                        </label>
                        <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                          <div className="text-center">
                            <DocumentArrowUpIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                            <div className="mt-4 flex text-sm leading-6 text-gray-600">
                              <label
                                htmlFor="file-upload"
                                className="relative cursor-pointer rounded-md bg-white font-semibold text-sky-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-sky-600 focus-within:ring-offset-2 hover:text-sky-500"
                              >
                                <span>Upload a Resume</span>
                                <input required onChange={() => handleFile()} ref={fileInput} id="file-upload" name="file-upload" type="file" accept=".doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,.pdf" className="sr-only" />
                              </label>
                              <p className="pl-1">or drag and drop</p>
                            </div>
                            <p className="text-xs leading-5 text-gray-600">PDF or Word Docs up to 350KB</p>
                          </div>
                        </div>
                     </div>
                    </div>
                  </div>
                  <div className="border-b border-gray-900/10 pb-12">
                    <h2 className="text-xl font-semibold leading-7 text-gray-900">Voluntary Self-Identification</h2>
                    <p className="mt-1 text-base leading-6 text-gray-600">
                      This information is just used in our employee reports. We are a equal opportunity employer, it will not be considered in the hiring process or thereafter.
                    </p>
                
                    <div className="mt-6 space-y-10">

                      {/* Ethnicities or Race */}
                      <fieldset>
                        <legend className="text-md font-semibold leading-6 text-gray-900">How would you describe your racial/ethnic background? (Mark all that apply)</legend>
                        <div className="mt-6 space-y-6">
                          {/* basically the mapping function maps the data structure (Array) and loops through each of the items */}
                          {ethnicities.map((ethnicity) => (
                            <div className="relative flex gap-x-3" key={ethnicity.id}>{/* the singular of each is equal to 1 item within the list */}
                              <div className="flex h-6 items-center">
                                <input 
                                  onChange={(e) => updateEthnics(e.target.checked,ethnicity.id)}
                                  id={ethnicity.id}
                                  name={ethnicity.title}
                                  type="checkbox"
                                  className="h-4 w-4 rounded border-gray-300 text-sky-500 focus:ring-sky-600"
                                />
                              </div>
                              <div className="text-sm leading-6">
                                <label htmlFor="comments" className="font-medium text-gray-900">
                                  {ethnicity.title}
                                </label>
                              </div>
                            </div>
                          ))}
                        </div>
                      </fieldset>

                      {/* Gender Identity */}
                      <fieldset>
                        <legend className="text-md font-semibold leading-6 text-gray-900">How would you describe your gender identity? (Mark all that apply)</legend>
                        <div className="mt-6 space-y-6">
                          {/* basically the mapping function maps the data structure (Array) and loops through each of the items */}
                          {genderIdentities.map((identity) => (
                            <div className="relative flex gap-x-3" key={identity.id}>{/* the singular of each is equal to 1 item within the list */}
                              <div className="flex h-6 items-center">
                                <input
                                  onChange={(e) => updateGenderIds(e.target.checked,identity.id)}
                                  id={identity.id}
                                  name="gender-identity"
                                  type="checkbox"
                                  className="h-4 w-4 rounded border-gray-300 text-sky-500 focus:ring-sky-600"
                                />
                              </div>
                              <div className="text-sm leading-6">
                                <label htmlFor="comments" className="font-medium text-gray-900">
                                  {identity.title}
                                </label>
                              </div>
                            </div>
                          ))}
                        </div>
                      </fieldset>
                      
                      {/* Sexual Orientation */}
                      <fieldset>
                        <legend className="text-md font-semibold leading-6 text-gray-900">How would you describe your sexual orientation? (Mark all that apply)</legend>
                        <div className="mt-6 space-y-6">
                          {/* basically the mapping function maps the data structure (Array) and loops through each of the items */}
                          {orientations.map((orientation) => (
                            <div className="relative flex gap-x-3" key={orientation.id}>{/* the singular of each is equal to 1 item within the list */}
                              <div className="flex h-6 items-center">
                                <input
                                onChange={(e) => updateOrientations(e.target.checked, orientation.id)}
                                  id={orientation.id}
                                  name="orientation"
                                  type="checkbox"
                                  className="h-4 w-4 rounded border-gray-300 text-sky-500 focus:ring-sky-600"
                                />
                              </div>
                              <div className="text-sm leading-6">
                                <label htmlFor="comments" className="font-medium text-gray-900">
                                  {orientation.title}
                                </label>
                              </div>
                            </div>
                          ))}
                        </div>
                      </fieldset>
         
                      {/* Disabilities */}
                      <fieldset>
                        <legend className="text-md font-semibold leading-6 text-gray-900">Do you have a disability or chronic condition (physical, visual, auditory, cognitive, mental, emotional, or other) that substantially limits one or more of your major life activities, including mobility, communication (seeing, hearing, speaking), and learning?</legend>
                        <div className="mt-6 space-y-6">
                          {/* basically the mapping function maps the data structure (Array) and loops through each of the items */}
                          {disabilities.map((disability) => (
                            <div className="flex items-center gap-x-3" key={disability.id}>{/* the singular of each is equal to 1 item within the list */}
                              <input
                                onClick={(e) => updateHasDisability(disability.title)}
                                id={disability.id}
                                name='disability'
                                type="radio"
                                className="h-4 w-4 border-gray-300 text-sky-500 focus:ring-sky-600"
                              />
                              <label htmlFor={disability.id} className="block text-sm font-medium leading-6 text-gray-900">
                                {disability.title}
                              </label>
                            </div>
                          ))}
                        </div>
                      </fieldset>

                      {/* Veteran Status */}
                      <fieldset>
                        <legend className="text-md font-semibold leading-6 text-gray-900">Are you a veteran or active member of the United States Armed Forces?</legend>
                        <div className="mt-6 space-y-6">
                          {/* basically the mapping function maps the data structure (Array) and loops through each of the items */}
                          {veteran.map((status) => (
                            <div className="flex items-center gap-x-3" key={status.id}>{/* the singular of each is equal to 1 item within the list */}
                              <input
                                id={status.id}
                                onClick={(e) => updateIsVeteran(status.id)}
                                name="veterans-status"
                                type="radio"
                                className="h-4 w-4 border-gray-300 text-sky-500 focus:ring-sky-600"
                              />
                              <label htmlFor={status.id} className="block text-sm font-medium leading-6 text-gray-900">
                                {status.title}
                              </label>
                            </div>
                          ))}
                        </div>
                      </fieldset>

                     {/* Where did you hear about us? */}
                      <fieldset>
                        <legend className="text-md font-semibold leading-6 text-gray-900">Where did you hear about us?</legend>
                        <div className="mt-6 space-y-6">
                          {/* basically the mapping function maps the data structure (Array) and loops through each of the items */}
                          {places.map((place) => (
                            <div className="flex items-center gap-x-3" key={place.id}>{/* the singular of each is equal to 1 item within the list */}
                              <input
                                onClick={() => setSource(place.title)}
                                id={place.id}
                                name="where-did-you-hear-about-us"
                                type="radio"
                                className="h-4 w-4 border-gray-300 text-sky-500 focus:ring-sky-600"
                              />
                              <label htmlFor={place.id} className="block text-sm font-medium leading-6 text-gray-900">
                                {place.title}
                              </label>
                            </div>
                          ))}
                        </div>
                      </fieldset>
                    </div>
                  </div>
                </div>
                <div className="mt-6 flex items-center justify-end gap-x-6">
                  <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="rounded-md bg-sky-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
                  >
                    Submit
                  </button>
                </div>
              </form>
            
            </div>
          </div>
        </div>
      </div>
    </>
  )
}