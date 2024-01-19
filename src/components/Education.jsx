/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/react-in-jsx-scope */
import { useState } from "react";
import "../style.css";
import InputContainer from "./InputContainer";
import ButtonContainer from "./ButtonContainer";

function Education({
  saveFormValues,
  educationFormItems,
  handleEducationEdit,
  educationFormEdit,
  deleteFormValues,
}) {
  const form = "education";
  const [school, setSchool] = useState("");
  const [degree, setDegree] = useState("");
  const [location, setLocation] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [expanded, setExpanded] = useState(false);
  const [showInputs, setShowinputs] = useState(false);

  function handleChange(e) {
    const { name } = e.target; // Same as const name = e.target.name;
    const { value } = e.target; // Same as const value = e.target.value;
    // eslint-disable-next-line default-case
    switch (name) {
      case "school":
        setSchool(value);
        break;
      case "degree":
        setDegree(value);
        break;
      case "location":
        setLocation(value);
        break;
      case "start-date":
        setStartDate(value);
        break;
      case "end-date":
        setEndDate(value);
        break;
    }
    // e.preventDefault();
  }

  function toggleExpanded() {
    setExpanded(!expanded);
  }

  function isFormFilled() {
    return school.length && degree.length && location.length && startDate.length && endDate.length;
  }

  function clearInputs() {
    setSchool("");
    setDegree("");
    setLocation("");
    setStartDate("");
    setEndDate("");
  }

  function onFormSubmit(e) {
    e.preventDefault();
    const formData = {
      form,
      school,
      degree,
      location,
      startDate,
      endDate,
    };
      // saveFormValues function lives (is defined) in parent becuase all
      // forms use the same funcion therefore adhearing to DRY
    saveFormValues(formData);
    // reset all input fields after form submission
    clearInputs();
    setShowinputs(false);
  }

  function handleCancel() {
    setSchool("");
    setDegree("");
    setLocation("");
    setStartDate("");
    setEndDate("");
    setShowinputs(false);
    if (educationFormEdit) handleEducationEdit(null);
  }

  return (
    <form action="#" onSubmit={onFormSubmit}>
      <div className="form-header-container">
        <div className="form-header">
          <i className="fa-solid fa-user" />
          <h2>Education</h2>
        </div>
        <i
          className={expanded ? "fa-solid fa-angle-up"
            : "fa-solid fa-angle-down"}
          onClick={() => toggleExpanded()}
        />
      </div>
      {/* If expanded, show content */}
      {expanded && (
        <>
          {/* If showInputs show input container */}
          {showInputs && (
            <>
              <InputContainer
                value={school}
                handleChange={(e) => handleChange(e)}
                type="text"
                id="school"
                name="school"
                placeholder="Enter school / institution"
                label="School"
              />
              <InputContainer
                value={degree}
                handleChange={(e) => handleChange(e)}
                type="text"
                id="degree"
                name="degree"
                placeholder="Enter Degree / Field of Study"
                label="Degree/Certificate"
              />
              <InputContainer
                value={location}
                handleChange={(e) => handleChange(e)}
                type="text"
                id="location"
                name="location"
                placeholder="Enter Location"
                label="Location"
              />
              <InputContainer
                value={startDate}
                handleChange={(e) => handleChange(e)}
                type="text"
                id="start-date"
                name="start-date"
                placeholder="Enter Start Date"
                label="Start Date"
              />
              <InputContainer
                value={endDate}
                handleChange={(e) => handleChange(e)}
                type="text"
                id="end-date"
                name="end-date"
                placeholder="Enter End Date"
                label="End Date"
              />
              <ButtonContainer
                // Props can be shorthanded as below instead of isFormFilled={isFormFilled}
                isFormFilled={() => isFormFilled}
                handleCancel={() => handleCancel}
                clearInputs={() => clearInputs}
                educationFormEdit={educationFormEdit}
                deleteFormValues={deleteFormValues}
                setShowinputs={setShowinputs}
              />
            </>
          )}
          {educationFormItems && !showInputs && (
            <div className="edit-items">
              {educationFormItems.map((item) => (
                <button
                  type="button"
                  className="edit-item"
                  onClick={() => {
                    handleEducationEdit(educationFormItems.indexOf(item));
                    setShowinputs(true);
                    setSchool(item.school);
                    setDegree(item.degree);
                    setLocation(item.location);
                    setStartDate(item.startDate);
                    setEndDate(item.endDate);
                  }}
                  id={educationFormItems.indexOf(item)}
                  key={crypto.randomUUID()}
                >
                  {item.school}
                </button>
              ))}
            </div>
          )}
          {!showInputs && (
            <button type="button" className="add" onClick={() => setShowinputs(true)}>+ Education</button>
          )}
        </>
      )}
    </form>
  );
}

export default Education;
