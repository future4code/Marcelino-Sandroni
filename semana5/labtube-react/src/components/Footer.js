import { Component } from 'react'

class Footer extends Component {
  constructor({title}) {
    super(title)
    this.title = title
  }

  render() { return (
      <footer>
        <h4>{this.title}</h4>
      </footer>
  )}
  
}

export default Footer