'use client'
import React from 'react'


interface ThemeProvidersProps {
  children: React.ReactNode
}



const ThemeProviders = (
  { children }: ThemeProvidersProps
) => {


  return (
    <div >
      {children}
    </div>
  )
}

export default ThemeProviders