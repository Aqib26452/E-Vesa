import React from "react";
import "../sass/style.css";
import "../Style/overview.css";
import OverviewRightPic from "../Assets/OverViewRightPic.png";
import PlaneBtnImg from "../Assets/planePicFirstSection.png";

const Overview = () => {
  return (
    <div className="relative   mt-20 ">
      <div className="text-center">
        <p className="SetHeadP text-base md:text-lg">Who</p>
        <p className="text-2xl md:text-4xl font-bold">We Are</p>
      </div>

      <div
        className="w-[200px] h-[200px] md:w-[350px] md:h-[350px] absolute "
        style={{
          backgroundImage: `url(${OverviewRightPic})`,
          backgroundSize: "contain",

          backgroundRepeat: "no-repeat",
          top: "0px",
          left: "0px",
        }}
      ></div>

      <div className="lg:max-w-[1000px] md:max-w-[500px]  mx-auto mt-16 md:mt-24 relative z-10 ">
        <div className="flex flex-col-reverse md:flex-col-reverse sm:flex-col-reverse lg:flex-row lg:justify-between justify-around items-center gap-6">
          <div className=" sm:max-w-[80%] w-[70%] sm:mx-auto lg:mx-0">
            <p className="font-bold text-lg md:text-xl">Overview</p>
            <p className="lg:max-w-[800px]  text-[12px] md:text-[14px] mt-2 ">
              The E-Visa Platform revolutionizes visa applications by offering a
              seamless, fully online submission process. Designed to replace
              outdated paper systems, it enables users, especially overseas
              Pakistanis, to manage their applications from anywhere,
              eliminating the need for embassy visits. This user-friendly
              platform simplifies the process, making visa applications faster,
              more efficient, and more accessible.
            </p>

            <div className="btnBgcolorr flex  justify-center items-center mt-5 gap-5 font-bold text-white">
              <img src={PlaneBtnImg} alt="Plane" className="" />
              <button className="">View More</button>
            </div>
          </div>

          <div className="w-[150px] h-[150px] md:w-[250px] md:h-[250px] Gradient-settt"></div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
