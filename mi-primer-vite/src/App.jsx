import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import ClassComponent from './components/Classcomponents'
import FuncComponent from './components/FuncComponent'
import Card from './components/Card'
function App() {

  let elementos =[1,2,3]

  return (
    <>
      {/*<ClassComponent/>
      <FuncComponent/>*/}
      <Card elemento={elementos[0]}/>
      <Card elemento={elementos[1]}/>
      <Card elemento={elementos[2]}/>

    </>
  )
}

export default App
