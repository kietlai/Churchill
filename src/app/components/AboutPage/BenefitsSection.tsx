import { 
  AcademicCapIcon,
  PlusIcon,
  BanknotesIcon,
  ClockIcon,
  FaceSmileIcon,
  GlobeAmericasIcon


  
} from "@heroicons/react/24/outline"



const benefits = [
  {
    name: "Learning Opportunity",
    desc: "We grant a select number of employees a full scholarship to further their education.",
    icon: AcademicCapIcon
  },
  {
    name: "Balanced Work Life",
    desc: "We offer a 3 weeks of vacation time (PTO) a year to help you recharge and perform your best.",
    icon: FaceSmileIcon
  },
  {
    name: "Extensive Health Package",
    desc: "We care about your well-being, we offer medical, dental, and vision insurance for you and your family.",
    icon: PlusIcon
  },
  {
    name: "Perks Program",
    desc: "We offer stipends for home office items, wellness and more.",
    icon: BanknotesIcon
  },
  {
    name: "Flexible Work Hours",
    desc: "You can work remotely from anywhere at anytime. We work asynchronously in teams. You know what you need to do.",
    icon: ClockIcon
  },
  {
    name: "Remote Working Environment",
    desc: "You can work from anywhere on earth. You never need to walk into an office while working here.",
    icon: GlobeAmericasIcon
  },
]


export default function BenefitsSection() {
  return (
    <>    
      <div className="mx-auto max-w-7xl px-6 sm:mt-40 lg:px-8 relative isolate -z-10">
      <svg
          className="absolute inset-x-0 top-0 -z-20 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M.5 200V.5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect width="100%" height="100%" strokeWidth={0} fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)" />
        </svg>
        <div
          className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
          aria-hidden="true"
        >
          <div
            className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-sky-500 to-sky-200 opacity-30"
            style={{
              clipPath:
                'polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)',
            }}
          />
        </div>
        <div className="mx-auto flex max-w-2xl flex-col justify-between lg:max-w-none">
          <div className="text-left lg:text-center">
            <p className="text-xl font-semibold text-sky-500">Our Benefits</p>
            <h2 className="text-3xl font-bold sm:text-4xl">Work Happier With Us</h2>
            <div className="grid grid-col-1 md:grid-col-2"> </div> 
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl text-left">
              <dl className="grid max-w-xl grid-cols-1 gap-x-16 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                {benefits.map((benefit) => (
                  <div key={benefit.name} className="relative pl-16">
                    <dt className="text-base font-semibold leading-7 text-gray-900">
                      <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-sky-600">
                        <benefit.icon className="h-8 w-8 text-white" aria-hidden="true" />
                      </div>
                      {benefit.name}
                    </dt>
                    <dd className="mt-2 text-base leading-7 text-gray-600">{benefit.desc}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}