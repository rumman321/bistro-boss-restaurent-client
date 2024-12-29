import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from "../../../assets/menu/dessert-bg.jpeg"
import PopularManu from '../../Home/PopularManu/PopularManu';

const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro||Menu</title>
                
            </Helmet>
            <Cover bgImg={menuImg} title={"our menu"} subTitle={"Would You Like To Try A Dish"}></Cover>
            <PopularManu></PopularManu>
            <Cover bgImg={menuImg} title={"our menu"} subTitle={"Would You Like To Try A Dish"}></Cover>
            <PopularManu></PopularManu>
            <Cover bgImg={menuImg} title={"our menu"} subTitle={"Would You Like To Try A Dish"}></Cover>
            <PopularManu></PopularManu>
        </div>
    );
};

export default Menu;