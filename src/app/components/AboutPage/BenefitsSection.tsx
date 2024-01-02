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
    benefit: "Learning Opportunity",
    desc: "We grant a select number of employees a full scholarship to further their education.",
    icon: AcademicCapIcon
  },
  {
    benefit: "Balanced Work Life",
    desc: "We offer a 3 weeks of vacation time (PTO) a year to help you recharge and perform your best.",
    icon: FaceSmileIcon
  },
  {
    benefit: "Extensive Health Package",
    desc: "We care about your well-being, we offer medical, dental, and vision insurance for you and your family.",
    icon: PlusIcon
  },
  {
    benefit: "Perks Program",
    desc: "We offer stipends for home office items, wellness and more.",
    icon: BanknotesIcon
  },
  {
    benefit: "Flexible Work Hours",
    desc: "You can work remotely from anywhere at anytime. We work asynchronously in teams. You know what you need to do.",
    icon: ClockIcon
  },
  {
    benefit: "Remote Working Environment",
    desc: "You can work from anywhere on earth. You never need to walk into an office while working here.",
    icon: GlobeAmericasIcon
  },
]


export default function BenefitsSection() {
  return (
    <>
      <div className="mx-auto max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto flex max-w-2xl flex-col justify-between lg:max-w-none">
          <div className="text-left lg:text-center">
            <p className="text-xl font-semibold text-sky-500">Our Benefits</p>
            <h2 className="text-3xl font-bold sm:text-4xl">Work Happier With Us</h2>
            <div className="grid grid-col-1 md:grid-col-2">
              
            </div>
          </div>
        </div>
      </div>
    </>
  )
}