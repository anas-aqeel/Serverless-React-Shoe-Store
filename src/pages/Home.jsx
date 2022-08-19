import React from "react";
import AboutUs from "../components/AboutUs/AboutUs";
import CustomCarousel from "../components/Carousel/Carousel";
import Navbar from "../components/Navbar/Navbar";
import Newsletter from "../components/Newsletter/Newsletter";
import PopularProducts from "../components/PopularProducts/PopularProducts";
import Container from "../components/ProductContainer/Container";
import ProductDetails from "../components/ProductDetails/ProductDetalis";
import Testimonials from "../components/Testimonials/Testimonials";
import { testimonialsList } from "../siteConfig";
import "../index.css";

const Home = () => {
  var item = testimonialsList[2];
  return (
    <>
      <div className="home">
        <Navbar />
        <Container />
        <PopularProducts />
        <AboutUs />
        <ProductDetails />
      </div>


      <div className="home">
      <Testimonials />
      <CustomCarousel
        avatar={item.avatar}
        review={item.review}
        rating={item.rating}
        name={item.name}
      />
        <Newsletter />
      </div>
    </>
  );
};

export default Home;
