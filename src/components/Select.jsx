
import PropTypes from 'prop-types';

/**
 * Reusable Select component
 * @param {Object} props - Component props
 * @param {string} props.id - Select ID
 * @param {string} props.label - Select label
 * @param {string} props.value - Selected value
 * @param {function} props.onChange - Change handler function
 * @param {Array} props.options - Array of options
 * @param {boolean} props.required - Whether the select is required
 */
function Select({ id, label, value, onChange, options, required = false }) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <select
        id={id}
        value={value}
        onChange={onChange}
        className="w-full border border-gray-300 p-3 rounded-lg focus:ring focus:ring-blue-200"
        required={required}
      >
        <option value="">Select {label}</option>
        {options.map((option, index) => (
          <option key={index} value={typeof option === 'object' ? option.value || option.abbreviation : option}>
            {typeof option === 'object' ? option.label || option.name : option}
          </option>
        ))}
      </select>
    </div>
  );
}

// PropTypes validation
Select.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.shape({
        name: PropTypes.string,
        abbreviation: PropTypes.string,
        value: PropTypes.string,
        label: PropTypes.string
      })
    ])
  ).isRequired,
  required: PropTypes.bool
};

// Default props
Select.defaultProps = {
  value: '',
  required: false
};

export default Select;