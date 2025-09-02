import React from 'react'
import { useState } from 'react'
import './index.css'
import Postcard from './Postcard'
import Image from './assets/images.jpeg'
import GNDU from './assets/gndu.jpg'

function App() {
  
  return (
    <>
    <div className='flex justify-center items-center min-h-screen bg-gray-900'>
      <Postcard 
     imgPath={Image}
      title="I K gujral Punjab technical University kap"
      description="this is a state government universiy established on 1997 at jalandhar Kapurthala highway."
      />
      <Postcard
     imgPath={GNDU}
      title="Guru Nanak Dev Ji University"
      description="this is a state government university established on 1969 at Amritsar."
      />
    </div>
    </>
  )
}

export default App
