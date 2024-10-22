import React from "react";
import "../Style/support.css";
import Country01 from "../Assets/Support/01.png";
import Country02 from "../Assets/Support/02.png";
import Country03 from "../Assets/Support/03.png";
import Country04 from "../Assets/Support/04.png";
import Country05 from "../Assets/Support/05.png";
import Country06 from "../Assets/Support/06.png";
import Country07 from "../Assets/Support/07.png";
import Country08 from "../Assets/Support/08.png";
import Country09 from "../Assets/Support/09.png";
import Country10 from "../Assets/Support/10.png";
import Country11 from "../Assets/Support/11.png";

const Support = () => {
  return (
    <div className="mt-20 bodycolbg">
      <div className="text-center">
        <p className="SetHeadP text-base md:text-lg">Countries</p>
        <p className="text-2xl md:text-4xl font-bold">Support Us</p>
      </div>

      {/* Scrollable Container */}
      <div className="flex overflow-x-scroll space-x-4 mt-20 w-full scrollbar-visible">
        <div className="relative flex-shrink-0  ">
          <img
            src={Country01}
            alt="Madina"
            className="object-cover transition-transform duration-500 transform hover:rotate-90"
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-all duration-500 ">
            <span className="text-white flex justify-center items-center text-lg bg-slate-800 bg-opacity-50  transition-all duration-[2000ms] h-[50%] w-[50%] rounded-full">
              <p
                className="bg-blue-700 px-3 rounded-full font-bold "
                style={{ letterSpacing: "3px" }}
              >
                Dubai
              </p>
            </span>
          </div>
        </div>
        <div className="relative flex-shrink-0 ">
          <img src={Country02} alt="Malysia" className=" object-cover" />
          <div className="absolute inset-0 flex items-center justify-center  opacity-0 hover:opacity-100 ">
            <span className="text-white flex justify-center items-center text-lg bg-slate-800 bg-opacity-50  transition-all duration-[2000ms] h-[50%] w-[50%] rounded-full">
              <p
                className="bg-blue-700 px-3 rounded-full font-bold "
                style={{ letterSpacing: "3px" }}
              >
                Combodia
              </p>
            </span>
          </div>
        </div>
        <div className="relative flex-shrink-0 ">
          <img src={Country03} alt="Madina" className=" object-cover" />
          <div className="absolute inset-0 flex items-center justify-center  opacity-0 hover:opacity-100 ">
            <span className="text-white flex justify-center items-center text-lg bg-slate-800 bg-opacity-50  transition-all duration-[2000ms] h-[50%] w-[50%] rounded-full">
              <p
                className="bg-blue-700 px-3 rounded-full font-bold "
                style={{ letterSpacing: "3px" }}
              >
                Saudi Arabia
              </p>
            </span>
          </div>
        </div>
        <div className="relative flex-shrink-0 ">
          <img src={Country04} alt="Combodia" className=" object-cover" />
          <div className="absolute inset-0 flex items-center justify-center  opacity-0 hover:opacity-100 ">
            <span className="text-white flex justify-center items-center text-lg bg-slate-800 bg-opacity-50  transition-all duration-[2000ms] h-[50%] w-[50%] rounded-full">
              <p
                className="bg-blue-700 px-3 rounded-full font-bold "
                style={{ letterSpacing: "3px" }}
              >
                Malaysia
              </p>
            </span>
          </div>
        </div>
        <div className="relative flex-shrink-0 ">
          <img src={Country05} alt="Singapor" className=" object-cover" />
          <div className="absolute inset-0 flex items-center justify-center  opacity-0 hover:opacity-100 ">
            <span className="text-white flex justify-center items-center text-lg bg-slate-800 bg-opacity-50  transition-all duration-[2000ms] h-[50%] w-[50%] rounded-full">
              <p
                className="bg-blue-700 px-3 rounded-full font-bold "
                style={{ letterSpacing: "3px" }}
              >
                {" "}
                Singapoor
              </p>
            </span>
          </div>
        </div>
        <div className="relative flex-shrink-0 ">
          <img src={Country06} alt="Indonasia" className=" object-cover" />
          <div className="absolute inset-0 flex items-center justify-center  opacity-0 hover:opacity-100 ">
            <span className="text-white flex justify-center items-center text-lg bg-slate-800 bg-opacity-50  transition-all duration-[2000ms] h-[50%] w-[50%] rounded-full">
              <p
                className="bg-blue-700 px-3 rounded-full "
                style={{ letterSpacing: "3px" }}
              >
                {" "}
                Indonasia
              </p>
            </span>
          </div>
        </div>
        <div className="relative flex-shrink-0 ">
          <img src={Country07} alt="Indonasia" className=" object-cover" />
          <div className="absolute inset-0 flex items-center justify-center  opacity-0 hover:opacity-100 ">
            <span className="text-white flex justify-center items-center text-lg bg-slate-800 bg-opacity-50  transition-all duration-[2000ms] h-[50%] w-[50%] rounded-full">
              <p
                className="bg-blue-700 px-3 rounded-full "
                style={{ letterSpacing: "3px" }}
              >
                {" "}
                Azerbaijan
              </p>
            </span>
          </div>
        </div>
        <div className="relative flex-shrink-0 ">
          <img src={Country08} alt="Indonasia" className=" object-cover" />
          <div className="absolute inset-0 flex items-center justify-center  opacity-0 hover:opacity-100 ">
            <span className="text-white flex justify-center items-center text-lg bg-slate-800 bg-opacity-50  transition-all duration-[2000ms] h-[50%] w-[50%] rounded-full">
              <p
                className="bg-blue-700 px-3 rounded-full "
                style={{ letterSpacing: "3px" }}
              >
                {" "}
                Vietnam
              </p>
            </span>
          </div>
        </div>
        <div className="relative flex-shrink-0 ">
          <img src={Country09} alt="Indonasia" className=" object-cover" />
          <div className="absolute inset-0 flex items-center justify-center  opacity-0 hover:opacity-100 ">
            <span className="text-white flex justify-center items-center text-lg bg-slate-800 bg-opacity-50  transition-all duration-[2000ms] h-[50%] w-[50%] rounded-full">
              <p
                className="bg-blue-700 px-3 rounded-full "
                style={{ letterSpacing: "3px" }}
              >
                {" "}
                Sri Lanka
              </p>
            </span>
          </div>
        </div>

        <div className="relative flex-shrink-0 ">
          <img src={Country10} alt="Indonasia" className=" object-cover" />
          <div className="absolute inset-0 flex items-center justify-center  opacity-0 hover:opacity-100 ">
            <span className="text-white flex justify-center items-center text-lg bg-slate-800 bg-opacity-50  transition-all duration-[2000ms] h-[50%] w-[50%] rounded-full">
              <p
                className="bg-blue-700 px-3 rounded-full "
                style={{ letterSpacing: "3px" }}
              >
                {" "}
                Turkey
              </p>
            </span>
          </div>
        </div>
        <div className="relative flex-shrink-0 ">
          <img src={Country11} alt="Indonasia" className=" object-cover" />
          <div className="absolute inset-0 flex items-center justify-center  opacity-0 hover:opacity-100 ">
            <span className="text-white flex justify-center items-center text-lg bg-slate-800 bg-opacity-50  transition-all duration-[2000ms] h-[50%] w-[50%] rounded-full">
              <p
                className="bg-blue-700 px-3 rounded-full "
                style={{ letterSpacing: "3px" }}
              >
                {" "}
                Jorden
              </p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
