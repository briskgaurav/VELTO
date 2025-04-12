import React from "react";
import { GoArrowRight } from "react-icons/go";
import CircularText from "../Components/CircularText";

function HomeScreen() {
  return (
    <>
      <div className="w-1/2 min-h-[88vh]">
        <div className="absolute w-[40%] bottom-28">
          <p className="uppercase text-[30px] leading-8 font-[nextFBold] text-white">
            We bring ideas to life through thoughtful design and meaningful
            experiences.
          </p>
          <div className="flex items-center justify-center gap-2 mt-8  text-white border rounded-full w-[50%] py-3 font-[nextFMedium]">
            <p className="text-[22px]">Get Started</p>
            <GoArrowRight size={30} />
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 right-20">
        <CircularText />
      </div>
    </>
  );
}

export default HomeScreen;
