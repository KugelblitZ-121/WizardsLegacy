import React from "react";
import Carousel from "../components/Carousel";

const Section5: React.FC = () => {
  return (
    <>
      <div
        className="py-5"
        style={{
          background: "linear-gradient(to top, black, #332A12)",
        }}
      >
        <h1 className="text-center p-2 md:p-3 xl:p-4 text-3xl md:text-4xl xl:text-5xl font-karla font-semibold">
          Explore the Story
        </h1>
        <div className="flex flex-col justify-center items-center my-5">
          <Carousel />
        </div>
      </div>
    </>
  );
};

export default Section5;
