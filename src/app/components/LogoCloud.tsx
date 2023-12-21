export default function LogoClouds() {
  return (
    <>
      <div className="bg-white py-24 sm:py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h1 className="text-center text-3xl font-semibold leading-8 text-gray-900">
            Trusted by the world’s most <span className="font-black">innovative</span> teams
          </h1>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <img
              className="col-span-2 max-h-20 w-full object-contain lg:col-span-1"
              src="/logos/fakes/final/2.svg"
              alt="Techno"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-20 w-full object-contain lg:col-span-1"
              src="/logos/fakes/final/3.svg"
              alt="Reform"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-14 w-full object-contain lg:col-span-1"
              src="https://www.originwirelessai.com/wp-content/themes/origin-theme/img/logo-origin.svg"
              alt="Origin Wireless"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-20 w-full object-contain sm:col-start-2 lg:col-span-1"
              src="/logos/fakes/final/5.svg"
              alt="SavvyCal"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 col-start-2 max-h-20 w-full object-contain sm:col-start-auto lg:col-span-1"
              src="/logos/fakes/final/6.svg"
              alt="Statamic"
              width={158}
              height={48}
            />
          </div>
        </div>
      </div>
    </>
  )
}