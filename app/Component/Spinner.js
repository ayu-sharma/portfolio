import React from 'react'
import { RingLoader } from 'react-spinners'

function Spinner({ progress = 0 }) {
  const getLoadingMessage = (progress) => {
    if (progress <= 20) return "Welcome to my portfolio...";
if (progress <= 40) return "Get ready to explore my work...";
if (progress <= 60) return "Bringing my story to life...";
if (progress <= 80) return "Almost ready for you...";
return "Here we go!";
  };

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-[#0a0a0a] bg-opacity-95 backdrop-blur-sm z-50">
      <div className="loader mb-6">
        <RingLoader color="#8b5cf6" size={60} />
      </div>
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-white mb-2">Loading Portfolio</h2>
        <p className="text-gray-300 mb-4">{getLoadingMessage(progress)}</p>
        
        {/* Progress Bar */}
        <div className="w-64 bg-gray-700 rounded-full h-2 mb-2">
          <div 
            className="bg-gradient-to-r from-purple-600 to-blue-500 h-2 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p className="text-sm text-gray-400">{progress}% Complete</p>
      </div>
    </div>
  )
}

export default Spinner