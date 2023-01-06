import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { List } from './MovieDetailsNavBar.styled';

const MovieDetailsNavBar = ({ from }) => {
  return (
    <List>
      <li>
        <Link to={`cast`} state={{ from }}>
          Cast
        </Link>
      </li>
      <li>
        <Link to={`reviews`} state={{ from }}>
          Reviews
        </Link>
      </li>
    </List>
  );
};

MovieDetailsNavBar.propTypes = {
  from: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default MovieDetailsNavBar;
