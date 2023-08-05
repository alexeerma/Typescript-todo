import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Inputfield from './components/Inputfield'

const App = () =>  {

  return (
    <>
      <div className='App'>
          <span className='heading'>Taskify</span>
          <Inputfield />
      </div>
     
    </>
  )
}

export default App
