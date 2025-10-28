import React, { useEffect, useRef } from "react";
import video1 from "/images/vid/4st1.mp4";

const VideoPlayer = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.3; // 0.5x speed (slower)
    }
  }, []);

  return (
    <div className="bg-white p-2 md:p-6 rounded-2xl flex justify-center items-center">
      <video 
        ref={videoRef}
        className="w-full rounded-lg shadow-lg pointer-events-none" 
        autoPlay 
        loop
        muted
        playsInline
      >
        <source src={video1} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
