import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ items ,coverImg,title,subTitle}) => {
  return (
    <div className="space-y-10 mb-10">
        {title && <Cover coverImg={coverImg} title={title} subTitle={subTitle}></Cover> }
      <div className="grid md:grid-cols-2 gap-10">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="text-center">
      <Link to={`/order/${title?.toLowerCase()}`}>
      <button className="btn btn-outline border-0 border-b-2 uppercase "> order your favorite food</button></Link>
      </div>
    </div>
  );
};

export default MenuCategory;
