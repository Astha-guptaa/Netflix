import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies)

  return (
    <div className='bg-black'>
      <div className='-mt-24 z-10 relative'>
        <MovieList title='Now Playing' movies={movies.nowPlayingMovies} />
        <MovieList title='Top Rated' movies={movies.topRatedMovies} />
        <MovieList title='Popular' movies={movies.popularMovies} />
        <MovieList title='Upcoming Movies' movies={movies.upcomingMovies} />
        <MovieList title='Trending in India' movies={movies.nowPlayingMovies} />
        <MovieList title='Comedy Movies' movies={movies.nowPlayingMovies} />
        <MovieList title='Thriller Movies' movies={movies.nowPlayingMovies} />
        <MovieList title='Horror Movies' movies={movies.nowPlayingMovies} />
        <MovieList title='Trending inWorld' movies={movies.nowPlayingMovies} />
        <MovieList title='Liked Shows' movies={movies.nowPlayingMovies} />
      </div>
    </div>
  )
}

export default SecondaryContainer
