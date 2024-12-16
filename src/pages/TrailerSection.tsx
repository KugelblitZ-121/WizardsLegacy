import React from "react";
import YouTubeFrame from "../components/YoutubeFrame";
import frame from "../assets/FRAME.2560.1440.png";
import backgeoundImage from "../assets/IMMERSIVE.BACKDROP.png";
const Section3: React.FC = () => {
  const videoId = "LnO6i8W6EtQ";
  return (
    <div
      className="bg-cover bg-center before:absolute before:inset-0 before:bg-black/40"
      style={{
        backgroundImage: `url(${backgeoundImage})`,
      }}
    >
      <div className="my-10 flex flex-col items-center justify-center">
        <YouTubeFrame videoId={videoId} frameImage={frame} />
      </div>
    </div>
  );
};

export default Section3;
