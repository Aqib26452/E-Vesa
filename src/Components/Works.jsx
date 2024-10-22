import React from "react";
import "../Style/works.css";
import LeftPicTop from "../Assets/WorksSectionPic/WorkLeftPic.png";
import VerticalLine from "../Assets/WorksSectionPic/LineVertical.png";
import working from "../Assets/WorksSectionPic/working.png";
import Pressbutton from "../Assets/WorksSectionPic/press-button.png";
import HorizontalLine from "../Assets/WorksSectionPic/LineHorizontal.png";
import UploadFile from "../Assets/WorksSectionPic/upload-file.png";
import Creditcard from "../Assets/WorksSectionPic/credit-card.png";
import Recieved from "../Assets/WorksSectionPic/received.png";
import bgImgPic from "../Assets/WorksSectionPic/bgImg.png";
import LeftPicBottom from "../Assets/WorksSectionPic/LeftPicBottom.png";

const Works = () => {
  return (
    <div className=" mt-20 ">
      <div className="text-center">
        <p className="SetHeadP text-base md:text-lg">How</p>
        <p className="text-2xl md:text-4xl font-bold">It Works</p>
      </div>
      <div className="flex flex-col md:flex-col sm:flex-col lg:flex-row lg:justify-between items-center lg:max-w-[1000px] md:max-w-[500px]  mx-auto gap-10">
        <div
          className="max-w-[458px] "
          style={{
            backgroundImage: `url('${bgImgPic}')`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "scroll",
            backgroundColor: "#f0f0f0",
          }}
        >
          <img className="" src={LeftPicTop} alt="" />
          <img className="mt-[-50%] ms-[40%]" src={LeftPicBottom} alt="" />
        </div>
        <div className="">
          <div className="flex  justify-between max-w-[644px] gap-5 mb-5 ">
            <div className="flex gap-2">
              <div className="">
                <img src={working} alt="" />
              </div>
              <div className="max-w-[192px] ">
                <h1 className="font-bold text-xl">Choose your Visa Type</h1>
                <p className="text-[14px]">
                  Select the visa that suits your travel needs from our
                  extensive list of options.
                </p>
              </div>
            </div>
            <div className="">
              <img src={VerticalLine} alt="" />
            </div>
            <div className="flex gap-2">
              <div className="">
                <img src={Pressbutton} alt="" />
              </div>
              <div className="max-w-[192px]">
                <h1 className="font-bold text-xl">
                  Fill out the application form
                </h1>
                <p className="text-[14px]">
                  Complete the user-friendly application form with your personal
                  and travel details.
                </p>
              </div>
            </div>
          </div>
          <img src={HorizontalLine} alt="" />
          <div className="flex  justify-between max-w-[644px] gap-5 mt-5 mb-5">
            <div className="flex gap-2">
              <div className="">
                <img src={UploadFile} alt="" />
              </div>
              <div className="max-w-[192px] ">
                <h1 className="font-bold text-xl">Upload Required Documents</h1>
                <p className="text-[14px]">
                  Securely upload scanned copies of your necessary documents.
                </p>
              </div>
            </div>
            <div className="">
              <img src={VerticalLine} alt="" />
            </div>
            <div className="flex gap-2">
              <div className="">
                <img src={Creditcard} alt="" />
              </div>
              <div className="max-w-[192px]">
                <h1 className="font-bold text-xl">Pay and Submit</h1>
                <p className="text-[14px]">
                  Make your payment through our secure gateway and submit your
                  application.
                </p>
              </div>
            </div>
          </div>
          <img src={HorizontalLine} alt="" />
          <div className="flex   max-w-[644px] gap-5 mt-5 mb-5">
            <div className="flex gap-2">
              <div className="">
                <img src={Recieved} alt="" />
              </div>
              <div className="max-w-[192px] ">
                <h1 className="font-bold text-xl">Receive Your Visa</h1>
                <p className="text-[14px]">
                  Once approved, receive your electronic visa via email—ready to
                  print and take on your trip.
                </p>
              </div>
            </div>
            <div className="">
              <img src={VerticalLine} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
