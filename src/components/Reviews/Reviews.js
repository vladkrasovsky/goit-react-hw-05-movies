import { useEffect, useState } from 'react';
import { useParams, useOutletContext } from 'react-router-dom';
import moviesAPI from 'services/moviedb-api';
import { Box } from 'components/Box';

const Reviews = () => {
  const { executeScroll } = useOutletContext();
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(executeScroll);

  useEffect(() => {
    async function fetchReviews() {
      const { results } = await moviesAPI.getReviews(movieId);
      setReviews([...results]);
    }
    fetchReviews();
  }, [movieId]);

  if (!reviews.length) {
    return (
      <Box as="p" mt={3}>
        We don't have any reviews for this movie.
      </Box>
    );
  }

  return (
    <Box as="ul" p={4} id="reviews">
      {reviews.map(({ id, author, content }) => (
        <Box as="li" key={id} mb={3}>
          <Box as="h4" mb={2}>
            Author: {author}
          </Box>
          <p>{content}</p>
        </Box>
      ))}
    </Box>
  );
};

export default Reviews;
