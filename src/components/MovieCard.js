import React from 'react'
import { IMAGE_CDN_URL } from '../utils/constants'

const MovieCard = ({ movie }) => {
  return (
    <div className='w-40 pr-6'>
        <img className='rounded' src={IMAGE_CDN_URL + movie.poster_path} alt={movie.title} />
    </div>
  )
}

export default MovieCard
