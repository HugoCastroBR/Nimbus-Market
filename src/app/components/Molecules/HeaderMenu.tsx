import React from 'react'
import {
  IconUserCircle,
  IconShoppingCart
} from '@tabler/icons-react';
import LinkButton from '../Atoms/LinkButton';

export default function HeaderMenu() {
  return (
    <div
      className='
        flex justify-end items-center h-full w-1/2 xs:w-1/3 
      '
    >
      <div
        className='
          flex justify-between items-center h-full w-20
        '
      >
        <LinkButton
          href="/"
        >
          <IconShoppingCart
            size={30}
            color='var(--textHighlight)'
          />
        </LinkButton>
        <LinkButton
          href="/"
        >
          <IconUserCircle
            size={30}
            color='var(--textHighlight)'
          />
        </LinkButton>
      </div>
    </div>
  )
};
