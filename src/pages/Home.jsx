import React from 'react'
import AboutUs from '../components/AboutUs/AboutUs'
import Navbar from '../components/Navbar/Navbar'
import PopularProducts from '../components/PopularProducts/PopularProducts'
import Container from '../components/ProductContainer/Container'

import '../index.css'

const Home = () => {
  return (
    <dir className='home'>
        <Navbar/>
        <Container/>
        <PopularProducts/>
        <AboutUs/>
    </dir>
  )
}

export default Home