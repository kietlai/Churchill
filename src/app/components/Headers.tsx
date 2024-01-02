export default function Header({
  section,
  headline,
  desc,
}: {
  section: string,
  headline: string,
  desc: string,
}) {
  return (
    <div className="bg-white px-6 py-8 sm:py-4 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-base font-semibold leading-7 text-sky-500">{section}</p>
        <h2 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">{headline}</h2>
        <p className="mt-6 text-lg leading-8 text-gray-600">{desc}</p>
      </div>
    </div>
  )
}