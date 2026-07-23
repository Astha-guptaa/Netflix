import React from 'react'
import  { IMAGE_URL } from '../utils/constants'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='px-[10%] py-[15%] relative'>
      <div>
        <h1 className='font-bold text-6xl text-red-800 my-6'>{title}</h1>
        <p className='w-3/5 text-xl text-white'>{overview}</p>
      </div>
      <div className='my-6'>
        <button className='px-10 py-4 text-xl font-bold bg-white text-black rounded-full cursor-pointer hover:bg-opacity-80'>
          ▶️ Play
        </button>
        <button className='px-10 py-4 text-xl bg-gray-800 text-white rounded-full ml-4 cursor-pointer hover:bg-opacity-90'>
          More Info
        </button>
      </div>
    </div>
  )
}

export default VideoTitle
