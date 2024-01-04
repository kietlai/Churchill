import { StringMappingType } from "typescript"
import Link from "next/link"


interface Props {
  id: string,
  title: string,
  desc?: string,
  location?: string,
  salary?: string,
}


export default function JobListing({ id, title, desc, location, salary }: Props) {
  return (
    <>
      <li key={id} className="py-8">
        <dl className="relative flex flex-wrap gap-x-3">
          <dt className="sr-only">Role</dt>
          <dd className="w-full flex-none text-lg font-semibold tracking-tight text-gray-900">
            <Link href={`/careers/view/${id}`}>
              {title}
              <span className="absolute inset-0" aria-hidden="true" />
            </Link>
          </dd>
          <dt className="sr-only">Description</dt>
          <dd className="mt-2 w-full flex-none text-base leading-7 text-gray-600">{desc}</dd>
          <dt className="sr-only">Salary</dt>
          <dd className="mt-4 text-base font-semibold leading-7 text-gray-900">${salary}</dd>
          <dt className="sr-only">Location</dt>
          <dd className="mt-4 flex items-center gap-x-3 text-base leading-7 text-gray-500">
            <svg viewBox="0 0 2 2" className="h-0.5 w-0.5 flex-none fill-gray-300" aria-hidden="true">
              <circle cx={1} cy={1} r={1} />
            </svg>
            {location}
          </dd>
        </dl>
      </li>
    </>
  )
}

