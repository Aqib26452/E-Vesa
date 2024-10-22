import React from "react";
import LogoPic1 from "../Assets/LogoPic1.png";
import LogoPic2 from "../Assets/VisaPicLogo.png";
import LogoPic3 from "../Assets/LogoPic3.png";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-white mt-32">
      <div className="flex flex-col justify-center ">
        <div className="flex items-center mt-10 justify-center">
          <div className="">
            <img src={LogoPic1} alt="" />
          </div>
          <div className="relative">
            <img className="absolute right-0" src={LogoPic3} alt="" />
            <img src={LogoPic2} alt="" />
          </div>
        </div>
        <div className="flex justify-center mt-8">
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
        <div className="flex justify-center mt-5 gap-5">
          <FaFacebook style={{ color: "#4267B2", fontSize: "24px" }} />
          <FaInstagram style={{ color: "#E4405F", fontSize: "24px" }} />
          <FaLinkedin style={{ color: "#0A66C2", fontSize: "24px" }} />
          <FaWhatsapp style={{ color: "#25D366", fontSize: "24px" }} />
        </div>
        <div className="text-[12px] text-center mt-5">
          <p>@2024 E-Visa. All rights reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
