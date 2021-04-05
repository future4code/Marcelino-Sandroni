import { useState } from 'react'

export const useInput = (initialValue) => {
  const [input, setInput] = useState(initialValue)

  const controlInput = e => {
    const {name, value} = e.target
    setInput({...input, [name]: value })
  }
  
  return [input, setInput, controlInput]
} 
