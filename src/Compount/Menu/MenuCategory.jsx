import React from "react";
import MenuItems from "./MenuItems";
import useMenu from "../../Hooks/useMenu";
import Cover from "./Cover";

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
    </div>
  );
};

export default MenuCategory;
