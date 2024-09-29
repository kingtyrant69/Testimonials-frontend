import PropTypes from 'prop-types';

const Input = ({
    placeholder,
    value,
    type,
    disabled,
    onChange
}) => {
  return (
    <input  
        disabled={disabled}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        type={type}
        className='
        lg:w-1/2
        w-3/4
        p-4
        text-lg
        border-2
        border-neutral-800
        rounded-md
        outline-none
        focus:border-green-400
        focus:border-2
        transition
        disabled:bg-neutral-900
        disabled:opacity-70
        disabled:cursor-not-allowed
        '
    />
  )
}

Input.propTypes = {
    placeholder: PropTypes.string,
    value: PropTypes.string,
    type: PropTypes.string,
    disabled: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
}

export default Input;
