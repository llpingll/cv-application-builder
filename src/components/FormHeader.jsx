/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import "../style.css";

function FormHeader({
  heading,
  expanded,
  toggleExpanded,
}) {
  return (
    <div className="form-header-container">
      <div className="form-header">
        <i className="fa-solid fa-user" />
        <h2>{heading}</h2>
      </div>
      <i
        className={expanded ? "fa-solid fa-angle-up"
          : "fa-solid fa-angle-down"}
        onClick={() => toggleExpanded()}
      />
    </div>
  );
}

export default FormHeader;
