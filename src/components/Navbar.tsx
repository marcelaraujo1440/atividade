import React from 'react'
import './styles/navbar.scss'



type NavbarProps = {
    menuItems: {label: string, link: string}[];
}

const Navbar: React.FC<NavbarProps> = ({ menuItems}) => {
  return (
    <nav className='navbar'>
      <ul className='menu'>
        {menuItems.map((item, index) => (
          <li key={index}><a href={item.link}>{item.label}</a></li>
        ))}
      </ul>

    </nav>
  )
}

export default Navbar
