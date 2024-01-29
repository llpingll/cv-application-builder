/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import "../../style.css";

function ButtonContainer({
  isFormFilled,
  handleCancel,
  educationFormEdit,
  expFormEdit,
  deleteFormValues,
  setShowinputs,
  clearInputs,
  form,
}) {
  return (
    <div className="button-container">
      <button type="submit" className="save" disabled={!isFormFilled()}>Save</button>
      <button type="button" className="cancel" onClick={handleCancel}>Cancel</button>
      {educationFormEdit && (
      <button
        type="button"
        className="delete"
        onClick={() => {
          deleteFormValues(form);
          setShowinputs(false);
          clearInputs();
        }}
      >
        Delete
      </button>
      )}

      {expFormEdit && (
      <button
        type="button"
        className="delete"
        onClick={() => {
          deleteFormValues(form);
          setShowinputs(false);
          clearInputs();
        }}
      >
        Delete
      </button>
      )}
    </div>
  );
}

export default ButtonContainer;