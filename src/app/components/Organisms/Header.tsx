import React from 'react'
import Logo from '../Atoms/Logo'
import SearchInput from '../Molecules/SearchInput'
import HeaderMenu from '../Molecules/HeaderMenu'
import NavBar from './NavBar'

const Header = () => {
  return(
     <header
        className='
        w-full h-18 flex-col bg-highlightBlue
        '
      >
        <div
          className='
          w-full h-12 flex justify-between items-center bg-highlightBlue
          px-2 md:px-4 lg:px-8
          '
        >
          <Logo/>
          <SearchInput/>
          <HeaderMenu/>
        </div>
        <nav>
          <NavBar/>
        </nav>
      </header>

    
  )
}

export default Header