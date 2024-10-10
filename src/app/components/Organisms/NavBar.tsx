import React from 'react'
import LinkButton from '../Atoms/LinkButton'

export default function NavBar() {
  return (
    <div
      className='
        w-full h-6 px-2 md:px-4 lg:px-8 border-t
        flex justify-evenly xs:justify-start items-center 
        '
    >
      <LinkButton
        href="/"
        className='
          text-sm font-medium text-textHighlight mr-4
        '
      >
        Categories
      </LinkButton>
      <LinkButton
        href="/"
        className='
          text-sm font-medium text-textHighlight mr-4
        '
      >
        Offers
      </LinkButton>
      <LinkButton
        href="/"
        className='
          text-sm font-medium text-textHighlight mr-4
        '
      >
        For You
      </LinkButton>
      <LinkButton
        href="/"
        className='
          text-sm font-medium text-textHighlight mr-4
        '
      >
        Saved
      </LinkButton>
    </div>
  )
}