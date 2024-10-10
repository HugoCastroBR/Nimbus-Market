'use client'
import React from 'react'
import { Provider } from 'react-redux';
import store from '@/store';
import { MantineProvider } from '@mantine/core';


import '@mantine/core/styles.css';


interface ProvidersProps {
  children: React.ReactNode
}

const Providers = (
  { children }: ProvidersProps
) => {
  return (
    <Provider store={store}>
      <MantineProvider>
        {children}
      </MantineProvider>
    </Provider>


  )
}

export default Providers