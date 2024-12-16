import React from "react";
import backgroundImage from "../assets/BACKGROUND.CAPSULE.jpg";
import member1 from "../assets/Members/1.jpg";
import member2 from "../assets/Members/2.jpg";
import member3 from "../assets/Members/3.jpg";
import member4 from "../assets/Members/4.jpg";
import member5 from "../assets/Members/5.jpg";
import member6 from "../assets/Members/6.jpg";
import member7 from "../assets/Members/7.jpg";
import member8 from "../assets/Members/8.jpg";
import member9 from "../assets/Members/9.jpg";
import member10 from "../assets/Members/10.jpg";
import flame from "../assets/FLAME.png";

//import { motion } from "framer-motion";

const Section2: React.FC = () => {
  const members = [
    {
      name: "Abdulkadir",
      image: member1,
      position: "3D Designer",
    },
    {
      name: "Ahmed",
      image: member5,
      position: "CTO",
    },
    {
      name: "Mert",
      image: member8,
      position: "CEO",
    },
    {
      name: "Melih",
      image: member7,
      position: "Creative Director",
    },
    {
      name: "M.Ataberk",
      image: member2,
      position: "Marketing Director",
    },
    {
      name: "Şafak Bera",
      image: member10,
      position: "Game Developer",
    },
    {
      name: "Yusuf Sait",
      image: member3,
      position: "3D Designer",
    },
    {
      name: "Burak",
      image: member4,
      position: "VFX artist",
    },
    {
      name: "Sadik",
      image: member9,
      position: "Game Developer",
    },
    {
      name: "Güneş",
      image: member6,
      position: "Community Manager ",
    },
  ];
  return (
    <>
      <div
        className="relative w-full  overflow-hidden bg-cover bg-top"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="w-full h-fit flex flex-col items-center justify-center gap-y-5 px-6 py-2">
          <div className="header">
            <img src={flame} alt="flame" className="w-32 md:w-62 xl:w-72 mx-auto" />
            <h1 className="w-full text-4xl font-protest text-white text-center">About the Team</h1>
          </div>
          <div className="body bg-black bg-opacity-50 p-2 mb-4 rounded-lg text-center">
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 place-content-center">
              {members.map((member, index) => (
                <div key={index} className="flex flex-col items-center justify-center gap-x-2 w-full place-self-center">
                  <img src={member.image} alt={member.name} className="w-[70%] md:[w-60%] xl:w-[50%] rounded-full" />
                  <span className="text-base md:text-xl text-white font-semibold">{member.name}</span>
                  <span className="text-sm md:text-base xl:text-lg text-white">{member.position}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section2;
