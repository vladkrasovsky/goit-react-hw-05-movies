import PropTypes from 'prop-types';
import { List, Item } from './GenresList.styled';

const GenresList = ({ genres }) => {
  return (
    <List>
      {genres.map(({ id, name }) => (
        <Item key={id}>{name}</Item>
      ))}
    </List>
  );
};

GenresList.propTypes = {
  genres: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default GenresList;
