"use client"
import Image from 'next/image';
import useIntersectionObserver from './Observer-hook';
import { useState, useEffect, useRef } from 'react';
import Navbar from './Navbar';
import Typewriter from 'typewriter-effect';
import { MdDownload } from "react-icons/md";
import { catchFile } from '../api/airtable-api';
import BarLoader from "react-spinners/BarLoader";
import axios from 'axios';
import { MoonLoader } from 'react-spinners';


function Herosection() {

    const [pdfData, setPdfData] = useState(null);
    const [downloading, setDownloading] = useState(false);
  

      
      const fetchData = async () => {
        try {
          const result = await catchFile(); 
          if (!result.error) {
            setPdfData(result.data); 
          } else {
            console.error("Error fetching CV data:", result.error);
          }
        } catch (error) {
          console.error("Error fetching CV data:", error);
        }
      };
      useEffect(() => {
        fetchData();
        
      },[]);


  const handleDownloadBtn = async (e) => {
    e.preventDefault();
    setDownloading(true);
    await fetchData();
    // console.log("Clicked", pdfData);
    if (pdfData) {
      const downloadLink = document.createElement('a');
      downloadLink.href = pdfData;
      downloadLink.download = "Resume.pdf";
      downloadLink.click();
    }

 
    else {
      console.log("Download Error")
    } 
    setDownloading(false);

// console.log("this is pdf data", pdfData)
    } 
    
  
  
  return (
    <>
    <section className={`pt-10 lg:px-11 custom:min-h-[100vh] custom:flex custom:justify-center custom:items-center`}>
    <div className={`flex flex-col lg:flex-row custom:flex custom:flex-col custom:justify-center custom:items-center lg:justify-between items-center justify-center`}>
    <div className='flex flex-col items-center lg:items-start' >


    <div className='rounded-full custom:block lg:hidden bg-[#fcfcfce7] my-4 lg:my-0'>
          <Image
          className='w-[300px] md:w-[500px]'
          src="/Images/Image-hero.png"
                 alt="Image1"
                 height={300}
                 width={550} />
        </div>


      <div>
        <h1 className='text-black mb-2 text-2xl md:text-4xl leading-2 lg:leading-none lg:text-5xl font-extrabold' >
          Hello, I am Ayush Sharma 
        </h1>
        <p className='text-black font-light lg:text-xl text-md'>
        A Frontend Developer
        </p>
        <p className='text-black font-extralight text-sm'>
            From Nurpur, Himachal Pradesh
        </p>
        <p className='text-black font-thin text-xs'>
            Currently Studying in Vellore Institute of Technology(VIT), Bhopal
        </p>
        </div>


      {/* Button for large screens */}
      <button className=' text-black text-base mt-6 px-5 lg:px-3 lg:py-2 bg-black rounded-xl hover:opacity-75 hover:cursor-pointer custom:hidden w-auto lg:block hidden' onClick={handleDownloadBtn}>
      {downloading ? (
  <>
    <BarLoader color="#eef4f3" className='my-[10px] ' />
  </>
) : (
  <>
  <div className='flex justify-center items-center gap-2 text-white'>
    <MdDownload />
    <span>Resume</span>
 </div>
  </>
)}    
      </button>
      </div>
        <div className='rounded-full lg:block custom:hidden hidden bg-[#fcfcfce7] my-4 lg:my-0'>
          <Image
          className='w-[300px] lg:w-[550px]'
          src="/Images/Image-hero.png"
                 alt="Image1"
                 height={300}
                 width={550} />
        </div>

        {/* Button for small screens */}
        <button className=' text-base mt-6 px-3 py-2 lg:mb-10 bg-black rounded-xl hover:opacity-75 hover:cursor-pointer w-full custom:w-full custom:block  lg:hidden' onClick={handleDownloadBtn}>
        {downloading ? ( <BarLoader color="#eef4f3" className='px-3 my-[10px] w-full custom:w-full mx-auto' />) :( <>
          <div className='flex justify-center items-center gap-2  text-white'>
        <MdDownload />
        <span>Resume</span>
        </div>
        </>
        )}
      </button>
        </div>
   </section>
   </>
  )

}
export default Herosection