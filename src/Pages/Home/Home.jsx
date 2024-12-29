import Banner from "./Banner";
import CategorySlide2 from "./Category/CategorySlide2";
import Fetured from "./Fetured/Fetured";
import PopularManu from "./PopularManu/PopularManu";
import Testimonials from "./Testimonials/Testimonials";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            {/* <Category></Category> */}
            <CategorySlide2></CategorySlide2>
            <PopularManu></PopularManu>
            <Fetured></Fetured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;