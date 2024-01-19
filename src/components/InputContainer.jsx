/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import "../style.css";

function InputContainer({
  value, label, handleChange, type, id, name, placeholder,
}) {
  return (
    <div className="input-container">
      <label htmlFor={id}>{label}</label>
      <input
        value={value}
        onChange={handleChange}
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
      />
    </div>
  );
}

export default InputContainer;
