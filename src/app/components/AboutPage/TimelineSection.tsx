const timeline = [
  {
    name: 'Founded company',
    description:
      'Churchill was born out of the vision to create a new simple and efficient system.',
    date: 'Aug 2023',
    dateTime: '2023-08',
  },
  {
    name: 'Started first round of investments',
    description:
      'Received the first round worth of investments. ',
    date: 'Dec 2023',
    dateTime: '2023-12',
  },
  {
    name: 'Finalizing Pages',
    description:
      'We are finalizing the first page and getting ready to release it to the public to view. (The apps wont be released)',
    date: 'Jan 2024',
    dateTime: '2024-1',
  },
  {
    name: 'PLANNED Beta testing',
    description:
      'Released first round of Beta Testing to Origin Wireless.',
    date: 'Feb 2024',
    dateTime: '2024-02',
  },
  {
    name: 'PLANNED Global launch of product',
    description:
      'Fully released for new businesses to use it.',
    date: 'April 2024',
    dateTime: '2024-04',
  },
]

export default function Timeline() {
  return (
    <>
      <div className="mx-auto -mt-8 max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {timeline.map((item) => (
            <div key={item.name}>
              <time
                dateTime={item.dateTime}
                className="flex items-center text-sm font-semibold leading-6 text-sky-600"
              >
                <svg viewBox="0 0 4 4" className="mr-4 h-1 w-1 flex-none" aria-hidden="true">
                  <circle cx={2} cy={2} r={2} fill="currentColor" />
                </svg>
                {item.date}
                <div
                  className="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-900/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
                  aria-hidden="true"
                />
              </time>
              <p className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">{item.name}</p>
              <p className="mt-1 text-base leading-7 text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}