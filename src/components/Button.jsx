
import PropTypes from "prop-types";

const Button = ({
  label,
  secondary,
  fullWidth,
  large,
  onClick,
  disabled,
  outline,
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`disabled:opacity-70
        disabled:cursor-not-allowed
        rounded-full
        font-semibold
        hover:opacity-60
        transition
        border-2
        ${fullWidth ? "w-full" : "w-fit"}
        ${secondary ? "bg-white" : "bg-green-500"}
        ${secondary ? "text-black" : "text-white"}
        ${secondary ? "border-black" : "border-green-500"}
        ${large ? "text-xl" : "text-md"}
        ${large ? "px-6" : "px-5"}
        ${large ? "py-2" : "py-1"}
        ${outline ? 'bg-transparent': ''}
        ${outline ? 'border-white': ''}
        ${outline ? 'text-white': ''}
        `}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  secondary: PropTypes.bool,
  fullWidth: PropTypes.bool,
  large: PropTypes.bool,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  outline: PropTypes.bool,
};

export default Button;
