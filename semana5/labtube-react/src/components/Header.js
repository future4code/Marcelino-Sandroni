import { React, Component } from 'react'

class Header extends Component {
  constructor({title}) {
    super(title)
    this.title = title
  }
  
  render() { return (
    <header>
      <h1>{this.title}</h1>
      <input type="text" placeholder="Busca" id="campoDeBusca" />
    </header>
  )}
}

export default Header