import Image from "next/image"


export default function Private2() {
  return(
    <>
      <div className="isolate overflow-hidden pt-48 md:pt-20">
        
        {/* add back in a relative infront off the isolate */}
        <Image
          src="/whiteWaveBG.png"
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover"
          width={7500}
          height={4000}
        />
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 h-full place-self-center">
          <div className="mb-8 flex justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-700 ring-1 ring-black/10 hover:ring-black/20">
              About this Project.{' '}
              <a href="/fbla" className="font-semibold text-gray-600">
                <span className="absolute inset-0" aria-hidden="true" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-700 sm:text-6xl">
              Woahhhh we&apos;re still working on that!
            </h1>
            <p className="mt-6 text-2xl leading-8 text-gray-600">
              This project is still under active development, be patient with us.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
          
              <a href="#" className="text-sm font-semibold leading-6 text-gray-700">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}