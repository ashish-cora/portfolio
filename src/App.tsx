import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import Footer from './components/Footer'
import styles from './App.module.css'
import About from './pages/About'
import Experience from './pages/Experience'

function App() {

  return (
    <div id={styles.container}>
      <Header />
      <About />
      <Experience />
      <Footer />
    </div>
  )
}

export default App
