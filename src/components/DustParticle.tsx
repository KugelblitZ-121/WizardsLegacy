import React from "react";
import { motion } from "framer-motion";

const DustParticle: React.FC = () => {
  const xMove = Math.random() * 100 - 50;
  const yMove = Math.random() * 100 - 50;
  const duration = Math.random() * 10 + 5;

  return (
    <motion.div
      className="absolute bg-gray-500 rounded-full"
      style={{
        width: `${Math.random() * 3 + 2}px`,
        height: `${Math.random() * 3 + 2}px`,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        opacity: Math.random(),
      }}
      animate={{
        x: [0, xMove, -xMove],
        y: [0, yMove, -yMove],
        opacity: [0.5, 1, 0.5],
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
};

export default DustParticle;
