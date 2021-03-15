const Menu = ({items}) => {

  let menu = items.map(i => <li className="botoes-menu-vertical">{i}</li>)
  
  return (
  <nav className="menu-vertical">
    <ul>
      {menu}
    </ul>
  </nav>
)}

export default Menu