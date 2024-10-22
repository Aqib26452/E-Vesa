import React, { useState } from "react";
import BgBlur from "../Assets/Thinks/BgBlurPic.png";
import MenPic1 from "../Assets/Thinks/MenPic1.png";
import MenPic2 from "../Assets/Thinks/MenPic2.png";
import MenPic3 from "../Assets/Thinks/MenPic3.png";
import quoteIcon from "../Assets/Thinks/thinkIcon.png";
import Star from "../Assets/Thinks/Thinkstar1.png";
import ProfilePic1 from "../Assets/Thinks/ProfilePic1.png";
import ProfilePic2 from "../Assets/Thinks/ProfilePic2.png";
import ProfilePic3 from "../Assets/Thinks/ProfilePic3.png";
import LeftArrow from "../Assets/Thinks/LeftArrow.png";
import RightArrow from "../Assets/Thinks/RightArrow.png";

const Thinks = () => {
  const images = [MenPic1, MenPic2, MenPic3]; // Array of images to cycle through
  const ProfileImages = [ProfilePic1, ProfilePic2, ProfilePic3]; // Array of Profile images to cycle through
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleRightArrowClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handleLeftArrowClick = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };
  return (
    <div className="mt-20 bodycolbg">
      <div className="text-center">
        <p className="SetHeadP text-base md:text-lg">Whats</p>
        <p className="text-2xl md:text-4xl font-bold">Our User Think</p>
      </div>
      <div className="flex flex-col md:flex-col sm:flex-col  lg:flex-row lg:justify-between items-center lg:max-w-[1000px] md:max-w-[500px]  mx-auto gap-10 mt-16">
        <div
          className="Gradient-sett w-[150px] h-[150px] md:w-[250px] md:h-[250px] relative lg:w-[50%] lg:h-[400px] "
          style={{
            background: `linear-gradient(220deg, #00f260 11.8%, #0575e6 96.03%)`,
            borderRadius: "50px",
          }}
        >
          <div
            style={{
              backgroundImage: `url(${BgBlur})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              borderRadius: "inherit",
              width: "100%",
              height: "100%",
              position: "absolute",
              top: "10%",
              left: "-10%",
            }}
          ></div>
          <img
            src={images[currentImageIndex]}
            alt=""
            className="absolute z-10 left-1/2 transform -translate-x-1/2 " // Keep the image on top
            style={{ borderRadius: "50px", bottom: "0px" }}
          />
        </div>
        <div className="lg:w-[50%]">
          <img src={quoteIcon} alt="" />
          <p className="font-bold mt-8">
            EasyVisa transformed my travel plans! The application process was
            straightforward, and I received my visa in just 24 hours. The
            support team was incredibly helpful when I had questions. Highly
            recommend for anyone needing a quick and reliable visa service.
            EasyVisa transformed my travel plans! The application process was
            straightforward.
          </p>
          <div className="flex mt-5">
            <img src={Star} alt="" />
            <img src={Star} alt="" />
            <img src={Star} alt="" />
            <img src={Star} alt="" />
          </div>
          <div className="flex justify-between items-center mt-6">
            <div className="flex items-center gap-3    ">
              <img
                className="rounded-full w-20 h-20 border border-black "
                src={ProfileImages[currentImageIndex]}
                alt=""
              />
              <p className="font-bold text-xl">John Doe</p>
            </div>
            <div className="flex gap-5">
              <img
                className="bg-blue-800 p-3 rounded-full w-[50px] h-[50px] object-cover hover:cursor-pointer hover:bg-blue-600"
                src={LeftArrow}
                alt=""
                onClick={handleLeftArrowClick}
              />
              <img
                className="bg-blue-800 p-3 rounded-full w-[50px] h-[50px] object-cover hover:cursor-pointer hover:bg-blue-600"
                src={RightArrow}
                alt=""
                onClick={handleRightArrowClick}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Thinks;
