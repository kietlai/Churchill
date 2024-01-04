'use client'
import { PhotoIcon, UserCircleIcon, DocumentArrowUpIcon } from '@heroicons/react/24/solid'
import { Reducer, use, useReducer, useState } from 'react'

//Where you learned about us at
const places = [
  { id: "email", title: "Email" },
  { id: "instagram", title: "Instagram" },
  { id: "network", title: "Your Network" },
  { id: "other", title: "Other" },
]

const genderIdentities = [
  { id: "male", title: "Man"},
  { id: "female", title: "Woman"},
  { id: "non-binary", title: "Non-binary"},
  { id: "self-describe", title: "I prefer to self-describe"},
  { id: "no", title: "I don't wish to answer"},
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
  { id: "self-describe", title: "I prefer to self-describe"},
  { id: "no", title: "I don't wish to answer"},
]

const orientations = [
  { id: "straight", title:"Heterosexual"},
  { id: "bi", title:"Bisexual and/or Pansexual"},
  { id: "gay", title:"Gay"},
  { id: "lesbian", title:"Lesbian"},
  { id: "queer", title:"Queer"},
  { id: "asexual", title:"Asexual"},  
  { id: "self-describe", title: "I prefer to self-describe"},
  { id: "no", title: "I don't wish to answer"},
]

const disabilities = [
  { id: "yes", title:"Yes"},
  { id: "no", title:"No"},
  { id: "self-describe", title: "I prefer to self-describe"},
  { id: "no", title: "I don't wish to answer"},
]

const veteran = [
  { id: "yes", title:"Yes, I am a veteran or active member"},
  { id: "no", title:"No, I am not a veteran or active member"},
  { id: "self-describe", title: "I prefer to self-describe"},
  { id: "no", title: "I don't wish to answer"},
]

const socials = [
  { id: "linkedin", link:"linkedin.com/in/", placeholder: "handle"},
  { id: "github", link:"github.com/", placeholder: "user"},
  { id: "x", link: "x.com", placeholder: "handle"},
  { id: "portfolio", link: "https://", placeholder: "portfolio.com"},
  { id: "instagram", link: "instagram.com/", placeholder: "handle"},
  { id: "tiktok", link: "tiktok.com/@", placeholder: "handle"},

]


export default function FormCards() {

  const [firstName,setFName] = useState('')
  const [lastName,setLName] = useState('')
  const [email,setEmail] = useState('')
  const [phoneNumber,setPhoneNumber] = useState('')
  const [address,setAddress] = useState('')
  const [city,setCity] = useState('')
  const [country,setCountry] = useState('')
  const [state,setState] = useState('')
  const [zipCode,setCode] = useState<number>(0)

  // socials here

  //

  type reduceState = {checked: boolean, ethnic: string}
  const [aboutMeText,setAboutMe] = useState('')
  const [ethicBg,updateEthnics] = useReducer<Reducer<() => void, () => void>>(() => {

  },[])
  
  
  return(
    <>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl py-5">
          <div className="divide-y ring-1 ring-gray-300 divide-gray-200 overflow-hidden rounded-lg bg-zinc-[50] shadow">
            <div className="px-4 py-5 sm:px-6">
              <h1 className="font-semibold text-3xl">Apply Now</h1>
              <h3 className="font-normal">Tell us why you are a good fit for Churchill.</h3>
            </div>
            <div className="px-4 py-5 sm:p-6">
              <form>
                <div className="space-y-12">
                  <div className="border-b border-gray-900/10 pb-12">
                    

                  <div className="border-b border-gray-900/10 pb-12">
                    <h2 className="text-xl font-semibold leading-7 text-gray-900">Personal Information</h2>
                    <p className="mt-1 text-base leading-6 text-gray-600">Some of the required information.</p>

                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                      <div className="sm:col-span-3">
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

                      <div className="sm:col-span-3">
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

                      <div className="sm:col-span-4">
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
                      <div className="sm:col-span-2 col-span-4">
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

                      <div className="sm:col-span-3">
                        <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                          Country
                        </label>
                        <div className="mt-2">
                          <select
                            onChange={(e) => setCountry(e.target.value)}
                            id="country"
                            name="country"
                            autoComplete="country-name"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:max-w-xs sm:text-sm sm:leading-6"
                          >
                            <option>United States</option>
                          </select>
                        </div>
                      </div>

                      <div className="col-span-full">
                        <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                          Street address
                        </label>
                        <div className="mt-2">
                          <input
                            type="text"
                            name="street-address"
                            id="street-address"
                            autoComplete="street-address"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>

                      <div className="sm:col-span-2 sm:col-start-1">
                        <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                          City
                        </label>
                        <div className="mt-2">
                          <input
                            type="text"
                            name="city"
                            id="city"
                            autoComplete="address-level2"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>

                      <div className="sm:col-span-2">
                        <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">
                          State
                        </label>
                        <div className="mt-2">
                          <input
                            type="text"
                            name="region"
                            id="region"
                            autoComplete="address-level1"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>

                      <div className="sm:col-span-2">
                        <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">
                          ZIP / Postal code
                        </label>
                        <div className="mt-2">
                          <input
                            type="text"
                            name="postal-code"
                            id="postal-code"
                            autoComplete="postal-code"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                          />
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
                          Cover photo
                        </label>
                        <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                          <div className="text-center">
                            <DocumentArrowUpIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                            <div className="mt-4 flex text-sm leading-6 text-gray-600">
                              <label
                                htmlFor="file-upload"
                                className="relative cursor-pointer rounded-md bg-white font-semibold text-sky-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-sky-600 focus-within:ring-offset-2 hover:text-sky-500"
                              >
                                <span>Upload a file</span>
                                <input id="file-upload" name="file-upload" type="file" accept=".doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,.pdf" className="sr-only" />
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
                                  onChange={(e) => updateEthnics({checked: e.target.checked, ethnic: ethnicity.id})}
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
                                  id={identity.id}
                                  name={identity.title}
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
                                  id={orientation.id}
                                  name={orientation.title}
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
                                id={disability.id}
                                name={disability.title}
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
                                name={status.title}
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
                                id={place.id}
                                name={place.title}
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
                    Save
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