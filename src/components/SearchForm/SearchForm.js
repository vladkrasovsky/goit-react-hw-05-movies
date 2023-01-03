import PropTypes from 'prop-types';
import { useState } from 'react';

const SearchForm = ({ query, onSubmit }) => {
  const [queryValue, setQueryValue] = useState(query);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    onSubmit(form.elements.query.value);
    form.reset();
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
