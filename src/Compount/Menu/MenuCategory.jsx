import React from "react";
import MenuItems from "./MenuItems";
import useMenu from "../../Hooks/useMenu";
import Cover from "./Cover";
import { Link } from "react-router-dom";

const MenuCategory = ({ items, img, title }) => {
  return (
    <div>
      {title && <Cover img={img} title={title}></Cover>}
      <div className="grid grid-cols-2 gap-5">
        {/* desert items */}
        {items.map((d) => (
          <MenuItems items={d} key={d._id}></MenuItems>
        ))}
      </div>
      <div>
        <button className="btn border-b-4 mb-10 mt-2 text-center btn-outline text-black">
          <Link to={`/order/${title}`}>Order Now</Link>
        </button>
      </div>
    </div>
  );
};

export default MenuCategory;
