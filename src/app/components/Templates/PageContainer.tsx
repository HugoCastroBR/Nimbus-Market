import React from 'react'
import Header from '../Organisms/Header'
import Footer from '../Molecules/Footer'

const PageContainer = ({ }) => {

  return (
    <div
      className='
      w-full min-h-screen h-full flex flex-col items-center 
      bg-slate-300  mx-auto max-w-container  justify-between
      '
    >
      <Header />
      Content
      <Footer />
    </div>
  )
}

export default PageContainer