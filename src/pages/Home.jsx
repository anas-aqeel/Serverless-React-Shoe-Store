import React from 'react'
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
    </dir>
  )
}

export default Home