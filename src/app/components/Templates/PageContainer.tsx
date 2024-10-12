import React from 'react'
import Header from '../Organisms/Header'
import Footer from '../Molecules/Footer'

interface PageContainerProps {
  children: React.ReactNode
}

const PageContainer = ({
  children
}: PageContainerProps) => {

  return (
    <div
      className='
      w-full min-h-screen h-full flex flex-col items-center 
      bg-slate-300  mx-auto max-w-container  justify-start
      '
    >
      <Header />
        <div
          className='
          w-full h-full min-h-screen flex justify-start items-start
          px-0.5 md:px-4 lg:px-8
          '
        >
          {children}
        </div>
      <Footer />
    </div>
  )
}

export default PageContainer