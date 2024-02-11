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
    "name": "Next.js",
    "desc": "A Full Stack React framework for Web Apps. It was selected because of its ease of use and ability to work front and backend. This is how the website is a website with features and interactivity",
    "link": "https://nextjs.org/",
    icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
    <svg
      width={180}
      height={180}
      viewBox="0 0 180 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx={90} cy={90} r={90} fill="black" />
      <g mask="url(#mask0_408_134)">
        <circle cx={90} cy={90} r={90} fill="black" />
        <path
          d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z"
          fill="url(#paint0_linear_408_134)"
        />
        <rect
          x={115}
          y={54}
          width={12}
          height={72}
          fill="url(#paint1_linear_408_134)"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_408_134"
          x1={109}
          y1={116.5}
          x2={144.5}
          y2={160.5}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset={1} stopColor="white" stopOpacity={0} />
        </linearGradient>
        <linearGradient
          id="paint1_linear_408_134"
          x1={121}
          y1={54}
          x2={120.799}
          y2={106.875}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset={1} stopColor="white" stopOpacity={0} />
        </linearGradient>
      </defs>
    </svg>
    )
  },
  {
    "name": "Vercel",
    "desc": "Vercel was used to host this website and its email. Without hosting this website wouldn't be up for the public to see. Without hosting the email we would never be able to contact or be contacted by you.",
    "link": "https://vercel.com/home",
    icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
      <svg
        width={1155}
        height={1000}
        viewBox="0 0 1155 1000"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path d="M577.344 0L1154.69 1000H0L577.344 0Z" fill="black" />
      </svg>
    )
  },
  {
    "name": "Turbopack",
    "desc": "Turbopack is one of the fastest module bundlers out there. It allows for this webpage to be sent to your device and rendered into a website. Turbopack happens to be the fastest at this.",
    "link": "https://turbo.build/pack",
    icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
    <svg
      width={100}
      height={100}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M38.6868 36.6983C37.5559 36.6983 36.6391 37.6151 36.6391 38.7459V61.5202C36.6391 62.651 37.5559 63.5678 38.6868 63.5678H61.461C62.5919 63.5678 63.5086 62.651 63.5086 61.5202V38.7459C63.5086 37.6151 62.5919 36.6983 61.461 36.6983H38.6868ZM22.259 20.4426C21.2232 20.4426 20.3834 21.2823 20.3834 22.3182V77.9479C20.3834 78.9838 21.2232 79.8235 22.259 79.8235H77.8887C78.9246 79.8235 79.7643 78.9838 79.7643 77.9479V22.3182C79.7643 21.2823 78.9246 20.4426 77.8887 20.4426H22.259Z"
        fill="black"
      />
      <path
        d="M0 51.0638V87.234C0 89.6609 0.677167 91.9295 1.85286 93.8614L14.8936 80.8206V51.0638H0Z"
        fill="url(#paint0_linear_2758_13850)"
      />
      <path
        d="M5.94644 98.0278L18.8765 85.0978C18.9666 85.1035 19.0574 85.1064 19.1489 85.1064H47.6402V100H12.766C10.2582 100 7.91931 99.2769 5.94644 98.0278Z"
        fill="url(#paint1_linear_2758_13850)"
      />
      <path
        d="M53.481 100H87.234C94.2845 100 100 94.2845 100 87.234V12.766C100 5.71551 94.2845 0 87.234 0H51.0638V14.8936H80.8511C83.2012 14.8936 85.1064 16.7988 85.1064 19.1489V80.8511C85.1064 83.2012 83.2012 85.1064 80.8511 85.1064H53.481V100Z"
        fill="url(#paint2_linear_2758_13850)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_2758_13850"
          x1={54.9167}
          y1={7.03125}
          x2={5.69936}
          y2={55.9148}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0096FF" />
          <stop offset={1} stopColor="#FF1E56" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_2758_13850"
          x1={54.9167}
          y1={7.03125}
          x2={5.69936}
          y2={55.9148}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0096FF" />
          <stop offset={1} stopColor="#FF1E56" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_2758_13850"
          x1={54.9167}
          y1={7.03125}
          x2={5.69936}
          y2={55.9148}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0096FF" />
          <stop offset={1} stopColor="#FF1E56" />
        </linearGradient>
      </defs>
    </svg>
    )
  },
  {
    "name": "TailwindCSS",
    "desc": "TailwindCSS made this the UI. We used it to easily and quickly style the whole page. Without this it would've look like a webpage from the 2000s. With Tailwind it looks modern and sleek.",
    "link": "https://tailwindcss.com/",
    icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 54 33"
      {...props}
    >
      <g clipPath="url(#prefix__clip0)">
        <path
          fill="#000000"
          fillRule="evenodd"
          d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z"
          clipRule="evenodd"
        />
      </g>
      <defs>
        <clipPath id="prefix__clip0">
          <path fill="#fff" d="M0 0h54v32.4H0z" />
        </clipPath>
      </defs>
    </svg>
    )
  },

  {
    "name": "Resend",
    "desc": "We use Resend to send you emails about your application and its acceptance. It also sends out emails to us to notify us about your job application so we can review it.",
    "link": "https://resend.com/home",
    icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
      <svg
      width={600}
      height={600}
      viewBox="0 0 600 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M186 447.471V154H318.062C336.788 154 353.697 158.053 368.79 166.158C384.163 174.263 396.181 185.443 404.845 199.698C413.51 213.672 417.842 229.604 417.842 247.491C417.842 265.938 413.51 282.568 404.845 297.381C396.181 311.915 384.302 323.375 369.209 331.759C354.117 340.144 337.067 344.337 318.062 344.337H253.917V447.471H186ZM348.667 447.471L274.041 314.99L346.99 304.509L430 447.471H348.667ZM253.917 289.835H311.773C319.04 289.835 325.329 288.298 330.639 285.223C336.229 281.869 340.421 277.258 343.216 271.388C346.291 265.519 347.828 258.811 347.828 251.265C347.828 243.718 346.151 237.15 342.797 231.56C339.443 225.691 334.552 221.219 328.124 218.144C321.975 215.07 314.428 213.533 305.484 213.533H253.917V289.835Z"
        fill="black"
      />
    </svg>

    )

  },



]



export default function BlogPost() {
  return (
    <div className="bg-white px-6 py-32 pb-2 lg:px-8">
      <div className="mx-auto max-w-3xl text-lg leading-7 text-gray-700">
        <p className="text-3xl font-semibold leading-7 text-sky-500">Background Info</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Churchill, a FBLA project.</h1>
        <p className="mt-6 text-xl leading-8">
          Churchill is a project that was designed for the <span className="font-bold">FBLA</span> competition, <span className="font-bold">&quot;Website Coding & Development&quot;</span>. 
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
              <Image
                className="h-6 w-6 flex-none rounded-full bg-gray-50"
                src="/logos/Small Favicon Black.svg"
                alt=""
                width={50}
                height={50}
              />
              <div className="text-sm leading-6">
                <strong className="font-semibold text-gray-900">Quoc-Kiet Lai</strong> –– Co-Founder of Churchill
              </div>
            </figcaption>
          </figure>
          <p className="mt-10">
            We will be briefly explaining each piece of tech that was used in this project and how it contributed to our creation of Churchill below.
          </p>
        </div>
        <figure>
          <ul role="list" className="grid mt-16 gap-x-8 gap-y-12 sm:gap-y-16 xl:col-span-2">
            {techs.map((tech) => (
              <div className="flex text-black" key={tech.name}>
                <div className="mr-4 flex-shrink-0 self-center">
                  <a href={tech.link} target="_blank">
                    <tech.icon className="h-16 w-16"/>
                  </a>
                </div>
                <div>
                  <a href={tech.link} target="_blank">
                    <h4 className="text-lg font-bold">{tech.name}</h4>
                    <p className="mt-1 text-gray-600">{tech.desc}</p>
                  </a>
                </div>
              </div>
            ))}
          </ul>
          <figcaption className="mt-4 flex gap-x-2 text-sm leading-6 text-gray-500">
            <InformationCircleIcon className="mt-0.5 h-5 w-5 flex-none text-gray-300" aria-hidden="true" />
            Click on the explanation or on the logo of the companies to learn more!
          </figcaption>
        </figure>

        <figure className="mt-16">
          <Image
            className="aspect-video rounded-xl bg-gray-50 object-cover"
            src="/blogSS.png"
            alt=""
            width={1300}
            height={3000}
          />
          <figcaption className="mt-4 flex gap-x-2 text-sm leading-6 text-gray-500">
            <InformationCircleIcon className="mt-0.5 h-5 w-5 flex-none text-gray-300" aria-hidden="true" />
            App screen shot of home page. 
          </figcaption>
        </figure>
        <div className="mt-16 max-w-2xl text-lg">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900">About this project.</h2>
          <p className="mt-6">
            Churchill was built as a framework for future SaaS apps. This project was our playground to test out new concepts, ideas and implementations of this technology. From this solid framework we plan to expand it into bigger more useful applications, more specifically in the student space.  
          </p>
          <p className="mt-8">
            What might this project be? This project will also involve AI but will have it actually implemented. It is designed to help students do there absolute best in school and perform at the highest level.
          </p>
        </div>
      </div>
    </div>
  )
}
