'use client'

import { User, createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { useEffect, useRef, useState, useTransition } from "react"

const FileUpload = () => {
    const client = createClientComponentClient({
            supabaseUrl: process.env.supabaseUrl,
            supabaseKey: process.env.SUPABASE_KEY
    })

    const [user,setUser] = useState<User | null>();
    const [uploaded,setUploaded] = useState<boolean>(false);
    const [isPending,startTrans] = useTransition()
    const fileInput = useRef<HTMLInputElement>(null)

    useEffect(() => {
        client.auth.getUser().then(res => setUser(res.data.user))
    })

    
    function handleFile(){

        if(fileInput.current?.files){
          
            const file = fileInput.current.files[0]
    
            client.storage.from('resumes').upload(`resume_${file.name}`,file)
                .then(data => console.log(data))
                .then(() => {
                    const resumeUrl = client.storage.from('resumes').createSignedUrl(`resume_${file.name}`,100,{download: false})
                    .then(u => {

                        // upload file to resume_docs table
                        client.from('resume_docs').insert({
                            author_id: user?.id,
                            doc_url: u.data?.signedUrl
            
                        })
                    })
                })
           

            
        
        }
        setUploaded(true)
    }

    return (
        <>
            
            <div className={`relative transition-colors ${uploaded ? 'bg-green-500 hover:bg-green-400' : 'bg-sky-500 hover:bg-sky-400'} w-[150px] h-[50px]  flex rounded-lg justify-center items-center text-white`}>
                <span>{uploaded ? 'Upload Saved' : 'Upload Resume'}</span>
                <input  className={`absolute w-[100%] h-[45px]  opacity-0 `} onChange={() => startTrans(() => handleFile())} accept='.doc,.docx,.pdf' ref={fileInput} type="file" name="" id="" />
            </div>
        
        </>
    )
}

export default FileUpload;