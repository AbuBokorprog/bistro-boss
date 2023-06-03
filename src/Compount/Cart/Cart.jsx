import React, { useEffect, useState } from "react";
import CartItem from "./CartItem";
import SubCategory from "../../Shared/SubCategory/SubCategory";
import useMenu from "../../Hooks/useMenu";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [menu] = useMenu();

  // useEffect(() => {
  //   fetch("Menu.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       const popularItems = data.filter((d) => d.category === "popular");
  //       setCart(popularItems);
  //     });
  // }, []);

  const popularItems = menu.filter((d) => d.category === "popular");

  return (
    <div>
      <section>
        <SubCategory
          subHeader={"Check it out"}
          header={"From our Menu"}
        ></SubCategory>
      </section>
      <div className="grid grid-cols-2 gap-5">
        {popularItems.map((c) => (
          <CartItem cart={c} key={c._id}></CartItem>
        ))}
      </div>
    </div>
  );
};

export default Cart;
