import { Input } from '@mantine/core'
import React from 'react'
import { IconMailForward } from '@tabler/icons-react'

export default function SubEmailCover() {
  return (
    <div
      className='
        bg-white w-full xs:h-96 h-60
        flex justify-between items-center
        xs:flex-col sm:flex-row
        xs:justify-center sm:justify-between
        xs:items-center sm:items-center
        xs:px-1 md:px-6 lg:px-12 xs:py-1 md:py-6 lg:py-10
        rounded-xl shadow-md overflow-hidden

      '
    >
      <div
        className='
          w-2/3 h-full sm:flex flex-col justify-center items-center
          pr-0 xs:pr-6 sm:pr-12 md:pr-40 
          hidden
        '
      >
        <span
          className='
            text-textLowlight  text-2xl sm:text-3xl md:text-5xl xl:text-7xl
            font-semibold italic
          '
        >
          Get the best offers and discounts selected for you directly in your inbox
        </span>
      </div>
      <div
        className='
        w-full xs:w-1/3 h-full flex justify-evenly items-center
        flex-col p-4 px-20 xs:p-0
      '
      >
        <span
          className='
            text-textLowlight 
            font-semibold italic
            text-xl sm:text-4xl 
          '
        >
          Unlock the best of Nimbus and get the most out of it with our exclusive offers.
        </span>
        <Input
          placeholder="Email"
          className='w-full'
          size="md"
          rightSectionPointerEvents="all"
          rightSection={
            <IconMailForward
              aria-label="Subscribe"
            />
          }
        />
      </div>
    </div>
  )
}