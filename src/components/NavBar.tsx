import React from "react";
import logo from "../assets/WIDE.COMIC.LOGO.png";
import { FaXTwitter } from "react-icons/fa6";
import { FaDiscord, FaLinkedin, FaFacebookF } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";

const NavBar: React.FC = () => {
  return (
    <nav className="bg-black bg-opacity-60 text-white p-2 absolute z-50 w-full">
      <div className="container mx-auto flex flex-row justify-between items-center">
        <div className="text-lg font-bold">
          <img src={logo} width={70} />
        </div>
        <div className="flex flex-row space-x-4 text-center text-lg md:text-xl xl:text-3xl">
          <a href="#" className="hover:text-gray-300">
            <FaDiscord />
          </a>
          <a href="#" className="hover:text-gray-300">
            <FaXTwitter />
          </a>
          <a href="#" className="hover:text-gray-300">
            <FaLinkedin />
          </a>
          <a href="#" className="hover:text-gray-300">
            <IoLogoInstagram />
          </a>
          <a href="#" className="hover:text-gray-300">
            <FaFacebookF />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
