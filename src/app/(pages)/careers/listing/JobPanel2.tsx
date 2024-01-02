import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

interface Props {
  id: string,
  title: string,
  desc?: string,
  location?: string,
}

const JobPanel2 = ({ id,title }: Props) => (
  <>
    <div className="flex flex-row justify-around items-center basis-[150px] w-[70%] border border-gray-200 rounded-md ">
      <Link href={`/jobs/view/${id}`}>
        <div className="bases-4/6 text-left">
          <p className="text-2xl font-medium text-sky-500 p-2 text-left">{title}</p>
        </div>
        <div className="bases-2/6">
          <button className="border h-10	border-sky-500 text-sky-500 hover:bg-sky-500 hover:text-white font-medium justify-self-end rounded-md w-[100px]">Apply</button>
        </div>
      </Link>
    </div>
    <div className=""></div>
  </>
)

export default JobPanel2;