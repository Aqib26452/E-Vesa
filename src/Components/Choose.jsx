import React from "react";
import "../Style/choose.css";
import Card1 from "../Assets/ChooseSection/ChooseCard1.png";
import Card2 from "../Assets/ChooseSection/ChooseCard2.png";
import Card3 from "../Assets/ChooseSection/ChooseCard3.png";
import Card4 from "../Assets/ChooseSection/ChooseCard4.png";
import Choose01 from "../Assets/ChooseSection/01.png";
import Choose02 from "../Assets/ChooseSection/02.png";
import Choose03 from "../Assets/ChooseSection/03.png";
import Choose04 from "../Assets/ChooseSection/04.png";
const Choose = () => {
  return (
    <div className="mt-20 bodycolbg">
      <div className="text-center">
        <p className="SetHeadP text-base md:text-lg">Why</p>
        <p className="text-2xl md:text-4xl font-bold">Choose Us</p>
      </div>
      <div className="flex flex-wrap justify-around mt-14 lg:max-w-[1000px] md:max-w-[500px] mx-auto ">
        <div className="lg:w-1/5 md:w-2/5   sm:w-2/3 sm:mt-14  w-[70%] flex justify-center flex-col mt-5 p-4 bg-white thisbgwhiteimg">
          <div className="flex justify-between  w-full  ">
            <img
              className=" mt-[-50px]  object-contain rounded px-2 img-bg-blue"
              src={Card1}
              alt=""
            />
            <img className=" " src={Choose01} alt="" />
          </div>
          <div className="mt-5">
            <h2 className="mt-3 font-bold">Streamlined Process</h2>
            <p className="text-[14px]">
              Apply for visas quickly with a user-friendly interface that guides
              you through each step
            </p>
          </div>
        </div>
        <div className="lg:w-1/5 md:w-2/5  sm:w-2/3 sm:mt-14  w-[70%] flex justify-center flex-col mt-5 p-4 bg-white thisbgwhiteimg">
          <div className="flex justify-between  w-full  ">
            <img
              className=" mt-[-50px]  object-contain rounded px-2 img-bg-blue"
              src={Card2}
              alt=""
            />
            <img className=" " src={Choose02} alt="" />
          </div>
          <div className="mt-5">
            <h2 className="mt-3 font-bold">Secure Payments</h2>
            <p className="text-[14px]">
              Your payments are safe with multiple secure payment gateways
              including Easypaisa.
            </p>
          </div>
        </div>
        <div className="lg:w-1/5 md:w-2/5  sm:w-2/3 sm:mt-14  w-[70%] flex justify-center flex-col mt-5 p-4 bg-white thisbgwhiteimg">
          <div className="flex justify-between  w-full  ">
            <img
              className=" mt-[-50px]  object-contain rounded px-2 img-bg-blue"
              src={Card3}
              alt=""
            />
            <img className=" " src={Choose03} alt="" />
          </div>
          <div className="mt-5">
            <h2 className="mt-3 font-bold">Document Requirements</h2>
            <p className="text-[14px]">
              Ensure smooth processing with strict regulations on document
              quality and size.
            </p>
          </div>
        </div>
        <div className="lg:w-1/5 md:w-2/5   sm:w-2/3 sm:mt-14 w-[70%] flex justify-center flex-col mt-5 p-4 bg-white thisbgwhiteimg">
          <div className="flex justify-between  w-full  ">
            <img
              className=" mt-[-50px]  object-contain rounded px-2 img-bg-blue"
              src={Card4}
              alt=""
            />
            <img className=" " src={Choose04} alt="" />
          </div>
          <div className="mt-5">
            <h2 className="mt-3 font-bold">Valid Passport Requirement</h2>
            <p className="text-[14px]">
              Only accept applications from users with a passport that has at
              least 9 months.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choose;
