import React from "react";
import LogoPic1 from "../Assets/LogoPic1.png";
import LogoPic2 from "../Assets/VisaPicLogo.png";
import LogoPic3 from "../Assets/LogoPic3.png";
import ProfileLogoPic from "../Assets/ProfilePicLogo.png";
import "../Style/style.css";
import "../sass/style.scss";

const Navbar = () => {
  return (
    <div className="bgSetNav">
      <div className="lg:max-w-[1000px] md:max-w-[800px]  mx-auto flex lg:justify-between justify-around items-center ">
        <div className="flex items-center">
          <div className="">
            <img src={LogoPic1} alt="" />
          </div>
          <div className="relative">
            <img className="absolute right-0" src={LogoPic3} alt="" />
            <img src={LogoPic2} alt="" />
          </div>
        </div>
        <div className="">
          <ul className="flex gap-8">
            <div className="HoverEffectUL">
              <li className="">Home</li>
              <p className=" setHoverLine"></p>
            </div>
            <div className="HoverEffectUL">
              <li>How it Works</li>
              <p className=" setHoverLine"></p>
            </div>
            <div className="HoverEffectUL">
              <li>Apply Now</li>
              <p className=" setHoverLine"></p>
            </div>
            <div className="HoverEffectUL">
              <li>Status</li>
              <p className=" setHoverLine"></p>
            </div>
            <div className="HoverEffectUL">
              <li>Support</li>
              <p className=" setHoverLine"></p>
            </div>
          </ul>
        </div>
        <div className="">
          <img src={ProfileLogoPic} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
