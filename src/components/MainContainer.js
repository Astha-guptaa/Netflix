import React from 'react'
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'
import { useSelector } from 'react-redux'

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies)

  if (!movies) return

  const mainMovie = movies[2]

  const { title, overview, id } = mainMovie

  return (
    <div>
        <VideoBackground movieId={id} />]
        <VideoTitle title={title} overview={overview} />
    </div>
  )
}

export default MainContainer
