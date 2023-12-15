import classnames from 'classnames'
interface Props {
    password: string
}

const PasswordCounter = ({password}: Props) => {
    
    const bubbles = [1,1,1,1,1,1,1,1]
    return (
        <>
        
            <div className="flex gap-1 justify-center">

                {bubbles.map((k,i) => <div className={`${classnames({'bg-black-500': password.length >= i})} h-[1rem] basis-[1rem] border border-gray-300 rounded-3xl`}></div>) }

            </div>
        
        </>
    )
}

export default PasswordCounter;