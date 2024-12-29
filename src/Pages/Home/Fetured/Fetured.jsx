import SectionTitle from "../../../Componnets/SectonTitle/SectionTitle";
import featureImg from "../../../assets/home/featured.jpg";
import "./Feature.css"

const Fetured = () => {
  return (
    <div className="featuredItem text-white pt-8 my-20 bg-fixed">
      <SectionTitle
        subHeading={"Check it out"}
        heading={"Featured items"}
      ></SectionTitle>
      <div className="md:flex items-center px-24 pb-14 pt-8 justify-center gap-10 bg-opacity-30 bg-slate-400">
        <div>
          <img src={featureImg} alt="" />
        </div>
        <div>
          <p>August 25, 2025</p>
          <p className="uppercase">Where I get Some Food ?</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            voluptate facere, deserunt dolores maiores quod nobis quas quasi.
            Eaque repellat recusandae ad laudantium tempore consequatur
            consequuntur omnis ullam maxime tenetur.
          </p>
          <button className="btn btn-outline border-0 border-b-2 text-red-600">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default Fetured;
