import PropTypes from 'prop-types';

const SearchForm = ({ onSubmit }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    onSubmit(form.elements.query.value);
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="search" name="query" />
      <button type="submit">Search</button>
    </form>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchForm;
