import React from "react";
import backgroundImage from "../assets/LIBRARY.HERO.COVER.jpg";
import { IoLogoInstagram } from "react-icons/io";
import { FaFacebookF, FaDiscord, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer: React.FC = () => {
  return (
    <div
      className="relative w-full h-auto py-5 bg-center bg-cover text-white before:absolute before:inset-0 before:bg-black/50"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: "center 30%",
      }}
    >
      <div className="relative z-10 flex flex-col md:flex-row justify-between items-center text-center lg:text-start px-6 md:px-16">
        {/* Left Section: Contact Information */}
        <div className="mb-3 md:mb-0">
          <h2 className="text-lg font-semibold">Contact Us</h2>
          <p className="text-sm mt-2">123 Library Street, Book Town, 56789</p>
          <p className="text-sm">Email: info@example.com</p>
          <p className="text-sm">Phone: +123 456 789</p>
        </div>

        {/* Middle Section: Navigation */}
        <div className="mb-3 md:mb-0">
          <h2 className="text-lg font-semibold">Quick Links</h2>
          <ul className="flex flex-row gap-2 mt-2">
            <li>
              <a href="#home" className="hover:text-yellow-400">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-yellow-400">
                About Us
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-yellow-400">
                Services
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-yellow-400">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Right Section: Social Media */}
        <div className="flex gap-4 text-xl md:text-2xl xl:text-3xl">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
            <FaFacebookF />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
            <FaXTwitter />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
            <IoLogoInstagram />
          </a>
          <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
            <FaDiscord />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
            <FaLinkedin />
          </a>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="relative z-10 mt-2 md:mt-4 xl:mt-6 text-center text-sm text-gray-400">
        <p>&copy; {new Date().getFullYear()} Wide Game Studio. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
