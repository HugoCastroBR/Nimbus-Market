import React from 'react'
import Logo from '../Atoms/Logo'
import SearchInput from '../Molecules/SearchInput'
import HeaderMenu from '../Molecules/HeaderMenu'

const Header = () => {
  return(
    <div
        className='
        w-full h-14 flex justify-between items-center bg-highlightBlue
        px-2 md:px-4 lg:px-8
        '
      >
        <Logo/>
        <SearchInput/>
        <HeaderMenu/>
      </div>
  )
}

export default Header