import { Parallax } from "react-parallax";

const Cover = ({ coverImg, title, subTitle }) => {
  return (
    <Parallax
      blur={{ min: -50, max:50 }}
      bgImage={coverImg}
      bgImageAlt="the dog"
      strength={-200}
    >
      <div>
        <div
          className="hero h-[700px]"
           
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md text-white ">
              <h1 className="mb-5 text-5xl font-thin  uppercase">{title}</h1>
              <p className="mb-5">{subTitle}</p>
            </div>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;
