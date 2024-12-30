import FooadCard from "../../../Componnets/FoodCard/FooadCard";


const OrderTabPanel = ({item}) => {
    return (
        <div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {
                item.map(item=> <FooadCard item={item} key={item._id}></FooadCard>)
            }
            </div>
        </div>
    );
};

export default OrderTabPanel;