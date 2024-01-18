import Image from "next/image"


export default function EmailBody({
  firstName,
  lastName,
  position,
}: {
  firstName: string,
  lastName: string,
  position: string,
}) {
  return(
    <>
      <div className="isolate lg:overflow-hidden md:pt-3 h-full">
        
        {/* add back in a relative infront off the isolate */}
        
        <div className="mx-auto max-w-2xl pt-12 lg:py-12 h-full place-self-center">
          
          <div className="text-left px-2">
            <h1 className="text-4xl text-center font-bold tracking-tight text-gray-800">
              Thank You {firstName} for Applying at Churchill!
            </h1>
            <p className="mt-6 text-lg lg:text-2xl text-gray-700">
              Thank you for your recent application for the <span>{position}</span>. We are reaching out to tell you that we have recieved your application and appreciate your interest in our company.
            </p>
            <p className="mt-4 text-lg lg:text-2xl leading-8 text-gray-700">
              Our team will carefully review your application and assess your qualifications and experiences. This process will take some time. 
            </p>
            <p className="mt-4 text-lg lg:text-2xl leading-8 text-gray-700">
              We appreciate your patience and understanding during this process. In the meantime, feel free to explore more about Churchill on our <a className="text-black underline" href="https://churchill.biz" target="_blank">website</a>.
            </p>
            <div className="flex-left">
              <p className="mt-4 text-lg lg:text-2xl leading-8 text-gray-700">
                Once again thank you for applying to Churchill. We look forward to contacting you again.
              </p>
              <p className="mt-4 text-lg lg:text-2xl leading-8 text-gray-700">
                Best Regards,
              </p>
              <p className="mt-4 text-lg lg:text-2xl leading-8 text-gray-700">
                The Founding Team @ Churchill 
              </p>
              
            </div>
          </div>
        </div>
      </div>

    </>
  )
}