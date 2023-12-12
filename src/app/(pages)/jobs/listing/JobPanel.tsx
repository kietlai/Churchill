'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

interface Props {
    id: string,
    title: string,
    desc?: string,
    location?: string,

}

const JobPanel = ({ id,title }: Props) => {
    
    const router = useRouter()
    const applyBtn = useRef<HTMLButtonElement>(null);
    const containerDiv = useRef<HTMLDivElement>(null);

    const [mouseOverBtn,setMouseOver] = useState(false);


    useEffect(() =>{
        const onEnter = () => setMouseOver(true)
        const onLeave = () => setMouseOver(false)

        applyBtn.current?.addEventListener('mouseenter', onEnter)
        applyBtn.current?.addEventListener('mouseleave', onLeave)

        return () => {
            applyBtn.current?.removeEventListener('mouseenter',onEnter)
            applyBtn.current?.removeEventListener('mouseleave',onLeave)
        }
    },[])

    function handleClick(){
        if(mouseOverBtn) router.push(`/jobs/view/${id}/apply`)
        else router.push(`/jobs/view/${id}`)
    }

    return (
        <>
            <div ref={containerDiv} onClick={handleClick} className="flex justify-around items-center basis-[150px] w-[70%] border border-gray-200 rounded-md hover:cursor-pointer hover:scale-105 transition-transform">
                <p className=" grow text-2xl font-medium text-sky-500 p-2 text-center ">{title}</p>
                <Link className="basis-[400px] text-center " href={`/jobs/view/${id}`}>

                    <button ref={applyBtn} className="border h-10  border-sky-500 text-sky-500 hover:bg-sky-500 hover:text-white font-medium justify-self-end rounded-md w-[100px]">Apply</button>

                </Link>
            </div>
        </>
    )
}

export default JobPanel;