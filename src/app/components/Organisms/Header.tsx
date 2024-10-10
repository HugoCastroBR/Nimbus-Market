import React from 'react'

const Header = () => {
  return(
    <div
        className='
        w-full h-16 flex justify-between items-center bg-gray-300
        px-2 md:px-4 lg:px-8
        '
      >
        <div>
          <h1
            className='
            text-2xl font-bold text-gray-800
            italic
            '
          >
            Nimbus
          </h1>
        </div>
        <div>
          SEARCH
        </div>
        <div>
          MENU
        </div>
      </div>
  )
}

export default Header