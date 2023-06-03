import React from "react";
import useMenu from "../../Hooks/useMenu";
import Cover from "./Cover";

const MenuItems = ({ items }) => {
  const { name, image, category, price } = items;
  console.log(items);
  return (
    <div>
      <div>
        <div>
          <div className="card card-side bg-base-100 shadow-xl">
            <figure>
              <img
                style={{ borderRadius: "0 200px 200px 200px" }}
                className="w-32 [border-radius: 0px, 200px, 200px, 200px] "
                src={image}
                alt="Movie"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{name}</h2>
              <p>{category}</p>
              <p>{price}</p>
              <div className="card-actions justify-end"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuItems;
