/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/react-in-jsx-scope */
import { useState } from "react";
import "../style.css";

function Education({ saveFormValues }) {
  const form = "education";
  const [school, setSchool] = useState("");
  const [degree, setDegree] = useState("");
  const [location, setLocation] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

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
  }

  return (
    <form action="#" onSubmit={onFormSubmit}>
      <div className="form-header-container">
        <div className="form-header">
          <i className="fa-solid fa-user" />
          <h2>Education</h2>
        </div>
        {/* <i className="fa-solid fa-caret-down" /> */}
      </div>
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
        <label htmlFor="end-date">Start Date</label>
        <input
          value={endDate}
          onChange={(e) => handleChange(e)}
          type="text"
          id="end-date"
          name="end-date"
          placeholder="Enter End Date"
        />
      </div>
      <button type="submit" className="save" disabled={!isFormFilled()}>Save</button>
    </form>
  );
}

export default Education;
