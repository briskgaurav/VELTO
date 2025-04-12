import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import logo from "/Vector 2.png";

function CircularText({
  text = "Contact Us - Contact Us - Contact Us - Contact Us -",
}) {
  const textRef = useRef(null);
  const animationRef = useRef(null);

  useGSAP(() => {
    animationRef.current = gsap.to(textRef.current, {
      rotate: 360,
      repeat: -1,
      duration: 10,
      ease: "linear",
    });
  }, []);

  const handleMouseEnter = () => {
    animationRef.current?.pause();
  };

  const handleMouseLeave = () => {
    animationRef.current?.play();
  };

  return (
    <div
      className="w-[150px] select-none h-[150px] rounded-full flex items-center justify-center relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="logo w-[100px] h-[100px] flex items-center justify-center rounded-full">
        <img className="w-1/2 h-1/2 object-cover" src={logo} />
      </div>

      <p
        ref={textRef}
        className="text absolute w-full h-full pointer-events-none"
      >
        {text.split("").map((item, index) => (
          <span
            key={index}
            style={{
              transform: `rotate(${index * 6.9}deg)`,
              transformOrigin: `0 75px`,
            }}
            className="absolute left-1/2 text-xs uppercase font-semibold text-white"
          >
            {item}
          </span>
        ))}
      </p>
    </div>
  );
}

export default CircularText;
