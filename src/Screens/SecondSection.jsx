import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";

function SecondSection() {
  const words = ["Matter", "Last", "Move", "Connect"];
  const [wordIndex, setWordIndex] = useState(0);
  const wordRef = useRef(null);

  useEffect(() => {
    if (!wordRef.current) return;

    gsap.set(wordRef.current, { opacity: 0, y: 20 });

    gsap.to(wordRef.current, {
      opacity: 1,
      duration: 0.8,
      ease: "linear",
    });

    const timer = setTimeout(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 2000); 
    return () => clearTimeout(timer);
  }, [wordIndex]);

  return (
    <div className="h-[100vh] w-screen absolute left-0 top-0 flex flex-col items-center justify-center">
      <div className="flex items-center justify-center flex-col h-[70%]">
        <div className="mt-10">
          <h1 className="text-[6vw] text-white font-[nextFBold] leading-none">
            Building
          </h1>
        </div>
        <div>
          <h1 className="text-[6vw] text-white font-[nextFBold] leading-none">
            Brands
          </h1>
        </div>
        <div>
          <h1 className="text-[6vw] text-white font-[nextFBold] leading-none">
            That
          </h1>
        </div>
        <div>
          <h1
            ref={wordRef}
            className="text-[6vw] text-white leadiing-none stroke-text font-[nextFBold] leading-none"
          >
            {words[wordIndex]}
          </h1>
        </div>
      </div>

      <div className="flex mt-10 border-b items-center w-[90%] justify-between py-4 px-16 text-white font-[nextFBold]">
        {["Design Agency", "↓ Scroll to explore", "Work with us"].map((item, i) => (
          <h6 key={i}>{item}</h6>
        ))}
      </div>
    </div>
  );
}

export default SecondSection;
