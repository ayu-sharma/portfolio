"use client";
import React from "react";
import Image from "next/image";

const MinimalPhotography = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Photography
              </span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              When I&apos;m not coding, you&apos;ll find me capturing moments through my camera lens. 
              I love exploring street photography, landscapes, and portraits.
            </p>
          </div>

          {/* Single highlight image */}
          <div className="mb-8">
            <div className="relative inline-block rounded-lg">
              <Image
                src="/Images/photography.jpeg"
                alt="Photography sample"
                width={320}
                height={240}
                className="w-80 h-60 object-cover rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
            </div>
          </div>

          {/* Instagram link */}
          <div className="flex justify-center">
            <a
              href="https://www.instagram.com/ayushsharmaclickz?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" // Replace with your Instagram
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-x-2 px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base text-gray-700 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors duration-300"
            >
              <Image src="/Images/instagram.png" alt="Instagram" width={20} height={20} />
              View my photography on Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MinimalPhotography;