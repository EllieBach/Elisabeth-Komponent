import { useState } from 'react'
import './App.css'
import BentoMenu from './components/BentoMenu/BentoMenu'
import BearSVGComponents from './components/Switch/Switch'



function App() {
 

  return (
    <>
    <BentoMenu />
    <BearSVGComponents.CheckBoxIndicator/>
    <BearSVGComponents.BearSVG />
    <BearSVGComponents.ArmSVG />
  </>
  )
}

export default App
