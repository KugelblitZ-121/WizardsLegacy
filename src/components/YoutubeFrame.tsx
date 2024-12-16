import React from "react";

interface YouTubeFrameProps {
  videoId: string;
  frameImage: string; // Path to your frame image
}

const YouTubeFrame: React.FC<YouTubeFrameProps> = ({ videoId, frameImage }) => {
  const videoUrl = `https://www.youtube.com/embed/${videoId}`; // Embed URL for the video

  return (
    <div
      className="relative w-[90%] md:w-[80%] xl:w-[70%]" // Adjust width as needed
    >
      <img
        src={frameImage}
        alt="Frame"
        className="w-full h-auto" // Ensure frame scales correctly
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <iframe
          src={videoUrl}
          title="YouTube video player"
          frameBorder="0"
          allowFullScreen
          className="w-full h-full" // Adjust size as needed
        ></iframe>
      </div>
    </div>
  );
};

export default YouTubeFrame;
