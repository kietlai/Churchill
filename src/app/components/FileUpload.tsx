'use client'

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { useRef } from "react"

const FileUpload = () => {
    const client = createClientComponentClient({
    supabaseUrl: process.env.supabaseUrl,
    supabaseKey: process.env.SUPABASE_KEY
    })

    const fileInput = useRef<HTMLInputElement>(null)
    
    function handleFile(){

        if(fileInput.current?.files){
          
          const file = fileInput.current.files[0]
    
          client.storage.from('resumes').upload(`resume_${file.name}`,file)
            .then(data => console.log(data))
        }
    
    }

    return (
        <>
        
            <input onChange={handleFile} accept='.doc,.docx' ref={fileInput} type="file" name="" id="" />
        
        </>
    )
}

export default FileUpload;