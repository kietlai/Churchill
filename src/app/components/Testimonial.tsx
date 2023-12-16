import Header from "./Header"
export default function TT() {
  return (
    <>
      <Header section="Testimonials" headline="A Customer Story" desc="" />
      <section className="isolate overflow-hidden bg-white px-6 lg:px-8 -z-40">
        <div className="relative mx-auto max-w-2xl py-24 sm:py-32 lg:max-w-4xl -z-30">
          <div className="absolute left-1/2 top-0 -z-20 h-[50rem] w-[90rem] -translate-x-1/2 bg-[radial-gradient(50%_100%_at_top,theme(colors.sky.100),white)] opacity-20 lg:left-36" />
          <div className="absolute inset-y-0 right-1/2 -z-20 mr-12 w-[150vw] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-sky-600/10 ring-1 ring-sky-50 sm:mr-20 md:mr-0 lg:right-full lg:-mr-36 lg:origin-center" />
          <figure className="grid grid-cols-1 items-center gap-x-6 gap-y-8 lg:gap-x-10 -z-10">
            <div className="relative col-span-2 lg:col-start-1 lg:row-start-2">
              <blockquote className="text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
                <p>
                  “This product during alpha testing has allowed us to more effectively work together. This product has also made our PTO management easier. Overall this tool is a great organizational help.”
                </p>
              </blockquote>
            </div>
            <div className="col-end-1 w-16 lg:row-span-4 lg:w-80">
              <img
                className="rounded-xl bg-sky-50 lg:rounded-3xl"
                src="/People/DrHungQuoc.png"
                alt=""
              />
            </div>
            <figcaption className="text-base lg:col-start-1 lg:row-start-3">
              <div className="font-semibold text-gray-900 text-">Dr. Hung-Quoc &#40;Quoc&#41; Lai</div>
              <div className="mt-1 text-gray-500">Chief Engineering Officer of Origin Wireless</div>
            </figcaption>
          </figure>
        </div>
      </section>
    </>
  )
}
