import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Box } from 'components/Box';

const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <Box as="ul" p={2}>
      {movies.map(({ id, title }) => {
        return (
          <Box as="li" key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              {title}
            </Link>
          </Box>
        );
      })}
    </Box>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default MoviesList;
