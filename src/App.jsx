import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header/Header'
import Features from './Components/Features/Features'
import Layout from './utils/layout/layout'
import Navbar from './Components/Header/Navbar/Navbar'
import AppWork from './Components/AppWork/AppWork'
import Tutorial from './Components/Tutorial/tutoria'
import Screen from './Components/Screen/Screen'
import Team from './Components/Team/Team'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Layout>
        <Navbar/>
        <Header/>
        <Features/>
        <AppWork/>
        <Tutorial/>
        <Screen/>
        <Team/>
      </Layout>
    </>
  )
}

export default App
