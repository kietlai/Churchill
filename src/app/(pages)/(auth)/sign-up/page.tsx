import { useRef, useState } from 'react'
import GoogleLogo from '../../../images/PNGs/other/google-logo.png'
import Image from 'next/image'


export default async function SignUp(){

    //  input states
    const [firstName,setFName] = useState<string>('');
    const [lastName,setLName] = useState<string>('');
    const [birthday,setBirth] = useState<Date>( new Date() );
    const [email,setEmail] = useState<string>('');
    const [phoneNumber,setPhoneNumber] = useState<number>(0);

    // references to html inputs
    const firstNameInput = useRef();
    const lastNameInput = useRef();
    const birthdayInput = useRef();
    const emailInput = useRef();
    const numberInput = useRef();

    // symbol showing a field is required
    const Star = () => <span className="text-red-500">*</span>

    
    return (
        <>
        
            <main className="flex justify-center h-[50vh] w-[100%] ">

                <form action="" className="flex flex-col basis-[55%] border-t-sky-500 border-t-8 shadow-md ">
                    
                    {/* name field */}
                    <div className=" flex justify-start gap-10 p-3">
                        <div className="basis-[110px]">
                            <span className="font-medium text-xl">Name </span>
                            <Star/>
                        </div>
                        <input className="grow border-gray-300" type="text" placeholder="First Name" required/>
                        <input className="grow border-gray-300" type="text" placeholder="Last Name" required />
                    </div>
                    
                    {/* birthday field */}
                    <div className=" flex justify-between gap-10 p-3">
                        <div className="basis-[110px]">
                            <span className="font-medium text-xl">Birth Date </span>
                            <Star/>
                        </div>
                        <input className="basis-1/2 grow border-gray-300" type="date" placeholder="Birthdate" required/>
                    </div>

                    {/* email field */}
                    <div className=" flex justify-between gap-10 p-3">
                        <div className="basis-[110px]">
                            <span className="font-medium text-xl ">Email </span>
                            <Star/>
                        </div>
                        <input className="basis-1/2 grow border-gray-300" type="text" placeholder="name@example.com" required/>
                    </div>
                    
                    {/* phone-number field */}
                    <div className=" flex justify-start gap-10 p-3">
                        <div className="basis-[110px]">
                            <span className="font-medium text-xl ">Phone # </span>
                            
                        </div>
                        <input className="basis-1/3 border-gray-300" type="tel" placeholder="+1 123-456-7890" pattern="[0-9][0-9][0-9]-[0-9][0-9][0-9]-[0-9][0-9][0-9]"/>
                    </div>

                    {/* sign-up button */}
                    <div className="flex justify-center ">
                        <input type="submit" value="Sign up" className="px-2 py-2 rounded-md hover:cursor-pointer hover:bg-sky-500 hover:text-white border border-sky-500 text-sky-500 font-medium" />
                    </div>

                    <div className="flex items-center px-2">
                        <hr className="grow-[5]"/> <span className="grow text-center">or</span> <hr className="grow-[5]" />
                    </div>
                    <div className='flex justify-center'>
                            <button className="flex gap-1 border py-2 px-4 rounded-2xl font-medium hover:bg-gray-300" >
                                <Image src={GoogleLogo} alt="Google Logo" width='25' height='25' ></Image>
                        Continue with Google
                            </button>
                        </div>
                </form>

            </main>
        
        </>
    )

}