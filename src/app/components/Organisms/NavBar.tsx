'use client'
import React from 'react'
import LinkButton from '../Atoms/LinkButton'
import { Collapse } from '@mantine/core'

export default function NavBar() {

  const [opened, setOpened] = React.useState(true)

  const handlerOpenCollapse = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault()
    setOpened(!opened)
  }

  return (
    <div
      className='
      flex flex-col
    '
    >
      <div
        className='
        w-full pb h-6 px-2 md:px-4 lg:px-8 border-t
        flex justify-evenly xs:justify-start items-center 
      '
      >
        <LinkButton
          onClick={handlerOpenCollapse}
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
      <Collapse
        in={opened}
        className='
      w-full h-96 px-2 md:px-4 lg:px-8
      flex flex-col
      z-10 mt-6 absolute bg-highlightBlue
      '
      >
        <span
          className='
            text-md font-semibold text-textHighlight
            mb
          '
        >
          Categories:
        </span>
        <div
          className='
            w-full flex flex-col justify-evenly items-start
            h-80 mt-4 px-2
          '
        >
          <div
            className='bg-gray-200 w-36 h-36 rounded-md flex justify-center items-center'
          >
            Category
          </div>
          <div
            className='bg-gray-200 w-36 h-36 rounded-md flex justify-center items-center'
          >
            Category
          </div>
        </div>
      </Collapse>
    </div>
  )
}