import React from 'react'
import Navbar from '../components/Navbar'

const Layout: React.FC<{children: React.ReactNode}> = ({children}) => {
  return (
    <>
    <Navbar
    menuItems={[
        {label: 'home', link:'#'},
        {label:' contato', link: '#'}
    ]}    
    />
    <main>{children}</main>
    </>
  )
}

export default Layout
