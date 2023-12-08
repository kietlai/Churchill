import Link from "next/link";


interface Props {
    id: string,
    title: string,
    desc?: string,
    location?: string,

}

const JobPanel = ({ id,title }: Props) => (
    <>
        <div className="flex flex-col justify-around items-center basis-[300px] h-[150px] border border-gray-200 rounded-md ">
            <p className="text-2xl font-medium text-sky-500 p-2 text-center ">{title}</p>
            <button className="border h-10  border-sky-500 text-sky-500 hover:bg-sky-500 hover:text-white font-medium justify-self-end rounded-md w-[100px]">Apply</button>
        </div>
    </>
)

export default JobPanel;