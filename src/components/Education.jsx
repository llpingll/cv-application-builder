/* eslint-disable react/jsx-no-bind */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/react-in-jsx-scope */
import { useState } from "react";
import "../style.css";
import InputContainer from "./InputContainer";
import ButtonContainer from "./ButtonContainer";
import EditList from "./EditList";
import FormHeader from "./FormHeader";

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
      id: crypto.randomUUID(),
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
      <FormHeader
        heading="Education"
        expanded={expanded}
        toggleExpanded={toggleExpanded}
      />
      {expanded && (
        <>
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
                isFormFilled={isFormFilled}
                handleCancel={handleCancel}
                clearInputs={clearInputs}
                setShowinputs={setShowinputs}
                educationFormEdit={educationFormEdit}
                deleteFormValues={deleteFormValues}
              />
            </>
          )}
          {educationFormItems && !showInputs && (
            <EditList
              educationFormItems={educationFormItems}
              handleEducationEdit={handleEducationEdit}
              setShowinputs={setShowinputs}
              setSchool={setSchool}
              setDegree={setDegree}
              setLocation={setLocation}
              setStartDate={setStartDate}
              setEndDate={setEndDate}
            />
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
