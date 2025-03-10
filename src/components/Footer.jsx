import React from 'react';
import  ReactGA from "react-ga4";
import { Button } from "../../@/components/ui/button"; 
import {
  Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription 
} from "../../@/components/ui/dialog"
import { Globe, Github , Twitter } from "lucide-react";
const Footer = () => {
  const twitter = "https://cdn.iconscout.com/icon/free/png-256/free-twitter-x-icon-download-in-svg-png-gif-file-formats--logo-social-media-logos-pack-icons-7740647.png?f=webp&w=256"
  const github = "https://cdn.iconscout.com/icon/free/png-256/free-github-logo-icon-download-in-svg-png-gif-file-formats--social-media-pack-logos-icons-3073768.png?f=webp&w=256"
  return (
    <>
    <hr />
    <div className="my-10 mb-20 flex flex-col items-center">
      <p className="text-center font-main text-sm text-gray-600">
        Designed and developed by{" "}
      </p>
      <Dialog>
        <DialogTrigger>
          <span className="cursor-pointer font-display text-sm text-blue-700 border-b border-blue-700 hover:text-blue-500 transition">
            Nanda Kumar M
          </span>
        </DialogTrigger>
        <DialogContent className="bg-gradient-to-b from-black to-purple-950/30 p-6 rounded-lg shadow-2xl text-white w-[90%] max-w-md border border-gray-700">
          {/* Header Section */}
          <DialogHeader>
            <DialogTitle className="text-center font-main font-semibold text-white">
              From
            </DialogTitle>
            <DialogDescription className="text-center font-display text-2xl  text-gray-400">
              2<sup>nd</sup> Year BCA 
            </DialogDescription>
          </DialogHeader>

          {/* Portfolio Link (Fully Visible & Clickable) */}
          <div className="mt-4 flex justify-center">
            <a
             onClick={() => {
              ReactGA.event({
                category: "User",
                action: "NK Button",
                label: "Nk Button" 
              });
            }}
              href="https://nandakumarm.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group inline-flex items-center justify-center px-6 py-3 text-lg font-bold text-white transition border bg-black rounded-br-4xl rounded-tr-4xl rounded-lg shadow-lg hover:scale-105"
            >
              🌐 Visit My Portfolio
              <span className="absolute -bottom-1 left-0 w-full h-1  opacity-0 group-hover:opacity-100 transition"></span>
            </a>
          </div>

          {/* Social Media Links */}
          <div className="mt-6 flex justify-center gap-5">
            {/* Twitter (X) Link */}
            <a href="https://x.com/NandaKumarM_dev" target="_blank" rel="noopener noreferrer">
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-800 shadow-md transition hover:scale-110">
                <img src={twitter} alt="Twitter" />
              </div>
            </a>

            {/* GitHub Link */}
            <a href="https://github.com/nknandakumar" target="_blank" rel="noopener noreferrer">
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-800 shadow-md transition hover:scale-110">
                <img src={github} alt="GitHub" className="w-8" />
              </div>
            </a>

            {/* Globe (Alternative Portfolio Link) */}
            <a href="https://www.instagram.com/nandakumar__05/" target="_blank" rel="noopener noreferrer">
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-800 shadow-md transition hover:scale-110">
                <Globe className="w-8 h-8 text-white" />
              </div>
            </a>
          </div>
        </DialogContent>
      </Dialog>
    </div>


      {/* Bottom Navigation */}
      <div className="fixed bottom-0 w-full md:hidden  bg-black z-20 border-t border-gray-700">
        <div className="grid grid-cols-4 gap-1 p-2">
     <a href="#home">
     <Button
            variant="ghost"
            className="flex flex-col items-center text-xs text-gray-300 hover:text-white hover:bg-gray-700"
          >
            Home
          </Button>
     </a>
         <a href="#about">
         <Button
            variant="ghost"
            className="flex flex-col items-center text-xs text-gray-300 hover:text-white hover:bg-gray-700"
          >
            About
          </Button>
         </a>
          <a href="#events">
          <Button
            variant="ghost"
            className="flex flex-col items-center text-xs text-gray-300 hover:text-white hover:bg-gray-700"
          >
            Events
          </Button>
          </a>
       <a href="#contact">
       <Button
            variant="ghost"
            className="flex flex-col items-center text-xs text-gray-300 hover:text-white hover:bg-gray-700"
          >
            Contact
          </Button>
       </a>
        </div>
      </div>
    </>
  );
}

export default Footer;
