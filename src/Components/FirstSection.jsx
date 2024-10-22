import React from "react";
import "../Style/FirstSection.css";
import "../sass/style.css";
import FrstPicRightSection from "../Assets/RightFirstSectionPic.png";
import TravelPic from "../Assets/TravellingPicc.png";
import BgImgFirstSection from "../Assets/bgImGFirstSection.png";
import PlaneBtnImg from "../Assets/planePicFirstSection.png";

const FirstSection = () => {
  return (
    <div className="bodycolbg">
      <div className="flex relative ">
        <div
          className="setPicFirstSection w-[220px]  "
          style={{
            backgroundImage: `url(${FrstPicRightSection})`, // Apply the background image
            backgroundSize: "contain", // Makes sure the background covers the entire div
            backgroundPosition: "left", // Centers the background image
            backgroundRepeat: "no-repeat", // Prevents the image from repeating
          }}
        ></div>

        <div className="flex justify-end  w-full">
          <div className="flex items-center justify-between w-full  ">
            <div className="max-w-[535px]">
              <p className="setHead">
                Simplify Your Travel with
                <span>
                  <br />
                  Our Electronic
                </span>{" "}
                Visa <br />
                Platform
              </p>
              <p className="max-w-[350px] text-[14px] font-normal text-left mt-3">
                Effortlessly apply for your visa online and get ready for your
                next adventure.
              </p>
              <div className="btnBgcolorr flex justify-center items-center mt-3 gap-4 font-bold text-white">
                <img src={PlaneBtnImg} alt="" />
                <button className=" max-w-[209px] max-h-[60px] ">
                  View More
                </button>
              </div>
            </div>

            <div
              className="setPicFirstSection max-w-[550px] max-h-[500px] "
              style={{
                backgroundImage: `url(${BgImgFirstSection})`, // Apply the background image
                backgroundSize: "600px 900px", // Makes sure the background covers the entire div
                backgroundPosition: "right", // Centers the background image
                backgroundRepeat: "no-repeat",
                // width: "300px",/
              }}
            >
              <img className="" src={TravelPic} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
