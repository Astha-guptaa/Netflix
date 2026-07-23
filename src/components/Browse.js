import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import useTopRatedMovies from '../hooks/useTopRatedMovies'
import usePopularMovies from '../hooks/usePopularMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import useUpcomingMovies from '../hooks/useUpcomingMovies'

const Browse = () => {
  useNowPlayingMovies()
  useTopRatedMovies()
  usePopularMovies()
  useUpcomingMovies()

  return (
    <div >
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  )
}

export default Browse
