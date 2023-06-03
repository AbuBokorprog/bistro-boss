import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation } from "swiper";

const Slide = () => {
  return (
    <SwiperSlide navigation={true} modules={[Navigation]}>
      Slide 1
    </SwiperSlide>
  );
};

export default Slide;
