import React from "react";
import { Parallax, Background } from "react-parallax";

const Cover = ({ img, title, paragraph }) => {
  return (
    <div>
      <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={img}
        bgImageAlt="the dog"
        strength={-200}
      >
        <div className="hero h-96 ">
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md text-white py-10 bg-glass px-20">
              <h1 className="mb-5 text-5xl font-bold">{title}</h1>
              <p className="mb-5 ">{paragraph}</p>
            </div>
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default Cover;
