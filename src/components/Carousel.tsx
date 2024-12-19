import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import image1 from "../assets/Cinematic_Comic_withoutlogo/CINEMATIC.COMIC.PAGE.1.png";
import image2 from "../assets/Cinematic_Comic_withoutlogo/CINEMATIC.COMIC.PAGE.2.png";
import image3 from "../assets/Cinematic_Comic_withoutlogo/CINEMATIC.COMIC.PAGE.3.png";
import image4 from "../assets/Cinematic_Comic_withoutlogo/CINEMATIC.COMIC.PAGE.4.png";
import image5 from "../assets/Cinematic_Comic_withoutlogo/CINEMATIC.COMIC.PAGE.5.png";
import image6 from "../assets/Cinematic_Comic_withoutlogo/CINEMATIC.COMIC.PAGE.6.png";
import frameImage from "../assets/FRAME.2560.1440.png";
import nextPage from "../assets/NEXT.PAGE.LOGO.png";

const images = [image1, image2, image3, image4, image5, image6];

const Carousel: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [direction, setDirection] = useState(0); // To track swipe direction

  const nextImage = () => {
    setDirection(1);
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setDirection(-1);
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  // Handle dragging to switch images
  const swipeConfidenceThreshold = 10000;

  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  return (
    <div className="relative w-[90%] xl:w-[80%] overflow-hidden border border-4 border-secondary-100 rounded-lg">
      <img
        src={frameImage}
        alt="Frame"
        className="w-full h-auto" // Ensure frame scales correctly
      />
      {/* Image Carousel */}
      <div className="absolute inset-0 flex items-center justify-center">
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            key={currentImage}
            src={images[currentImage]}
            alt={`Image ${currentImage + 1}`}
            className="absolute "
            custom={direction}
            initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction < 0 ? 100 : -100 }}
            transition={{ duration: 0.5 }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              console.log(e);

              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                nextImage();
              } else if (swipe > swipeConfidenceThreshold) {
                prevImage();
              }
            }}
          />
        </AnimatePresence>

        {/* <button
          onClick={prevImage}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/50 text-white p-2"
        >
          Prev
        </button> */}
        <button onClick={nextImage} className="absolute bottom-1/4 translate-y-1/2 right-0 p-4">
          <img src={nextPage} className="w-20 md:w-32 lg:w-44 xl:w-60" />
        </button>
      </div>

      {/* Controls */}
    </div>
  );
};

export default Carousel;
