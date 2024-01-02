import { ChartPieIcon, ChatBubbleBottomCenterIcon, LightBulbIcon, SquaresPlusIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Communcation',
    description: 'Speak directly to each other and create a work community',
    href: '/products/community-collaboration',
    icon: ChatBubbleBottomCenterIcon,
  },
  { 
    name: 'AI Adivsor', 
    description: 'Allow your HR work to be done faster and more streamlined', 
    href: '/products/ai-adivsor', 
    icon: LightBulbIcon },
  {
    name: 'AI Customer Interactions',
    description: 'Allow our new trained GPT to interact with your customers based on what kind of business you are',
    href: '#',
    icon: SquaresPlusIcon,
  },
]

export default function Features() {
  return (
    <div className="bg-white py-24 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-xl font-semibold leading-7 text-sky-500">Features</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Effortlessly run your business with our tools
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Helping to streamline your business requires a special tool set. We are building the tools for you business to succeed.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-xl font-semibold leading-7 text-gray-900">
                  <feature.icon className="h-5 w-5 flex-none text-sky-500" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                  <p className="mt-6">
                    <a href={feature.href} className="text-sm font-semibold leading-6 text-sky-500">
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
