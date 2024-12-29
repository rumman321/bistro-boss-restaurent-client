import { useEffect, useState } from "react";
import SectionTitle from "../../../Componnets/SectonTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const PopularManu = () => {
  const [menus, setMenu] = useState([]);
  useEffect(() => {
    fetch("/menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItems= data.filter(item => item.category=="popular")
        setMenu(popularItems);
      });
  }, []);
  console.log(menus);
  return (
    <section>
      <SectionTitle
        subHeading={"Check It Out"}
        heading={"popular menu"}
      ></SectionTitle>

      <div className="grid md:grid-cols-2 gap-10">
        {
            menus.map(item=><MenuItem key={item._id} item={item}></MenuItem> )
        }
      </div>
    </section>
  );
};

export default PopularManu;
