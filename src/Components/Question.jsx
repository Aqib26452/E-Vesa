import React, { useState } from "react";
import plusPic from "../Assets/Question/PlusPic.png";
import NegativePic from "../Assets/Question/NegativeSignPic.png";
import BgQuestion from "../Assets/Question/QuestionBgPic.png";

const Question = () => {
  // State to control the visibility of the answer
  const [showAnswer1, setShowAnswer1] = useState(false);
  const [showAnswer2, setShowAnswer2] = useState(false);
  const [showAnswer3, setShowAnswer3] = useState(false);
  const [showAnswer4, setShowAnswer4] = useState(false);
  const [showAnswer5, setShowAnswer5] = useState(false);

  // Toggle the visibility of the answer when the plusPic image is clicked
  const handleToggle1 = () => {
    setShowAnswer1(!showAnswer1);
  };
  const handleToggle2 = () => {
    setShowAnswer2(!showAnswer2);
  };
  const handleToggle3 = () => {
    setShowAnswer3(!showAnswer3);
  };
  const handleToggle4 = () => {
    setShowAnswer4(!showAnswer4);
  };
  const handleToggle5 = () => {
    setShowAnswer5(!showAnswer5);
  };

  return (
    <div className="mt-20 bodycolbg ">
      <div className="text-center mt-5">
        <p className="SetHeadP text-base md:text-lg">Frequently</p>
        <p className="text-2xl md:text-4xl font-bold">Asked Question</p>
      </div>
      <div
        className=""
        style={{
          backgroundImage: `url(${BgQuestion})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex flex-wrap justify-between mt-14 lg:max-w-[1000px] md:max-w-[500px] mx-auto shadow-2xl bg-white p-5 rounded-lg">
          <div>
            <p className="flex gap-3">
              <p className="font-bold">Q:</p> How long does it take to get my
              visa approved?
            </p>
            {/* Conditionally render the answer based on the state */}
            {showAnswer1 && (
              <p className="mt-4 max-w-[800px] flex gap-3">
                <p className="font-bold">A:</p> Approval times vary depending on
                the visa type and the country of issue. Most applications are
                processed within a few business days.
              </p>
            )}
          </div>
          <div className="mt-1">
            <img
              src={showAnswer1 ? NegativePic : plusPic}
              alt="Toggle Answer"
              onClick={handleToggle1}
              className="cursor-pointer"
            />
          </div>
        </div>
        <div className="flex flex-wrap justify-between mt-6 lg:max-w-[1000px] md:max-w-[500px] mx-auto shadow-2xl bg-white p-5 rounded-lg">
          <div>
            <p className="flex gap-3">
              <p className="font-bold">Q:</p> Is my personal information secure?
            </p>
            {/* Conditionally render the answer based on the state */}
            {showAnswer2 && (
              <p className="mt-4 max-w-[800px] flex gap-3">
                <p className="font-bold">A:</p> Approval times vary depending on
                the visa type and the country of issue. Most applications are
                processed within a few business days.
              </p>
            )}
          </div>
          <div className="mt-1">
            <img
              src={showAnswer2 ? NegativePic : plusPic}
              alt="Toggle Answer"
              onClick={handleToggle2}
              className="cursor-pointer"
            />
          </div>
        </div>
        <div className="flex flex-wrap justify-between mt-6 lg:max-w-[1000px] md:max-w-[500px] mx-auto shadow-2xl bg-white p-5 rounded-lg">
          <div>
            <p className="flex gap-3">
              <p className="font-bold">Q:</p> Can I get help if I have trouble
              with my application?
            </p>
            {/* Conditionally render the answer based on the state */}
            {showAnswer3 && (
              <p className="mt-4 max-w-[800px] flex gap-3">
                <p className="font-bold">A:</p> Approval times vary depending on
                the visa type and the country of issue. Most applications are
                processed within a few business days.
              </p>
            )}
          </div>
          <div className="mt-1">
            <img
              src={showAnswer3 ? NegativePic : plusPic}
              alt="Toggle Answer"
              onClick={handleToggle3}
              className="cursor-pointer"
            />
          </div>
        </div>
        <div className="flex flex-wrap justify-between mt-6 lg:max-w-[1000px] md:max-w-[500px] mx-auto shadow-2xl bg-white p-5 rounded-lg">
          <div>
            <p className="flex gap-3">
              <p className="font-bold">Q:</p> What types of visas can I apply
              for through this platform?
            </p>
            {/* Conditionally render the answer based on the state */}
            {showAnswer4 && (
              <p className="mt-4 max-w-[800px] flex gap-3">
                <p className="font-bold">A:</p> Approval times vary depending on
                the visa type and the country of issue. Most applications are
                processed within a few business days.
              </p>
            )}
          </div>
          <div className="mt-1">
            <img
              src={showAnswer4 ? NegativePic : plusPic}
              alt="Toggle Answer"
              onClick={handleToggle4}
              className="cursor-pointer"
            />
          </div>
        </div>
        <div className="flex flex-wrap justify-between mt-6 lg:max-w-[1000px] md:max-w-[500px] mx-auto shadow-2xl bg-white p-5 rounded-lg">
          <div>
            <p className="flex gap-3">
              <p className="font-bold">Q:</p> How do I know what documents are
              required for my visa application?
            </p>
            {/* Conditionally render the answer based on the state */}
            {showAnswer5 && (
              <p className="mt-4 max-w-[800px] flex gap-3">
                <p className="font-bold">A:</p> Approval times vary depending on
                the visa type and the country of issue. Most applications are
                processed within a few business days.
              </p>
            )}
          </div>
          <div className="mt-1">
            <img
              src={showAnswer5 ? NegativePic : plusPic}
              alt="Toggle Answer"
              onClick={handleToggle5}
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
