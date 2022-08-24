import React from "react";
import AboutUs from "../sections/AboutUs/AboutUs";
import Newsletter from "../sections/Newsletter/Newsletter";
import PopularProducts from "../sections/PopularProducts/PopularProducts";
import Header from "../sections/Header/Header";
import ProductDetails from "../sections/ProductDetails/ProductDetalis";
import Testimonials from "../sections/Testimonials/Testimonials";
import "../index.css";

const Home = () => {
  return (
    <>
      <div className="home">
        <Header />
        <PopularProducts />
        <AboutUs />
        <ProductDetails />
      </div>
        <Testimonials />
        <Newsletter />
    </>
  );
};

export default Home;
