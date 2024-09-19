"use client";
import Image from 'next/image';
import { MdDownload } from "react-icons/md";
import { useState, useEffect } from 'react';
import BarLoader from 'react-spinners/BarLoader';
import axios from 'axios';
import { catchFile } from '../api/airtable-api';

function Herosection() {
  const [downloading, setIsDownloading] = useState(false);
  const [pdfDownloadFile, setPdfFile] = useState();

  
  const pdfFile = async () => {
    try {
      const response = await catchFile()
      if (!response.error) {
        // console.log("resopose is successful")
        setPdfFile(response.data)
      }else {
        // console.log("Error in fetching data", response.error);
      }
    }catch (e) {
      // console.error('Error:', e);
    }
  }
  // console.log(pdfDownloadFile,"this is ")
  
  useEffect(() => {
    pdfFile();
  }, []);
  
  const handleDownloadBtn = async (e) => {
    e.preventDefault();
    // console.log("download start",)
    setIsDownloading(true);
    await pdfFile();
    if (pdfDownloadFile){
      const downloadPdf = document.createElement('a');
      downloadPdf.href = pdfDownloadFile[0];
      downloadPdf.download = 'Ayush_Sharma_Resume.pdf';
      downloadPdf.click();
    }
    else {
      // console.log("Download Error")
    } 
    setIsDownloading(false);
  }
console.log(downloading, "this is downloading")
  return (
    <section className="min-h-screen flex justify-center bg-[url('/Images/Image-hero.png')] lg:bg-none bg-center bg-cover lg:bg-black">
      <div className="grid grid-cols-1 lg:grid-cols-3 w-full max-w-screen-3xl">
        {/* Left Section with Text */}
        <div className="col-span-1 flex flex-col justify-center text-white md:pl-20 pl-10 lg:pl-36 lg:bg-none bg-black bg-opacity-50">
          <h1 className="mb-3">
            <span className='text-2xl tracking-wide lg:text-4xl relative font-semibold'>My Name is </span> <br/> <span className='lg:text-7xl md:text-6xl text-4xl  absolute tracking-wider font-extrabold'>Ayush Sharma</span> 
          </h1>
          <div className='relative'>
          <p className="lg:text-sm text-xs font-light mb-2 mt-[30px] md:pt-6 lg:pt-9">I'm a FullStack Web Developer</p>
          <button
            className="absolute top-7 md:top-14 lg:top-20 mt-4 py-2 px-4 bg-yellow-500 text-black font-bold flex items-center gap-2 rounded hover:bg-yellow-600 transition-all"
            onClick={handleDownloadBtn}
          >
            {downloading ? (
              <BarLoader color="#000000" />
            ) : (
              <>
                <MdDownload />
                <div className='text-sm md:text-md lg:text-xl'>Resume</div>
              </>
            )}
          </button>
        </div>
            </div>
        {/* Right Section with Image */}
        <div className="col-span-2 hidden  lg:flex w-full">
          <div className="overflow-hidden h-full w-full">
            <Image
              src="/Images/Image-hero.png" 
              alt="Hero Image"
              width={800}
              height={700}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Herosection;
