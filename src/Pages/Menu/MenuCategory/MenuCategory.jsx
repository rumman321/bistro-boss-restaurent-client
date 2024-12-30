import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ items ,coverImg,title,subTitle}) => {
  return (
    <div className="space-y-10">
        {title && <Cover coverImg={coverImg} title={title} subTitle={subTitle}></Cover> }
      <div className="grid md:grid-cols-2 gap-10">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
    </div>
  );
};

export default MenuCategory;
