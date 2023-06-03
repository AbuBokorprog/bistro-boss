import React, { useState } from "react";
import Cover from "../Menu/Cover";
import orderCover from "../../assets/home/chef-service.jpg";
import TabSection from "./TabSection";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../Hooks/useMenu";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Order = () => {
  const categories = ["salad", "pizza", "soups", "dessert"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(0);
  const [menu] = useMenu();
  //console.log(menu);

  const desert = menu.filter((m) => m.category === "dessert");
  const pizza = menu.filter((m) => m.category === "pizza");
  const soup = menu.filter((m) => m.category === "soup");
  const salad = menu.filter((m) => m.category === "salad");
  const drinks = menu.filter((m) => m.category === "drinks");

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Order Food</title>
      </Helmet>
      <Cover
        img={orderCover}
        title="Order Shop"
        paragraph={"Would you like to try dish"}
      ></Cover>
      <div>
        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList className="text-center">
            <Tab>SALAD</Tab>
            <Tab>PIZZA</Tab>
            <Tab>SOUPS</Tab>
            <Tab>DESSERTS</Tab>
            <Tab>DRINK</Tab>
          </TabList>
          <TabPanel>
            <div className="grid grid-cols-3 gap-4">
              {salad.map((i) => (
                <TabSection items={i}></TabSection>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-3 gap-4">
              {pizza.map((i) => (
                <TabSection items={i}></TabSection>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-3 gap-4">
              {soup.map((i) => (
                <TabSection items={i}></TabSection>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-3 gap-4">
              {desert.map((des) => (
                <TabSection items={des}></TabSection>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-3 gap-4">
              {drinks.map((d) => (
                <TabSection items={d}></TabSection>
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Order;
