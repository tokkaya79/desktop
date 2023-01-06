import React from 'react' 
import { ErrorMessage } from './ErrorMessage'

interface SendApplyProps {
    onSend: () => void
   
}


export function SendApply ({onSend, }: SendApplyProps) {
    const [value, setValue] = React.useState('')
    const [error, setError] = React.useState('')

   

    const submitHandler = (e: React.FormEvent) => {
        e.preventDefault()
        setError('')

        if (value.trim().length === 0) {
            setError('Please enter valid email')
            return
        }
        onSend()
       
        
    }

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    return (
        <form onSubmit={submitHandler}>

            <input value={value} onChange={changeHandler} className="border py-2 px-4 mb-2 w-full outline-0 " type="text" placeholder="Your email" />

            {error && <ErrorMessage error={error} />}

            <button className="uppercase py-4 px-5 bg-[#384564] text-white rounded text-xs my-4" type="submit">Apply</button>

        </form>
    )
}