import React from "react";
import Logo from "../../assets/logo.png";
import { AiOutlineGoogle } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <div>
      <footer className="">
        <div className="footer p-10 container mx-auto">
          <div className="text-left">
            <img className="mr-auto" src={Logo} alt="" />
            <p>
              <span className="text-xl font-semibold">Swap Deal LTD</span>
              <br />
              <span className="font-thin">
                
              </span>
            </p>
            <div className="flex text-2xl pt-2">
              <AiOutlineGoogle className="cursor-pointer mr-2 w-8 h-8 p-2"></AiOutlineGoogle>
              <FaTwitter className="cursor-pointer mr-2 w-8 h-8 p-2"></FaTwitter>
              <FiInstagram className="cursor-pointer mr-2 w-8 h-8 p-2"></FiInstagram>
              <AiFillLinkedin className="cursor-pointer w-8 h-8 p-2"></AiFillLinkedin>
            </div>
          </div>
          <div>
            <span className="font-semibold text-lg md:mb-5">About</span>
            <a href="/" className="link link-hover font-thin">
              Home
            </a>
            <a href="/" className="link link-hover font-thin">
              Service
            </a>
            <a href="/" className="link link-hover font-thin">
              Contact
            </a>
          </div>
          <div>
            <span className="font-semibold text-lg md:mb-5">Company</span>
            <a href="/" className="link link-hover font-thin">
              Why Swap Deal 
            </a>
            <a href="/" className="link link-hover font-thin">
              About
            </a>
            <a href="/" className="link link-hover font-thin">
              Feedback
            </a>
          </div>
          <div>
            <span className="font-semibold text-lg md:mb-5">Support</span>
            <a href="/" className="link link-hover font-thin">
              Support Center
            </a>
            <a href="/" className="link link-hover font-thin">
              Terms and Conditions
            </a>
            <a href="/" className="link link-hover font-thin">
              Privacy policy
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
