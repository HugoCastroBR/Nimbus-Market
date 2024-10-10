import React from 'react'

export default function Footer() {

  return (
    <div
      className='
        w-full h-20 flex-col justify-center items-center bg-highlightBlue
      '
    >
      <div
        className='
          w-full h-1/2 flex justify-center items-center
        '
      >
        <p
          className='
            text-textHighlight text-sm
          '
        >
          &copy; 2024 Nimbus
        </p>
      </div>
      <div
        className='
          w-full h-1/2  flex justify-center items-center
        '
      >
        <p
          className='
            text-textHighlight text-sm
          '
        >
          by Hugo Castro
        </p>
      </div>

    </div>
  )
  
};
