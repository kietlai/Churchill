import { Heading, Tailwind, Img, Text, Link, Container } from "@react-email/components"




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
    <Tailwind>
      <Container className="isolate lg:overflow-hidden md:pt-3 h-full">
        
        {/* add back in a relative infront off the isolate */}
        
        <Container className="mx-auto max-w-2xl pt-12 lg:py-12 h-full place-self-center">
          <Container className="flex justify-center pb-7">
            <Img 
              src="churchillblack.svg"  
              className="h-16"
            />
          </Container>
          <Container className="text-left px-2">
            <Heading as="h1" className="text-4xl text-center font-bold tracking-tight text-gray-800">
              Thank You {firstName} for Applying at Churchill!
            </Heading>
            <Text className="mt-6 text-lg lg:text-2xl text-gray-700">
              Thank you for your recent application for the <span>{position}</span>. We are reaching out to tell you that we have recieved your application and appreciate your interest in our company.
            </Text>
            <Text className="mt-4 text-lg lg:text-2xl leading-8 text-gray-700">
              Our team will carefully review your application and assess your qualifications and experiences. This process will take some time. 
            </Text>
            <Text className="mt-4 text-lg lg:text-2xl leading-8 text-gray-700">
              We appreciate your patience and understanding during this process. In the meantime, feel free to explore more about Churchill on our <Link className="text-black underline" href="https://churchill.biz" target="_blank">website</Link>.
            </Text>
            <Container className="flex-left">
              <Text className="mt-4 text-lg lg:text-2xl leading-8 text-gray-700">
                Once again thank you for applying to Churchill. We look forward to contacting you again.
              </Text>
              <Text className="mt-4 text-lg lg:text-2xl leading-8 text-gray-700">
                Best Regards,
              </Text>
              <Text className="mt-4 text-lg lg:text-2xl leading-8 text-gray-700">
                The Founding Team @ Churchill 
              </Text>
              
            </Container>
            <Container className="flex items-center justify-center gap-x-6">
              <Container className="grid grid-cols-1 lg:grid-cols-3">
                <Container>
                  <Img 
                  src="/Signatures/hero.svg"
                  className="w-48"
                  />
                </Container>
                <Container>
                  <Img 
                  src="/Signatures/kiet.svg"
                  className="w-48"
                  />
                </Container>
                <Container>
                  <Img 
                  src="/Signatures/ike.svg"
                  className="w-48"
                  />
                </Container>
              </Container>
           
            </Container>
          </Container>
        </Container>
      </Container>

    </Tailwind>
  )
}