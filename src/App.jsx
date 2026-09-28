import './App.css'
import React from 'react'
import Card from './components/button/card/Card'


const App = () => {
  return (
    <div className='card-container'>
      <Card name="Praveen" email="praveen@gmail.com" btn="btn1"/>
      <Card name="Ronaldo" email="ronaldo@gmail.com" btn="btn2"/>
      <Card name="Sachin" email="sachin@gmail.com" btn="btn3"/>
    </div>
  )
}

export default App
