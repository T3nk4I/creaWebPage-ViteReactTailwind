import React from "react";
import videoo from "../assets/whiteMovingBackground.webm";

const VideoBack = () => {
  return (
    <div className=" h-0 w-full">
      <video
        src={videoo}
        autoPlay
        loop
        muted
        className=" w-full object-cover z-0"
      />
    </div>
  );
};

export default VideoBack;
