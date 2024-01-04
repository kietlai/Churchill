import { CheckCircleIcon, InformationCircleIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import { JSX, SVGProps } from 'react'


const checklist = [
  {
    "title": "Benefits. ",
    "desc": "We included a page with information about benefits/reasons to work at our company."
  },
  {
    "title": "Job Listing. ",
    "desc": "We provided 4 job listings on the actual listing pages and recommend 3 on the about us page."
  },
  {
    "title": "Job Application. ",
    "desc": "We provided Job Application directly on the website."
  },
]


const techs = [
  {
    "tech": "Nextjs",
    "desc": "A",
    icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => {
      <svg width="180" height="180" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="90" cy="90" r="90" fill="black"/>
      <g mask="url(#mask0_408_134)">
      <circle cx="90" cy="90" r="90" fill="black"/>
      <path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z" fill="url(#paint0_linear_408_134)"/>
      <rect x="115" y="54" width="12" height="72" fill="url(#paint1_linear_408_134)"/>
      </g>
      <defs>
      <linearGradient id="paint0_linear_408_134" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse">
      <stop stop-color="white"/>
      <stop offset="1" stop-color="white" stop-opacity="0"/>
      </linearGradient>
      <linearGradient id="paint1_linear_408_134" x1="121" y1="54" x2="120.799" y2="106.875" gradientUnits="userSpaceOnUse">
      <stop stop-color="white"/>
      <stop offset="1" stop-color="white" stop-opacity="0"/>
      </linearGradient>
      </defs>
      </svg>
    }
  },
  {
    "tech": "Vercel",
    "desc": "",
    icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => {
      <svg width="1155" height="1000" viewBox="0 0 1155 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M577.344 0L1154.69 1000H0L577.344 0Z" fill="black"/>
      </svg>      
    }
  },
  {
    "tech": "Turbo Pack",
    "desc": "",
    icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => {
      <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M38.6868 36.6983C37.5559 36.6983 36.6391 37.6151 36.6391 38.7459V61.5202C36.6391 62.651 37.5559 63.5678 38.6868 63.5678H61.461C62.5919 63.5678 63.5086 62.651 63.5086 61.5202V38.7459C63.5086 37.6151 62.5919 36.6983 61.461 36.6983H38.6868ZM22.259 20.4426C21.2232 20.4426 20.3834 21.2823 20.3834 22.3182V77.9479C20.3834 78.9838 21.2232 79.8235 22.259 79.8235H77.8887C78.9246 79.8235 79.7643 78.9838 79.7643 77.9479V22.3182C79.7643 21.2823 78.9246 20.4426 77.8887 20.4426H22.259Z" fill="white"/>
      <path d="M0 51.0638V87.234C0 89.6609 0.677167 91.9295 1.85286 93.8614L14.8936 80.8206V51.0638H0Z" fill="url(#paint0_linear_2758_13848)"/>
      <path d="M5.94644 98.0278L18.8765 85.0978C18.9666 85.1035 19.0574 85.1064 19.1489 85.1064H47.6402V100H12.766C10.2582 100 7.91931 99.2769 5.94644 98.0278Z" fill="url(#paint1_linear_2758_13848)"/>
      <path d="M53.481 100H87.234C94.2845 100 100 94.2845 100 87.234V12.766C100 5.71551 94.2845 0 87.234 0H51.0638V14.8936H80.8511C83.2012 14.8936 85.1064 16.7988 85.1064 19.1489V80.8511C85.1064 83.2012 83.2012 85.1064 80.8511 85.1064H53.481V100Z" fill="url(#paint2_linear_2758_13848)"/>
      <defs>
      <linearGradient id="paint0_linear_2758_13848" x1="54.9167" y1="7.03125" x2="5.69936" y2="55.9148" gradientUnits="userSpaceOnUse">
      <stop stop-color="#0096FF"/>
      <stop offset="1" stop-color="#FF1E56"/>
      </linearGradient>
      <linearGradient id="paint1_linear_2758_13848" x1="54.9167" y1="7.03125" x2="5.69936" y2="55.9148" gradientUnits="userSpaceOnUse">
      <stop stop-color="#0096FF"/>
      <stop offset="1" stop-color="#FF1E56"/>
      </linearGradient>
      <linearGradient id="paint2_linear_2758_13848" x1="54.9167" y1="7.03125" x2="5.69936" y2="55.9148" gradientUnits="userSpaceOnUse">
      <stop stop-color="#0096FF"/>
      <stop offset="1" stop-color="#FF1E56"/>
      </linearGradient>
      </defs>
      </svg>
    }
  },
  {
    "tech": "TailwindCSS",
    "desc": "",
    icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => {
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 54 33"><g clip-path="url(#prefix__clip0)"><path fill="#38bdf8" fill-rule="evenodd" d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z" clip-rule="evenodd"/></g><defs><clipPath id="prefix__clip0"><path fill="#fff" d="M0 0h54v32.4H0z"/></clipPath></defs></svg>
    }
  },
  {
    "tech": "TailwindUI's Components",
    "desc": "",
    icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => {
      
    }
  },  
  {
    "tech": "Headless UI",
    "desc": "",
    icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => {

    }
  },
  {
    "tech": "Stripe (Later Implementation)",
    "desc": "",
    icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => {

    }
  },


]



export default function BlogPost() {
  return (
    <div className="bg-white px-6 py-32 lg:px-8">
      <div className="mx-auto max-w-3xl text-lg leading-7 text-gray-700">
        <p className="text-3xl font-semibold leading-7 text-sky-500">Background Info</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Churchill, a FBLA project.</h1>
        <p className="mt-6 text-xl leading-8">
          Churchill is a project that was designed for the <span className="font-bold">FBLA</span> competition, <span className="font-bold">"Website Coding & Development"</span>. 
        </p>
        <div className="mt-10 max-w-2xl">
          <p>
            This project was started by Kiet, Hero, and Ike. This project was born out of an actual business idea, one that was suggested to us by a family friend. Keeping this in mind, we would transform this idea into a FBLA project.
          </p>
          <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
            {checklist.map((check) => (
              <li className="flex gap-x-3" key={check.title}>
                <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-sky-500" aria-hidden="true" />
                <span>
                  <strong className="font-semibold text-gray-900">{check.title}</strong>{check.desc}
                </span>
              </li>
            ))}
        
          </ul>
          <h2 className="mt-16 text-4xl font-bold tracking-tight text-gray-900">A great deal of technologies</h2>
          <p className="mt-6">
            This application to our team was a completely new learning experience. Many new technologies where used. The 
          </p>
          <figure className="mt-10 border-l border-sky-300 pl-9">
            <blockquote className="font-semibold text-gray-900">
              <p>
                “Working on this project has been a joy. So many different new technologies were used in the creation of this app, from SupaBase for our data storage to TailwindCSS for the styling.”
              </p>
            </blockquote>
            <figcaption className="mt-6 flex gap-x-4">
              <img
                className="h-6 w-6 flex-none rounded-full bg-gray-50"
                src="/logos/Small Favicon Black.svg"
                alt=""
              />
              <div className="text-sm leading-6">
                <strong className="font-semibold text-gray-900">Quoc-Kiet Lai</strong> –– Co-Founder of Churchill
              </div>
            </figcaption>
          </figure>
          <p className="mt-10">
            Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae
            sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit.
          </p>
        </div>
        <figure className="mt-16">
          <Image
            className="aspect-video rounded-xl bg-gray-50 object-cover"
            src="/final mobile.jpg"
            alt=""
            width={1300}
            height={3000}
          />
          <figcaption className="mt-4 flex gap-x-2 text-sm leading-6 text-gray-500">
            <InformationCircleIcon className="mt-0.5 h-5 w-5 flex-none text-gray-300" aria-hidden="true" />
            Faucibus commodo massa rhoncus, volutpat.
          </figcaption>
        </figure>
        <div className="mt-16 max-w-2xl">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Everything you need to get up and running</h2>
          <p className="mt-6">
            Purus morbi dignissim senectus mattis adipiscing. Amet, massa quam varius orci dapibus volutpat cras. In
            amet eu ridiculus leo sodales cursus tristique. Tincidunt sed tempus ut viverra ridiculus non molestie.
            Gravida quis fringilla amet eget dui tempor dignissim. Facilisis auctor venenatis varius nunc, congue erat
            ac. Cras fermentum convallis quam.
          </p>
          <p className="mt-8">
            Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae
            sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit.
          </p>
        </div>
      </div>
    </div>
  )
}
