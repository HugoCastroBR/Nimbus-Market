'use client'
import React, { useState } from 'react'
import { Input, CloseButton } from '@mantine/core';
import { IconSearch  } from '@tabler/icons-react';

export default function SearchInput() {

  const [value, setValue] = useState('');

  return (
    <div
      className='
        flex justify-start xs:justify-center items-center h-full w-2/3 xs:w-1/3 
      '
    >
      <Input
        placeholder="Search"
        className='w-6/6 xs:w-5/6'
        value={value}
        size="xs"
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
