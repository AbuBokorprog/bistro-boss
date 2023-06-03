import React from "react";
import Cover from "./Cover";
import cover from "../../assets/menu/banner3.jpg";
import { Helmet } from "react-helmet-async";
import Cart from "../Cart/Cart";
import MenuItems from "./MenuItems";
import SubCategory from "../../Shared/SubCategory/SubCategory";
import MenuCategory from "./MenuCategory";
import useMenu from "../../Hooks/useMenu";
import desertimg from "../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../assets/menu/pizza-bg.jpg";
import soupImg from "../../assets/menu/soup-bg.jpg";
import saladImg from "../../assets/menu/salad-bg.jpg";

const Menu = () => {
  const [menu] = useMenu();
  //console.log(menu);
  const desert = menu.filter((m) => m.category === "dessert");
  const pizza = menu.filter((m) => m.category === "pizza");
  const soup = menu.filter((m) => m.category === "soup");
  const salad = menu.filter((m) => m.category === "salad");
  const offered = menu.filter((m) => m.category === "offered");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover
        img={cover}
        title="Our Menu"
        paragraph={
          "Provident cupiditate voluptatem et in. Quaerat fugiat utassumenda excepturi exercitationem quasi. In deleniti eaque autrepudiandae et a id nisi."
        }
      ></Cover>
      <SubCategory
        subHeader={"Don't miss"}
        header="TODAY'S OFFER"
      ></SubCategory>
      <MenuCategory items={offered}></MenuCategory>
      <MenuCategory
        items={desert}
        img={desertimg}
        title={"dessert"}
      ></MenuCategory>
      <MenuCategory items={pizza} img={pizzaImg} title={"Pizza"}></MenuCategory>
      <MenuCategory items={soup} img={soupImg} title={"Soup"}></MenuCategory>
      <MenuCategory items={salad} img={saladImg} title={"Salad"}></MenuCategory>
    </div>
  );
};

export default Menu;
