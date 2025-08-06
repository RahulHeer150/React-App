import { useState } from 'react'
import './index.css'
import Postcard from './Postcard'
function App() {
  
  return (
    <>
    <div className='flex justify-center items-center min-h-screen bg-gray-900'>
      <Postcard 
      title="I K gujral Punjab technical University"
      description="this is a state government universiy established on 1997 at jalandhar Kapurthala highway."
      />
    </div>
    </>
  )
}

export default App
