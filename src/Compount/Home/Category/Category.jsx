import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import img1 from "../../../assets/home/slide1.jpg";
import img2 from "../../../assets/home/slide2.jpg";
import img3 from "../../../assets/home/slide3.jpg";
import "swiper/css";
import SubCategory from "../../../Shared/SubCategory/SubCategory";

const Category = () => {
  return (
    <div className="mb-20">
      <div className="text-center my-4">
        <SubCategory
          subHeader={"From 11:00am to 10:00pm"}
          header={"Order Online"}
        ></SubCategory>
      </div>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper text-center"
      >
        <SwiperSlide>
          <img src={img1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Category;
