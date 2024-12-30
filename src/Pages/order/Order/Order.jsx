import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import orderImg from "../../../assets/shop/banner2.jpg";
import Cover from "../../Shared/Cover/Cover";
import { useState } from "react";
import useMenu from "../../../hooks/useMenu";
import FooadCard from "../../../Componnets/FoodCard/FooadCard";
import OrderTabPanel from "../OrderTab/OrderTabPanel";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Order = () => {
  //menu page theke category wise data dekhano order page e

  const categories = ["salad", "pizza", "soup", "dessert", "drinks"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  console.log(initialIndex)
  const [tabIndex, setTabIndex] = useState(initialIndex === -1 ? 0 : initialIndex);
  const [menus] = useMenu();

  const dessert = menus.filter((item) => item.category == "dessert");
  const soup = menus.filter((item) => item.category == "soup");
  const salad = menus.filter((item) => item.category == "salad");
  const pizza = menus.filter((item) => item.category == "pizza");
  const drinks = menus.filter((item) => item.category == "drinks");
  return (
    <div>
      <Helmet>
        <title>Bistro|| Order</title>
      </Helmet>
      <Cover
        coverImg={orderImg}
        title={"Order now"}
        subTitle={"Order Your Favorite Food Now"}
      ></Cover>
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soup </Tab>
          <Tab>dessert</Tab>
          <Tab>Drinks</Tab>
        </TabList>
        <TabPanel>
          <OrderTabPanel item={salad}></OrderTabPanel>
        </TabPanel>
        <TabPanel>
          <OrderTabPanel item={pizza}></OrderTabPanel>
        </TabPanel>
        <TabPanel>
          <OrderTabPanel item={soup}></OrderTabPanel>
        </TabPanel>
        <TabPanel>
          <OrderTabPanel item={dessert}></OrderTabPanel>
        </TabPanel>
        <TabPanel>
          <OrderTabPanel item={drinks}></OrderTabPanel>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
