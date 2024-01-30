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
  clearExample,
  loadExample,
}) {
  return (
    <div className="button-container">
      <button type="submit" className="save" disabled={!isFormFilled()}>Save</button>

      {form === "personalInfo" && (
        <>
          <button type="button" className="clear" onClick={clearExample}>Clear All</button>
          <button type="button" className="load" onClick={loadExample}>Load e.g.</button>
        </>
      )}

      {form === "education" && (
        <button type="button" className="cancel" onClick={handleCancel}>Cancel</button>
      )}
      {form === "experience" && (
        <button type="button" className="cancel" onClick={handleCancel}>Cancel</button>
      )}

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
