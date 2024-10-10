'use client'
import React from 'react'
import { createTheme, MantineProvider } from '@mantine/core';


import '@mantine/core/styles.css';


interface ThemeProvidersProps {
  children: React.ReactNode
}

const theme = createTheme({
});


const ThemeProviders = (
  { children }: ThemeProvidersProps
) => {


  return (
    <MantineProvider theme={theme} >
      {children}
    </MantineProvider>
  )
}

export default ThemeProviders