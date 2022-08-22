import React from "react";
import AboutUs from "../components/AboutUs/AboutUs";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Newsletter from "../components/Newsletter/Newsletter";
import PopularProducts from "../components/PopularProducts/PopularProducts";
import Container from "../components/ProductContainer/Container";
import ProductDetails from "../components/ProductDetails/ProductDetalis";
import Testimonials from "../components/Testimonials/Testimonials";
import "../index.css";

const Home = () => {
  return (
    <>
      <div className="home">
        <Navbar />
        <Container />
        <PopularProducts />
        <AboutUs />
        <ProductDetails />
      </div>
        <Testimonials />
        <Newsletter />
        <Footer/>
    </>
  );
};

export default Home;
