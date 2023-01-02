import { useEffect, useState } from 'react';
import { useParams, useOutletContext } from 'react-router-dom';
import moviesAPI from 'services/moviedb-api';
import { Box } from 'components/Box';

const Cast = () => {
  const { executeScroll } = useOutletContext();
  const { movieId } = useParams();
  const [cast, setCast] = useState();

  useEffect(executeScroll);

  useEffect(() => {
    async function fetchCredits() {
      const credits = await moviesAPI.getCredits(movieId);
      setCast([...credits.cast]);
    }
    fetchCredits();
  }, [movieId]);

  if (!cast) {
    return null;
  }

  if (!cast.length) {
    return (
      <Box as="p" mt={3}>
        We don't have any cast for this movie.
      </Box>
    );
  }

  return (
    <Box as="ul" p={3} display="flex" flexWrap="wrap" gridGap={10}>
      {cast.map(({ character, original_name, profile_path }) => {
        return (
          <Box
            key={original_name}
            as="li"
            mb={3}
            width={170}
            display="flex"
            flexDirection="column"
          >
            <img src={profile_path} alt="" width={170} />
            <h4>{original_name}</h4>
            <p>
              <small>Character: {character}</small>
            </p>
          </Box>
        );
      })}
    </Box>
  );
};

export default Cast;
