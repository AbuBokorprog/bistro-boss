import React, { useEffect, useState } from "react";
import SubCategory from "../../Shared/SubCategory/SubCategory";
import { Swiper, SwiperSlide } from "swiper/react";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper";
import Slide from "./Slide";

const Testimonial = () => {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => {
        setDetails(data);
        //console.log(data);
      });
  }, []);

  return (
    <div className="my-20">
      <SubCategory
        subHeader="Click it Out"
        header="FROM OUR MENU"
      ></SubCategory>
      <div>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {details.map((d) => (
            <SwiperSlide key={d._id}>
              <div className="px-20 my-8">
                <Rating
                  className="mx-auto"
                  style={{ maxWidth: 180 }}
                  value={d.rating}
                  readOnly
                />
                <p className="">{d.details}</p>
                <h3 className="text-3xl text-yellow-400">{d.name}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
