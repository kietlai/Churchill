import Header from "./Headers"
import Image from "next/image"

export default function Testimonial() {
  return (
    <>
      <Header section="" headline="What are our customers thoughts?" desc="" />
      <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8 -z-30">
      {/* The follow 2 lines below are for the slash through the middle of the testmonial */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
        <div className="absolute inset-y-0 right-1/2 -z-20 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
        <div className="mx-auto max-w-2xl lg:max-w-4xl -z-10">
          <Image 
            className="mx-auto h-12" 
            src="https://www.originwirelessai.com/wp-content/themes/origin-theme/img/logo-origin.svg" 
            alt="Origin Wireless"
            width={100}
            height={100}
            />
          <figure className="mt-10">
            <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
              <p>
              “This product during alpha testing has allowed us to more effectively work together. This product has also made our PTO management easier. Overall this tool is a great organizational help.”
              </p>
            </blockquote>
            <figcaption className="mt-10">
              <Image
                className="mx-auto h-20 w-20 rounded-full"
                src="/People/DrHungQuoc.png"
                alt="Picture of Dr Hung Quoc, CEO of Origin Wireless"
                width={50}
                height={50}
              />
              <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                <div className="font-semibold text-gray-900">Dr. Hung-Quoc &#40;Quoc&#41; Lai</div>
                <svg viewBox="0 0 2 2" width={3} height={3} aria-hidden="true" className="fill-gray-900">
                  <circle cx={1} cy={1} r={1} />
                </svg>
                <div className="text-gray-600">Chief Engineering Officer of Origin Wireless</div>
              </div>
            </figcaption>
          </figure>
        </div>
      </section>
    </>
  )
}
