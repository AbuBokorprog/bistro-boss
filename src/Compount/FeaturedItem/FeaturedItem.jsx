import React from "react";
import "./FeaturedItem.css";
import image from "../../assets/home/featured.jpg";
import SubCategory from "../../Shared/SubCategory/SubCategory";

const FeaturedItem = () => {
  return (
    <div className="my-20 py-10 featuredImage bg-gradient-to-r from-black">
      <section className="mb-8">
        <SubCategory
          subHeader="click it out"
          header="FROM OUR MENU"
        ></SubCategory>
      </section>
      <div className="flex  px-20 py-10 justify-center items-center">
        <div>
          <img className="rounded-2xl" src={image} alt="" />
        </div>

        <div className="px-12 text-white">
          <h3 className="text-xl mb-1">March 20, 2023</h3>
          <h3 className="text-xl mb-2">WHERE CAN I GET SOME?</h3>
          <p className="mb-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis quod
            necessitatibus quia cumque. Ea esse voluptatem voluptate porro
            beatae impedit nemo dicta voluptates aliquam illo.
          </p>
          <button className="btn border-b-4 btn-outline text-white">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedItem;
