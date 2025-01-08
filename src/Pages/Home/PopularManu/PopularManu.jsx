import SectionTitle from "../../../Componnets/SectonTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";

const PopularManu = () => {
  const [menus] = useMenu();
  const popular = menus.filter((item) => item.category == "popular");
  
  
  return (
    <section>
      <SectionTitle
        subHeading={"Check It Out"}
        heading={"popular menu"}
      ></SectionTitle>

      <div className="grid md:grid-cols-2 gap-10">
        {popular.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
    </section>
  );
};

export default PopularManu;
