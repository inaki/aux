import React from "react";
import VideoPlayer from "react-background-video-player";
import video from "./video.mp4";

const VIDEO_WIDTH = 1920;
const VIDEO_HEIGHT = 1080;

export const VideoBackground = () => {
  return (
    <div className="video-background">
      <VideoPlayer className="video" src={video} autoPlay={true} muted={true} />
    </div>
  );
};
