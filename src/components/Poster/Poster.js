import PropTypes from 'prop-types';
import { Image } from './Poster.styled';

const Poster = ({ src, width, alt }) => {
  return <Image src={src} width={width} alt={alt} />;
};

Poster.propTypes = {
  src: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Poster;
