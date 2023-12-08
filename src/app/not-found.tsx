import Image from 'next/image'

import Logo from 'src/app/images/PNGs/Background/Large Favicon Brand Color.png'

export default function NotFound(){


    return (
        <>
        
         <main className="flex flex-col justify-center items-center h-[100vh]">
            <Image height={225} src={Logo} alt='churchill logo'></Image>
            <span className="text-sky-500 font-medium text-5xl" >404 Not Found</span>
         </main>

        </>
    )

}