import React from "react";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import ShortDes from "./ShortDes/ShortDes";
import Cart from "../Cart/Cart";
import FeaturedItem from "../FeaturedItem/FeaturedItem";
import Testimonial from "../Testimonial/Testimonial";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>
      <Banner></Banner>
      <Category></Category>
      <ShortDes></ShortDes>
      <Cart></Cart>
      <FeaturedItem></FeaturedItem>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
