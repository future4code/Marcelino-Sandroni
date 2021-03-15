import { React, Component } from 'react'

const Header = ({title}) => {
  
  return (
    <header>
      <h1>{title}</h1>
      <input type="text" placeholder="Busca" id="campoDeBusca" />
    </header>
  )
}

export default Header