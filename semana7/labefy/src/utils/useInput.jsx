import { useState } from 'react'

export const useInput = (valorInicial) => {
  const [input, setInput] = useState({})

  const controlInput = e => {
    const {name, value} = e.target
    setInput({ [name]: value})
  }
  
  return [input, controlInput]
}