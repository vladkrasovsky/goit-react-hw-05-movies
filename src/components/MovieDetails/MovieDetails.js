import { Box } from 'components/Box';
import { useEffect, useRef, useState } from 'react';
import { Link, Outlet, useParams, useNavigate } from 'react-router-dom';
import moviesAPI from 'services/moviedb-api';
import { GenresList, Footer, FooterList, Poster } from './MovieDetails.styled';

const MovieDetails = () => {
  const navigate = useNavigate();
  const { movieId } = useParams();
  const [movie, setMovie] = useState();
  const footerRef = useRef();

  const executeScroll = () => footerRef.current.scrollIntoView();

  useEffect(() => {
    async function fetchMovie() {
      try {
        const movieDetails = await moviesAPI.getMovieDetails(movieId);
        if (!movieDetails) {
          console.log('Oooh oh, there are no results.');
          return;
        }
        setMovie({ ...movieDetails });
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchMovie();
  }, [movieId]);

  if (!movie) {
    return null;
  }

  const { original_title, overview, vote_average, genres, poster_path } = movie;

  return (
    <>
      <button onClick={() => navigate(-1)}>&larr; Go back</button>
      <Box display="flex" mt={3} alignItems="flex-start">
        <Poster src={poster_path} alt="" width={250} />

        <Box p={4}>
          <h2>{original_title}</h2>

          <Box as="p" mt={3}>
            User Score: {vote_average}
          </Box>

          <Box as="p" mt={3}>
            <b>Overview</b>
          </Box>
          <p>{overview}</p>

          <Box as="p" mt={3}>
            <b>Genres</b>
          </Box>

          {genres.length && (
            <GenresList>
              {genres.map(({ id, name }) => {
                return (
                  <Box as="li" mr={3} key={id}>
                    {name}
                  </Box>
                );
              })}
            </GenresList>
          )}
        </Box>
      </Box>
      <Footer ref={footerRef}>
        <Box as="p" mt={3}>
          Additional information
        </Box>
        <FooterList>
          <li>
            <Link to={`/movies/${movieId}/cast`}>Cast</Link>
          </li>
          <li>
            <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
          </li>
        </FooterList>
      </Footer>
      <Outlet context={{ executeScroll }} />
    </>
  );
};

export default MovieDetails;
