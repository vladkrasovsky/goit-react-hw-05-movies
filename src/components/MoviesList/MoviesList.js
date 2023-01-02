import { NavLink } from 'react-router-dom';
import { Box } from 'components/Box';

const MoviesList = ({ movies }) => {
  return (
    <Box as="ul" p={2}>
      {movies.map(({ id, title }) => {
        return (
          <Box as="li" key={id}>
            <NavLink to={`/movies/${id}`}>{title}</NavLink>
          </Box>
        );
      })}
    </Box>
  );
};

export default MoviesList;
