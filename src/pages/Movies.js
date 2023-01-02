import MoviesList from 'components/MoviesList';
import SearchForm from 'components/SearchForm';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import moviesAPI from 'services/moviedb-api';

export const Movies = () => {
  const [movies, setMovies] = useState();
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') || '';

  useEffect(() => {
    if (query === '') return;

    async function fetchMovies() {
      try {
        const { results } = await moviesAPI.searchMovies(query);
        setMovies([...results]);
      } catch (error) {
        console.log(error.message);
      }
    }

    fetchMovies();
  }, [query]);

  const getQuery = query => setSearchParams({ query });
  const renderMovies = movies && query;

  return (
    <>
      <SearchForm onSubmit={getQuery} />
      {renderMovies && <MoviesList movies={movies} />}
    </>
  );
};
