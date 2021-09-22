import { useState } from "react"

export function useInput({ name = "", initialValue = "", type = "text" }) {
    const [value, setValue] = useState(initialValue)

    const handleChange = (event) =>{
        setValue(event.target.value)
    }

    const handleClear = () =>{
        setValue('')
    }
    
    const getValue = () =>{
        return value
    }

    return {
        handleChange,
        handleClear,
        getValue,
        attrs: {
            name,
            value,
            type
        }
    }
}
