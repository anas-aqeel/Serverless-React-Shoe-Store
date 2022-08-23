import React from 'react'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import Checkout from './pages/Checkout'
import Cart from './pages/Cart'
import Home from './pages/Home'
import Products from './pages/Products'

const App = () => {
  return (
    <>
      <Navbar/>
        <Cart/>
      <Footer/>
    </>

  )
}

export default App