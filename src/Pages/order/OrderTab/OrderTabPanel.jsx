import FooadCard from "../../../Componnets/FoodCard/FooadCard";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper/modules";

const OrderTabPanel = ({ item }) => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  };
  return (
    <div>
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
        slidesPerView={3}
      >
         {item?.map((item) => (
        <SwiperSlide key={item._id}>
         
          
           
              <FooadCard item={item} ></FooadCard>
            
          
        </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default OrderTabPanel;
