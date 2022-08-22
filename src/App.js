import React from 'react'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import Checkout from './pages/Checkout'
import Products from './pages/Products'
import Home from './pages/Home'

const App = () => {
  return (
    <>
      <Navbar/>  
        <Products/>
      <Footer/>
    </>

  )
}

export default App