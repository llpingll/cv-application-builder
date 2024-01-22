/* eslint-disable react/jsx-no-bind */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/react-in-jsx-scope */
import { useState } from "react";
import "../style.css";
import InputContainer from "./form-components/InputContainer";
import ButtonContainer from "./form-components/ButtonContainer";
import EditList from "./form-components/EditList";
import FormHeader from "./form-components/FormHeader";

function Experience({
  saveFormValues,
  expFormItems,
  handleExpEdit,
  expFormEdit,
  deleteFormValues,
}) {
  const form = "experience";
  const [company, setCompany] = useState("");
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [description, setDescription] = useState("");
  const [expanded, setExpanded] = useState(false);
  const [showInputs, setShowinputs] = useState(false);

  function handleChange(e) {
    const { name } = e.target; // Same as const name = e.target.name;
    const { value } = e.target; // Same as const value = e.target.value;
    // eslint-disable-next-line default-case
    switch (name) {
      case "company":
        setCompany(value);
        break;
      case "title":
        setTitle(value);
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
      case "description":
        setDescription(value);
        break;
    }
    // e.preventDefault();
  }

  function toggleExpanded() {
    setExpanded(!expanded);
  }

  function isFormFilled() {
    return company.length
    && title.length
    && location.length
    && startDate.length
    && endDate.length
    && description.length;
  }

  function clearInputs() {
    setCompany("");
    setTitle("");
    setLocation("");
    setStartDate("");
    setEndDate("");
    setDescription("");
  }

  function onFormSubmit(e) {
    e.preventDefault();
    const formData = {
      form,
      company,
      title,
      location,
      startDate,
      endDate,
      description,
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
    setCompany("");
    setTitle("");
    setLocation("");
    setStartDate("");
    setEndDate("");
    setShowinputs(false);
    setDescription("");
    if (expFormEdit) handleExpEdit(null);
  }

  return (
    <form action="#" onSubmit={onFormSubmit}>
      <FormHeader
        heading="Experience"
        expanded={expanded}
        toggleExpanded={toggleExpanded}
      />
      {expanded && (
        <>
          {showInputs && (
            <>
              <InputContainer
                value={company}
                handleChange={(e) => handleChange(e)}
                type="text"
                id="company"
                name="company"
                placeholder="Enter Company Name"
                label="Company Name"
              />
              <InputContainer
                value={title}
                handleChange={(e) => handleChange(e)}
                type="text"
                id="title"
                name="title"
                placeholder="Enter Job Title"
                label="Job Title"
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
              <InputContainer
                value={description}
                handleChange={(e) => handleChange(e)}
                type="textarea"
                id="description"
                name="description"
                placeholder="Enter Job Description"
                label="Job Description"
              />
              <ButtonContainer
                isFormFilled={isFormFilled}
                handleCancel={handleCancel}
                clearInputs={clearInputs}
                setShowinputs={setShowinputs}
                expFormEdit={expFormEdit}
                deleteFormValues={deleteFormValues}
                form={form}
              />
            </>
          )}
          {expFormItems && !showInputs && (
            <EditList
              expFormItems={expFormItems}
              handleExpEdit={handleExpEdit}
              setShowinputs={setShowinputs}
              setCompany={setCompany}
              setTitle={setTitle}
              setLocation={setLocation}
              setStartDate={setStartDate}
              setEndDate={setEndDate}
              setDescription={setDescription}
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

export default Experience;
