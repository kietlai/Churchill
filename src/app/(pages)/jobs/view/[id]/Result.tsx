'use client'


export default function Res(props: {job: {title: string}}){

    return <>
    
        <span>{props.job.title}</span>

    </>
}