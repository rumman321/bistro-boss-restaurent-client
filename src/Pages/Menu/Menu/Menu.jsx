import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg1 from "../../../assets/menu/dessert-bg.jpeg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../Componnets/SectonTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
  const [menus] = useMenu();
  const dessert = menus.filter((item) => item.category == "dessert");
  const soup = menus.filter((item) => item.category == "soup");
  const salad = menus.filter((item) => item.category == "salad");
  const pizza = menus.filter((item) => item.category == "pizza");
  const offered = menus.filter((item) => item.category == "offered");
  return (
    <div>
      <Helmet>
        <title>Bistro||Menu</title>
      </Helmet>
      {/* MAIN cover */}
      <Cover
        coverImg={menuImg1}
        title={"our menu"}
        subTitle={"Would You Like To Try A Dish"}
      ></Cover>
      {/* offer section */}
      <SectionTitle
        heading={"Don't Miss"}
        subHeading={"Today's Offer"}
      ></SectionTitle>
      <MenuCategory items={offered}></MenuCategory>
      {/* desert section */}
      <MenuCategory
        coverImg={dessertImg}
        items={dessert}
        title={"dessert"}
        subTitle={
          `"A symphony of sugar, a masterpiece of flavor: Where dessert becomes art." `
        }
      ></MenuCategory>
      {/* pizza section */}
      <MenuCategory
        coverImg={pizzaImg}
        items={pizza}
        title={"pizza"}
        subTitle={
          `"Dough, sauce, cheese: The timeless trinity, the foundation of every pizza masterpiece."`
        }
      ></MenuCategory>
      {/* salad section */}
      <MenuCategory
        coverImg={saladImg}
        items={salad}
        title={"salad"}
        subTitle={
          `"From ancient gatherings to modern tables, the salad's legacy: A healthy constant."`
        }
      ></MenuCategory>
      {/* soup section */}
      <MenuCategory
        coverImg={soupImg}
        items={soup}
        title={"soup"}
        subTitle={
          `"Broth, the simmering essence: The heart of every comforting soup."`
        }
      ></MenuCategory>
    </div>
  );
};

export default Menu;
