import React from "react";
import CircularText from "./Components/CircularText";
import HomeScreen from "./Screens/HomeScreen";
import VideoBackground from "./Screens/VideoBackground";

function App() {
  return (
    <>
      <VideoBackground />
      <div className="relative px-16 py-10">
        <HomeScreen />
      </div>
     
    </>
  );
}

export default App;
