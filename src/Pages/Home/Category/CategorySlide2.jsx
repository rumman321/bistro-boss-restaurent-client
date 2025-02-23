// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import img1 from "../../../assets/home/slide1.jpg";
import img2 from "../../../assets/home/slide2.jpg";
import img3 from "../../../assets/home/slide3.jpg";
import img4 from "../../../assets/home/slide4.jpg";
import img5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../Componnets/SectonTitle/SectionTitle";

const CategorySlide2 = () => {
  return (
    <div className="mb-10 ">
      <section>
        <SectionTitle 
        subHeading={"From 11:00 AM to 10:00 PM"}
        heading={"Order Online"}
        >
        
        </SectionTitle>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={img1} alt="" />
          <h2 className="uppercase text-3xl text-center -mt-12 text-white">Salads</h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="" />
          <h2 className="uppercase text-3xl text-center -mt-12 text-white">Pizza</h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="" />
          <h2 className="uppercase text-3xl text-center -mt-12 text-white">Soup</h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="" />
          <h2 className="uppercase text-3xl text-center -mt-12 text-white">Desserts</h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} alt="" />
          <h2 className="uppercase text-3xl text-center -mt-12 text-white">Salads</h2>
        </SwiperSlide>
      </Swiper>
      </section>
    </div>
  );
};

export default CategorySlide2;
