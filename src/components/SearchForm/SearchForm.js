import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

const SearchForm = ({ query, onSubmit }) => {
  const [queryValue, setQueryValue] = useState(query);

  useEffect(() => {
    if (query === '') {
      setQueryValue(query);
    }
  }, [query]);

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(e.currentTarget.query.value);
  };

  const handleQueryChange = e => setQueryValue(e.target.value);

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        name="query"
        value={queryValue}
        onChange={handleQueryChange}
      />
      <button type="submit">Search</button>
    </form>
  );
};

SearchForm.propTypes = {
  query: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default SearchForm;
