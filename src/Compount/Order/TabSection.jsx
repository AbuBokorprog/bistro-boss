import React from "react";

const TabSection = ({ items }) => {
  console.log(items);
  const { name, image, price, recipe } = items;
  return (
    <div className="card w-80 mt-10 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title justify-center">{name}</h2>
        <p className=" absolute text-white bg-slate-400 px-2 right-0 top-0 mt-5 me-8">
          {price}
        </p>
        {recipe}
        <div className="card-actions justify-center">
          <button className="btn btn-primary">Add To Card</button>
        </div>
      </div>
    </div>
  );
};

export default TabSection;
