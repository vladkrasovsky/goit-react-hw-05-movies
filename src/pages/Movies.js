import MoviesList from 'components/MoviesList';
import SearchForm from 'components/SearchForm';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import moviesAPI from 'services/moviedb-api';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState('idle');
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (query === '') {
      setMovies([]);
      setStatus('idle');
      return;
    }

    async function fetchMovies() {
      try {
        const { results } = await moviesAPI.searchMovies(query);
        setMovies([...results]);
        if (results.length > 0) {
          setStatus('resolved');
          return;
        }
        setStatus('empty');
      } catch (error) {
        console.log(error.message);
      }
    }

    fetchMovies();
  }, [query]);

  const getQuery = query => setSearchParams(query !== '' ? { query } : {});

  return (
    <>
      <SearchForm query={query} onSubmit={getQuery} />
      {status === 'empty' && <p>No matches for your query..</p>}
      {status === 'resolved' && <MoviesList movies={movies} />}
    </>
  );
};

export default Movies;
