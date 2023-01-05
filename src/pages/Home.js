import { useState, useEffect } from 'react';
import moviesAPI from 'services/moviedb-api';
import MoviesList from 'components/MoviesList';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchTrends() {
      try {
        const { results } = await moviesAPI.getTrendings();
        if (!results.length) {
          console.log('Oooh oh, there are no results.');
          return;
        }
        setMovies([...results]);
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchTrends();
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      <MoviesList movies={movies} />
    </div>
  );
};

export default Home;
