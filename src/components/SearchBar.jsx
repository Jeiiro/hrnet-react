
import PropTypes from 'prop-types';

/**
 * Reusable SearchBar component
 * @param {Object} props - Component props
 * @param {string} props.value - Search term
 * @param {function} props.onChange - Change handler function
 * @param {string} props.placeholder - Placeholder text
 */
function SearchBar({ value, onChange, placeholder = "Search..." }) {
  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder={placeholder}
        className="w-full border border-gray-300 p-3 rounded-lg focus:ring focus:ring-blue-200"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

// PropTypes validation
SearchBar.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string
};

// Default props
SearchBar.defaultProps = {
  value: '',
  placeholder: 'Search...'
};

export default SearchBar;