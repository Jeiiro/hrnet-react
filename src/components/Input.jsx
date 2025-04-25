import PropTypes from 'prop-types';

/**
 * Reusable Input component
 * @param {Object} props - Component props
 * @param {string} props.id - Input ID
 * @param {string} props.label - Input label
 * @param {string} props.type - Input type (text, email, number, date, etc.)
 * @param {string} props.value - Input value
 * @param {function} props.onChange - Change handler function
 * @param {boolean} props.required - Whether the input is required
 * @param {string} props.placeholder - Placeholder text
 */
function Input({ id, label, type = "text", value, onChange, required = false, placeholder = "" }) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        className="w-full border border-gray-300 p-3 rounded-lg focus:ring focus:ring-blue-200"
        required={required}
        placeholder={placeholder}
      />
    </div>
  );
}

// PropTypes validation
Input.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
  placeholder: PropTypes.string
};

// Default props
Input.defaultProps = {
  type: "text",
  required: false,
  placeholder: "",
  value: ""
};

export default Input;