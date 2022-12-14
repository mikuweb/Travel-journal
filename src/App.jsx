import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Card } from './components/Card'
import { Header } from './components/Header'

function App() {
  return (<div className='container'>
    <Header />
    <Card />
    <Card />
    <Card />
  </div>)
}

export default App


