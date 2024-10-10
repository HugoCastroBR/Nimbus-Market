'use client'
import React, { useState } from 'react'
import { Input, CloseButton } from '@mantine/core';
import { IconSearch  } from '@tabler/icons-react';

export default function SearchInput() {

  const [value, setValue] = useState('');

  return (
    <div
      className='
        flex justify-center items-center h-full w-1/2 xs:w-1/3 
      '
    >
      <Input
        placeholder="Search"
        className='w-5/6 xs:w-6/6'
        value={value}
        onChange={(event) => setValue(event.currentTarget.value)}
        rightSectionPointerEvents="all"
        rightSection={
          <CloseButton
            aria-label="Clear input"
            onClick={() => setValue('')}
            style={{ display: value ? undefined : 'none' }}
          />
        }
        leftSection={<
          IconSearch 
          size={14} 
          color="var(--textLowlight)"
          />}
      />

    </div>
  )
};
