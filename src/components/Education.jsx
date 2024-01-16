/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/react-in-jsx-scope */
import { useState } from "react";
import "../style.css";

function Education({ saveFormValues, educationFormItems, handleEducationEdit }) {
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
    setSchool("");
    setDegree("");
    setLocation("");
    setStartDate("");
    setEndDate("");
    setShowinputs(false);
  }

  function handleCancel() {
    setSchool("");
    setDegree("");
    setLocation("");
    setStartDate("");
    setEndDate("");
    setShowinputs(false);
  }

  function handleDelete() {
    setShowinputs(true);
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
              <div className="input-container">
                <label htmlFor="school">School</label>
                <input
                  value={school}
                  onChange={handleChange}
                  type="text"
                  id="school"
                  name="school"
                  placeholder="First and last name"
                />
              </div>
              <div className="input-container">
                <label htmlFor="degree">Degree/Certificate</label>
                <input
                  value={degree}
                  onChange={(e) => handleChange(e)}
                  type="text"
                  id="degree"
                  name="degree"
                  placeholder="Enter Degree / Field of Study"
                />
              </div>
              <div className="input-container">
                <label htmlFor="location">Location</label>
                <input
                  value={location}
                  onChange={(e) => handleChange(e)}
                  type="text"
                  id="location"
                  name="location"
                  placeholder="Enter Location"
                />
              </div>
              <div className="input-container">
                <label htmlFor="start-date">Start Date</label>
                <input
                  value={startDate}
                  onChange={(e) => handleChange(e)}
                  type="text"
                  id="start-date"
                  name="start-date"
                  placeholder="Enter Start Date"
                />
              </div>
              <div className="input-container">
                <label htmlFor="end-date">End Date</label>
                <input
                  value={endDate}
                  onChange={(e) => handleChange(e)}
                  type="text"
                  id="end-date"
                  name="end-date"
                  placeholder="Enter End Date"
                />
              </div>
              <div className="button-container">
                <button type="submit" className="save" disabled={!isFormFilled()}>Save</button>
                {showInputs && (
                <button type="button" className="cancel" onClick={handleCancel}>Cancel</button>
                )}
                <button type="button" className="delete" onClick={handleDelete}>Delete</button>
              </div>
            </>
          )}
          {educationFormItems && !showInputs && (
            <div className="edit-items">
              {educationFormItems.map((item) => (
                <button
                  type="button"
                  className="edit-item"
                  onClick={(() => {
                    handleEducationEdit(educationFormItems.indexOf(item));
                    setShowinputs(true);
                    setSchool(item.school);
                    setDegree(item.degree);
                    setLocation(item.location);
                    setStartDate(item.startDate);
                    setEndDate(item.endDate);
                  })}
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
