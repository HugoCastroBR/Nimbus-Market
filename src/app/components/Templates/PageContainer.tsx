import React from 'react'
import Header from '../Organisms/Header'

const PageContainer = ({ }) => {

  return (
    <div
      className='
      w-full min-h-screen h-full flex flex-col items-center 
      bg-slate-300  mx-auto max-w-container 
      '
    >
        <Header/>
      <div>
        Content
      </div>
      <div>
        Footer
      </div>
    </div>
  )
}

export default PageContainer