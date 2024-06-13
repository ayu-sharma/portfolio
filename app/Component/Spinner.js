import React from 'react'
import { RingLoader } from 'react-spinners'

function Spinner() {
  return (
        <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-50 backdrop-blur-sm z-50">
        <div className="loader"><RingLoader color="rgba(0, 0, 0, 1)" /></div>
        
    </div>
  )
}

export default Spinner