import React, { useRef, useEffect } from "react";

const VideoPlayer: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const videos = [
    "/assets/img/sukun (1).mp4",
    "/assets/img/sukun (2).mp4",

  ];
  const currentVideoIndex = useRef(0);

  useEffect(() => {
    const videoElement = videoRef.current;

    const playNextVideo = () => {
      currentVideoIndex.current++;
      if (currentVideoIndex.current >= videos.length) {
        currentVideoIndex.current = 0;
      }
      if (videoElement) {
        videoElement.src = videos[currentVideoIndex.current];
        videoElement.play();
      }
    };

    if (videoElement) {
      videoElement.addEventListener("ended", playNextVideo);
      videoElement.play().catch((error) => {
        console.log("Error starting video:", error);
      });
    }

    return () => {
      if (videoElement) {
        videoElement.removeEventListener("ended", playNextVideo);
      }
    };
  }, []);

  return (
    <video ref={videoRef} className="md:w-4/4 md:h-full" controls>
      <source src={videos[currentVideoIndex.current]} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default VideoPlayer;
