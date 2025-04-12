import React from "react";
import myVideo from "/video.mp4";

function VideoBackground() {
  return (
    <div className="w-screen h-screen absolute -z-1 top-0 left-0 bg-zinc-800 flex items-center justify-center">
      <video
        className="w-full h-[100vh] fixed top-0 left-0 aspect-video object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={myVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* NavBar */}
      <nav className="fixed px-16  py-8 top-0 flex items-center justify-between left-0 w-screen ">
        <h1 className="uppercase font-[nextfBold] text-white text-4xl ">
          Velto
        </h1>
        <div className="items-center flex gap-10 text-white font-[nextFBold] tracking-wider uppercase">
          {["Portfolio", "services", "About US"].map((item, index) => (
            <h4 className="text-xs">{item}</h4>
          ))}
        </div>
      </nav>
    </div>
  );
}

export default VideoBackground;
