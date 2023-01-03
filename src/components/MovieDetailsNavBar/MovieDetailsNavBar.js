import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { List } from './MovieDetailsNavBar.styled';

const MovieDetailsNavBar = ({ movieId }) => {
  return (
    <List>
      <li>
        <Link to={`/movies/${movieId}/cast`}>Cast</Link>
      </li>
      <li>
        <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
      </li>
    </List>
  );
};

MovieDetailsNavBar.propTypes = {
  movieId: PropTypes.string.isRequired,
};

export default MovieDetailsNavBar;
