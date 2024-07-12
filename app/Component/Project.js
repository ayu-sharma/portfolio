"use client"
import React from 'react'
import { getProjects } from '../api/airtable-api';
import { useState, useEffect, useRef } from 'react';
import Spinner from './Spinner';


function Project() {
  const [projects, setProjects] = useState([]);
  const[isLoading, setIsLoading] = useState(false);

      const enterProjects= async() => {
        setIsLoading(true);
          try {
            const result = await getProjects(); 
            // console.log("this is result",result.data.records);
            setProjects(result.data.records || [])
          }
          catch (error) {
            // console.error("Error fetching CV data:", error);
          } finally {
            setIsLoading(false);
          }
        };
        useEffect(() => {
          enterProjects();
          
        },[]);

  return (
    <>
    <div className=''>
           {/* <div className="">
   <Navbar/>
   </div> */}
        <div className='lg:px-16 py-20 '>
            <h1 className='text-black text-4xl font-bold leading-normal tracking-wide'>Projects</h1>
              {isLoading && <Spinner />}
            <div className='grid lg:grid-cols-2 place-items-center gap-10 py-10'>
  {projects?.map((project) => (
    <div key={project.id} className='w-full'>
      <div className='flex flex-col items-center lg:items-start px-4 py-3 bg-[#fcfcfce7]' style={{borderRadius: "10px"}}>
        <div className='flex flex-col px-3 w-full'>
          {/* Your project content here */}
          <h4 className='text-black text-lg py-2'>{project.fields.name}</h4>
          <p className=' text-sm font-extralight text-black'>
            {project.fields.description}
          </p>
          <div className='flex justify-between mt-5 max-w-xs w-full'>
          <a target='_blank' href={project.fields.url} className='py-2 px-7 bg-white text-sm lg:text-normal cursor-pointer text-black shadow-md shadow-slate-100' style={{borderRadius: "8px"}}>
              Github Link
            </a>
            <a target='_blank' href={project.fields.demourl} className='py-2 px-4 text-black bg-white cursor-pointer shadow-md shadow-slate-100' style={{borderRadius: "8px"}}>
              Demo
            </a>
          </div>
          <div className="border-b border-black mt-3 w-full"></div>
        </div>
      </div>
    </div>
  ))}
</div>

            </div>
            </div>
</>
  )
}

export default Project