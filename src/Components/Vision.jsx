import React from "react";
import vision1 from "../Assets/Vision/vision1.png";
import vision2 from "../Assets/Vision/vision2.png";
import vision3 from "../Assets/Vision/vision3.png";
import bgVision from "../Assets/Vision/VisionBgPicRight.png";

const Vision = () => {
  return (
    <div className="mt-20 bodycolbg">
      <div className="text-center">
        <p className="SetHeadP text-base md:text-lg">Our</p>
        <p className="text-2xl md:text-4xl font-bold">Future Vision</p>
      </div>
      <div className="flex flex-col md:flex-col sm:flex-col  lg:flex-row lg:justify-between items-center lg:max-w-[1000px] md:max-w-[500px]  mx-auto gap-10 mt-16">
        <div className="lg:w-[40%]  ">
          <h1 className="font-bold text-xl">
            Expanding Beyond Visa <br />
            Assistance
          </h1>
          <p className="max-w-[485px] mt-10">
            At the E-Visa Platform, we believe in constantly evolving to meet
            the needs of our users. While our primary focus is on simplifying
            the visa application process, we understand that planning a trip
            involves much more than just obtaining a visa.
          </p>

          <p className="max-w-[485px] mt-10">
            That’s why we’re excited to share our vision for the future—one
            where our platform becomes your comprehensive travel companion.
          </p>
        </div>
        <div
          className="  lg: w-[60%] "
          style={{
            backgroundImage: `url(${bgVision})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <div className="flex lg:flex-row md:flex-col flex-col sm:flex-col justify-between gap-7 items-center mt-5">
            <div className="relative max-w-[183px] max-h-[183px]   lg:mt-32 ">
              <img className="lg:mt-16 " src={vision1} alt="" />
              <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-[13px] bg-blue-800 rounded text-white lg:mt-16">
                Hotel Bookings
              </p>
            </div>
            <div className="relative max-w-[245px] max-h-[245px]   lg:mt-32 ">
              <img className=" " src={vision2} alt="" />
              <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-[13px] bg-blue-800 rounded text-white  ">
                Air Tickets
              </p>
            </div>
          </div>
          <div className="flex justify-center lg:mt-5">
            <div className="relative max-w-[183px] max-h-[183px]   lg:mt-28 ">
              <img className=" " src={vision3} alt="" />
              <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-[13px] bg-blue-800 rounded text-white">
                Add More
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vision;
