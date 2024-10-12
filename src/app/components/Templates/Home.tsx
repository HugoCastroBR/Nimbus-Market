import React from 'react'
import PageContainer from './PageContainer'
import SubEmailCover from '../Organisms/SubEmailCover'

const Home = () => {
  return (
    <PageContainer>
      <main
        className='
          w-full h-full flex flex-col justify-start items-start
          bg-white min-h-screen py-2
        '
      >
        <SubEmailCover/>
      </main>
    </PageContainer>
  )
}

export default Home