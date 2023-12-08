import Link from "next/link";


interface Props {
    id: string,
    title: string,
    desc?: string,
    location?: string,

}

const JobPanel = ({ id,title }: Props) => (
    <>
        <div className="flex justify-around items-center basis-[150px] w-[70%] border border-gray-200 rounded-md ">
            <p className="text-2xl font-medium text-sky-500 p-2 text-center ">{title}</p>
            <Link href={`/jobs/view/${id}`}>

                <button className="border h-10  border-sky-500 text-sky-500 hover:bg-sky-500 hover:text-white font-medium justify-self-end rounded-md w-[100px]">Apply</button>

            </Link>
        </div>
    </>
)

export default JobPanel;