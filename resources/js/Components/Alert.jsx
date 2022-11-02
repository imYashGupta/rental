/* This example requires Tailwind CSS v2.0+ */
import { InformationCircleIcon } from '@heroicons/react/24/solid'
import { Link } from '@inertiajs/inertia-react'

export default function Alert({color,message,action}) {
  return (
    <div className={`rounded-md bg-${color}-50 p-4`}>
      <div className="flex">
        <div className="flex-shrink-0">
          <InformationCircleIcon className={`h-5 w-5 text-${color}-400`} aria-hidden="true" />
        </div>
        <div className="ml-3 flex-1 md:flex md:justify-between">
          <p className={`text-sm text-${color}-700`}>{message}</p>
          <p className="mt-3 text-sm md:mt-0 md:ml-6">
            <Link as='a' href={action.url} className={`whitespace-nowrap font-medium text-blue-700 hover:text-${color}-600`}>
              {action.text} <span aria-hidden="true">&rarr;</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
