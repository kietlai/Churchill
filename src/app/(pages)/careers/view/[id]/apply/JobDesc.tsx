import { ClockIcon, CreditCardIcon, UserGroupIcon, GlobeAltIcon, CloudArrowUpIcon, LockClosedIcon, ServerIcon  } from '@heroicons/react/20/solid'



interface Job {
  id: string,
  title: string,
  desc?: string,
  location?: string,
  salary?: string,
  teams: string,
  times: string,
}

const info = {
  bonus: [ 'D', 'E', 'F' ],
  aboutYou: [ 'd', 'e', 'f' ],
  benefits: [ 'A', 'B', 'C' ],
  responsibilities: [ 'a', 'b', 'c' ]
}

export default function Desc({ id, title, desc, location, salary, teams, times }: Job) {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <svg
            className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                width={200}
                height={200}
                x="50%"
                y={-1}
                patternUnits="userSpaceOnUse"
              >
                <path d="M100 200V.5M.5 .5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
              <path
                d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect width="100%" height="100%" strokeWidth={0} fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
          </svg>
        </div>
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:items-start lg:gap-y-10">
            <div className="lg:col-span-3 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
              <div className="lg:pr-4 lg:col-span-2">
                <div className="lg:col-span-2">
                  <p className="text-3xl font-semibold leading-7 text-sky-500">{teams}</p>
                  <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-6xl">{title}</h1>
                  <p className="mt-6 text-xl leading-8 text-gray-700">{desc}</p>
                </div>
              </div>
            </div>
            <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-3 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
            <div className="lg:col-start-3 lg:row-end-1">
              <h2 className="sr-only">Summary</h2>
              <div className="rounded-lg bg-gray-50 shadow-sm ring-1 ring-gray-900/5">
                <dl className="flex flex-wrap">
                  <div className="flex-auto pl-6 pt-6">
                    <dt className="text-sm font-semibold leading-6 text-gray-900">Salary Range</dt>
                    <dd className="mt-1 text-base font-semibold leading-6 text-gray-900">${salary}</dd>
                  </div>
                  <div className="mt-6 flex w-full flex-none gap-x-4 border-t border-gray-900/5 px-6 pt-6">
                    <dt className="flex-none">
                      <span className="sr-only">Team</span>
                      <UserGroupIcon className="h-6 w-5 text-gray-400" aria-hidden="true" />
                    </dt>
                    <dd className="text-sm font-medium leading-6 text-gray-900">{teams}</dd>
                  </div>
                  <div className="mt-4 flex w-full flex-none gap-x-4 px-6">
                    <dt className="flex-none">
                      <span className="sr-only">Due date</span>
                      <GlobeAltIcon className="h-6 w-5 text-gray-400" aria-hidden="true" />
                    </dt>
                    <dd className="text-sm leading-6 font-medium text-gray-500">
                      <time dateTime="2023-01-31">{location}</time>
                    </dd>
                  </div>
                  <div className="mt-4 flex w-full flex-none gap-x-4 px-6">
                    <dt className="flex-none">
                      <span className="sr-only">Job type</span>
                      <ClockIcon className="h-6 w-5 text-gray-400" aria-hidden="true" />
                    </dt>
                    <dd className="text-sm leading-6 text-gray-500">{times}</dd>
                  </div>
                </dl>
                <div className="mt-6 border-t border-gray-900/5 px-6 py-6">
                  <a href="#apply" className="text-sm font-semibold leading-6 text-gray-900">
                    Apply Now <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              </div>
            </div>
            </div>
            <div className="lg:col-span-3 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
              <div className="lg:pr-4 lg:col-span-2">
                <div className="lg:col-span-2 text-base leading-7 text-gray-700 ">
                  <p>
                    Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet
                    vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque
                    erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris
                    semper sed amet vitae sed turpis id.
                  </p>
                  <ul role="list" className="mt-8 space-y-8 text-gray-600">
                    <li className="flex gap-x-3">
                      <CloudArrowUpIcon className="mt-1 h-5 w-5 flex-none text-sky-500" aria-hidden="true" />
                      <span>
                        <strong className="font-semibold text-gray-900">Push to deploy.</strong> Lorem ipsum, dolor sit amet
                        consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate
                        blanditiis ratione.
                      </span>
                    </li>
                    <li className="flex gap-x-3">
                      <LockClosedIcon className="mt-1 h-5 w-5 flex-none text-sky-500" aria-hidden="true" />
                      <span>
                        <strong className="font-semibold text-gray-900">SSL certificates.</strong> Anim aute id magna aliqua
                        ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.
                      </span>
                    </li>
                    <li className="flex gap-x-3">
                      <ServerIcon className="mt-1 h-5 w-5 flex-none text-sky-500" aria-hidden="true" />
                      <span>
                        <strong className="font-semibold text-gray-900">Database backups.</strong> Ac tincidunt sapien
                        vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.
                      </span>
                    </li>
                  </ul>
                  <p className="mt-8">
                    Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie auctor
                    fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices hac
                    adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem vel integer orci.
                  </p>
                  <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">No server? No problem.</h2>
                  <p className="mt-6">
                    Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam consequat in. Convallis arcu ipsum urna nibh.
                    Pharetra, euismod vitae interdum mauris enim, consequat vulputate nibh. Maecenas pellentesque id sed
                    tellus mauris, ultrices mauris. Tincidunt enim cursus ridiculus mi. Pellentesque nam sed nullam sed diam
                    turpis ipsum eu a sed convallis diam.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}