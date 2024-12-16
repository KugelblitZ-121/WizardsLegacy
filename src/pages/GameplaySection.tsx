import React from "react";
import gameplayImage3 from "../assets/ScreenShots/Untitled-8.png";
import gameplayImage1 from "../assets/ScreenShots/Arena_Var4_2024-06-25_19-14-51_1920x108023.jpg";
import gameplayImage2 from "../assets/ScreenShots/Untitled-2.png";
import background from "../assets/BACKGROUND.RANDOM.png";
//import MainImage2 from "../assets/LIBRARY.HERO.COVER.jpg";

const Section4: React.FC = () => {
  const ListOfContent = [
    {
      title: "Play as the Father",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum optio sunt quibusdam nam dicta harum voluptatum eum reiciendis nobis asperiores architecto, ut quae, labore tempora illo, praesentium maiores sed mollitia.",
      image: gameplayImage1,
    },
    {
      title: "Or as the Son",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum optio sunt quibusdam nam dicta harum voluptatum eum reiciendis nobis asperiores architecto, ut quae, labore tempora illo, praesentium maiores sed mollitia.",
      image: gameplayImage2,
    },
    {
      title: "Play as the Father",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum optio sunt quibusdam nam dicta harum voluptatum eum reiciendis nobis asperiores architecto, ut quae, labore tempora illo, praesentium maiores sed mollitia.",
      image: gameplayImage3,
    },
  ];

  return (
    <div
      className="flex flex-col py-10 gap-y-2 md:gap-y-4 xl:gap-y-10 bg-fit bg-center bg-cover border border-x-0 border-y-8 border-secondary-100"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <h1 className="text-4xl md:text-5xl xl:text-6xl text-center font-karla mb-3">
        Be the <span>Wizard</span>
      </h1>
      {ListOfContent.map((content, index) => (
        <div
          key={index}
          className={`mb-5 text-center flex flex-col xl:flex-row items-center px-4 md:px-6 xl:px-10  ${
            index === 1 && "xl:flex-row-reverse"
          }`}
        >
          <img src={content.image} alt="Main Image 1" className="w-[100%] md:w-[90%] xl:w-[60%] rounded-xl" />
          <div className="w-[100%] text-center md:text-left">
            <h1 className="w-full text-center text-3xl md:text-4xl xl:text-5xl flex flex-col font-karla pt-4 xl:pt-0">
              {content.title}
            </h1>
            <div className="text-sm md:text-lg xl:text-lg text-center space-x-5 py-4 px-8 md:px-12">
              {content.description}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Section4;
