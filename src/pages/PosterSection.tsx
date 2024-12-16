import React from "react";
//import backgroundImage from "../assets/VerticalBackgroundEdited.jpg";
import backgroundImage from "../assets/VERTICAL.CAPSULE.FINAL.600.900.png";
import backgroundImage2 from "../assets/WIZARD.S.LEGACY.COVER.jpg";
import WizardsLegacyLogo from "../assets/WizardsLegacyLogo.png";
import DustParticle from "../components/DustParticle";
import { FaPlaystation, FaSteam } from "react-icons/fa";
import { FaMeta } from "react-icons/fa6";

const Section1: React.FC = () => {
  const particleCount = 50;
  const platfomrs = [
    {
      name: "PS VR",
      icon: <FaPlaystation />,
    },
    {
      name: "Steam",
      icon: <FaSteam />,
    },
    {
      name: "Meta",
      icon: <FaMeta />,
    },
  ];

  return (
    <div
      className="relative w-full h-screen flex items-center xl:items-start justify-center overflow-hidden bg-center bg-cover before:absolute before:inset-0 before:bg-black/40"
      style={{
        backgroundImage: `url(${window.innerWidth >= 1280 ? backgroundImage2 : backgroundImage})`,
      }}
    >
      <div className="absolute inset-0 bg-black/10 z-10" />

      {Array.from({ length: particleCount }).map((_, index) => (
        <DustParticle key={index} />
      ))}

      {/* Logo in the center */}
      <div className="relative z-20 mb-20 xl:mb-0">
        <img src={WizardsLegacyLogo} width={550} alt="Wizards Legacy Logo" />
      </div>

      {/* Text at the center bottom */}
      <div className="absolute bottom-20 left-0 right-0 z-20 flex flex-col text-white px-2 md:px-8 xl:px-20">
        <h1 className="text-start text-4xl md:text-5xl xl:text-6xl font-karla w-1/2">Get the Game on</h1>
        <div className="flex flex-row w-full bg-black bg-opacity-80 p-2 rounded-lg mt-2">
          {platfomrs.map((platform, index) => (
            <div key={index} className="flex flex-col items-center justify-center space-y-1 w-full">
              <div className="text-5xl md:text-6xl xl:text-8xl">{platform.icon}</div>
              <p className="text-xl md:text-2xl xl:text-3xl">{platform.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section1;
