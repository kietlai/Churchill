
interface Props {
    password: string
}

const PasswordCounter = ({password}: Props) => {
    
    const bubbles = [1,1,1,1,1,1,1,1]
    return (
        <>
        
            <div className="flex gap-1 justify-center">

                {bubbles.map(k => <div className="h-[1rem] basis-[1rem] border border-gray-400 rounded-3xl"></div>) }

            </div>
        
        </>
    )
}

export default PasswordCounter;