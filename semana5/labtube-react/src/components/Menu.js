import { Component } from 'react'

class Menu extends Component {
  constructor({items}) {
    super(items)
    this.menuItems = this.buildMenu(items)
  }
  buildMenu(menuList) {
    const menu = menuList.map(
      item => `<li class="botoes-menu-vertical">${item}</li>`
    )
    
    return menu
  }
  
  render() { return (
    <nav class="menu-vertical">
    <ul>
      {this.menuItems}
    </ul>
    </nav>
  )}
}

export default Menu