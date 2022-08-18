import React from 'react'
import AboutUs from '../components/AboutUs/AboutUs'
import Navbar from '../components/Navbar/Navbar'
import Newsletter from '../components/Newsletter/Newsletter'
import PopularProducts from '../components/PopularProducts/PopularProducts'
import Container from '../components/ProductContainer/Container'
import ProductDetails from '../components/ProductDetails/ProductDetalis'
import Testimonials from '../components/Testimonials/Testimonials'

import '../index.css'

const Home = () => {
  return (
    <dir className='home'>
        <Navbar/>
        <Container/>
        <PopularProducts/>
        <AboutUs/>
        <ProductDetails/>
        <Testimonials/>
        <Newsletter/>
    </dir>
  )
}

export default Home