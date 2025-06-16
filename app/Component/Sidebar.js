"use client";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { HiOutlineDownload } from "react-icons/hi";

export default function Sidebar() {
  return (
    <aside className="w-full max-w-xs h-screen bg-white border-r border-[#dedede] flex flex-col items-center px-3 py-4 overflow-y-auto">
      {/* Profile */}
      <div className="flex flex-col items-center mb-3">
        <div className="relative">
          <Image
            src="/Images/Image-hero.png"
            alt="Profile"
            width={70}
            height={70}
            className="rounded-full border-2 border-[#dedede]"
          />
          <span className="absolute bottom-1 right-1 w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full" />
        </div>
        <h2 className="mt-2 text-base font-bold text-gray-900">Ayush Sharma</h2>
        <p className="text-xs text-gray-500 mb-2">Front-End Developer</p>
        {/* Socials */}
        <div className="flex gap-1 mb-2">
          <a href="#" className="text-gray-600 hover:text-yellow-500 text-lg"><FaFacebook /></a>
          <a href="#" className="text-gray-600 hover:text-yellow-500 text-lg"><FaTwitter /></a>
          <a href="#" className="text-gray-600 hover:text-yellow-500 text-lg"><FaLinkedin /></a>
          <a href="#" className="text-gray-600 hover:text-yellow-500 text-lg"><FaGithub /></a>
          <a href="#" className="text-gray-600 hover:text-yellow-500 text-lg"><FaInstagram /></a>
          <a href="#" className="text-gray-600 hover:text-yellow-500 text-lg"><FaYoutube /></a>
        </div>
      </div>

      {/* Info */}
      <div className="space-y-1 text-xs w-full mb-3">
        <div className="flex justify-between">
          <span className="font-semibold bg-yellow-300/80 px-1 rounded">Age:</span>
          <span>24</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold bg-yellow-300/80 px-1 rounded">Residence:</span>
          <span>IN</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold bg-yellow-300/80 px-1 rounded">Freelance:</span>
          <span className="text-green-600 font-semibold">Available</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold bg-yellow-300/80 px-1 rounded">Address:</span>
          <span>Delhi, India</span>
        </div>
      </div>

      {/* Languages */}
      <div className="mb-3 w-full">
        <h3 className="font-bold text-gray-700 mb-1 text-xs">Languages</h3>
        <div className="mb-1">
          <div className="flex justify-between text-[11px]">
            <span>English</span>
            <span>100%</span>
          </div>
          <div className="w-full h-1.5 bg-[#dedede] rounded">
            <div className="h-1.5 bg-yellow-400 rounded" style={{ width: "100%" }} />
          </div>
        </div>
        <div className="mb-1">
          <div className="flex justify-between text-[11px]">
            <span>Hindi</span>
            <span>80%</span>
          </div>
          <div className="w-full h-1.5 bg-[#dedede] rounded">
            <div className="h-1.5 bg-yellow-400 rounded" style={{ width: "80%" }} />
          </div>
        </div>
        <div>
          <div className="flex justify-between text-[11px]">
            <span>Spanish</span>
            <span>60%</span>
          </div>
          <div className="w-full h-1.5 bg-[#dedede] rounded">
            <div className="h-1.5 bg-yellow-400 rounded" style={{ width: "60%" }} />
          </div>
        </div>
      </div>

      {/* Skills */}
      <div className="mb-3 w-full">
        <h3 className="font-bold text-gray-700 mb-1 text-xs">Skills</h3>
        <div className="mb-1">
          <div className="flex justify-between text-[11px]">
            <span>HTML</span>
            <span>90%</span>
          </div>
          <div className="w-full h-1.5 bg-[#dedede] rounded">
            <div className="h-1.5 bg-yellow-400 rounded" style={{ width: "90%" }} />
          </div>
        </div>
        <div className="mb-1">
          <div className="flex justify-between text-[11px]">
            <span>CSS</span>
            <span>85%</span>
          </div>
          <div className="w-full h-1.5 bg-[#dedede] rounded">
            <div className="h-1.5 bg-yellow-400 rounded" style={{ width: "85%" }} />
          </div>
        </div>
        <div className="mb-1">
          <div className="flex justify-between text-[11px]">
            <span>JS</span>
            <span>80%</span>
          </div>
          <div className="w-full h-1.5 bg-[#dedede] rounded">
            <div className="h-1.5 bg-yellow-400 rounded" style={{ width: "80%" }} />
          </div>
        </div>
        <div className="mb-1">
          <div className="flex justify-between text-[11px]">
            <span>PHP</span>
            <span>75%</span>
          </div>
          <div className="w-full h-1.5 bg-[#dedede] rounded">
            <div className="h-1.5 bg-yellow-400 rounded" style={{ width: "75%" }} />
          </div>
        </div>
        <div>
          <div className="flex justify-between text-[11px]">
            <span>WordPress</span>
            <span>85%</span>
          </div>
          <div className="w-full h-1.5 bg-[#dedede] rounded">
            <div className="h-1.5 bg-yellow-400 rounded" style={{ width: "85%" }} />
          </div>
        </div>
      </div>

      {/* Extra Skills */}
      <div className="mb-3 w-full">
        <h3 className="font-bold text-gray-700 mb-1 text-xs">Extra Skills</h3>
        <ul className="list-disc list-inside text-xs text-gray-600 space-y-0.5">
          <li>Bootstrap, Materialize</li>
          <li>Stylus, Sass, Less</li>
          <li>Gulp, Webpack, Grunt</li>
          <li>GIT Knowledge</li>
        </ul>
      </div>

      {/* Download CV Button */}
      <button className="w-full flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-1.5 rounded-lg transition text-sm mt-auto">
        DOWNLOAD CV <HiOutlineDownload className="text-lg" />
      </button>
    </aside>
  );
}