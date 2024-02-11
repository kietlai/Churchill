'use client'
import SearchIcon from "./SearchIcon"

export default function SearchBar(){

    return (
        <>
            
            <div className="flex items-center w-[35vw] min-w-[300px] border px-5 focus-within:border-blue-500">
                <SearchIcon/>
                <input className='grow border-none outline-[none]' type="text" placeholder='Search' />
            </div>
        
        </>
    )
}