/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/react-in-jsx-scope */
import { useState } from "react";
import "../style.css";
import InputContainer from "./form-components/InputContainer";
import FormHeader from "./form-components/FormHeader";
import ButtonContainer from "./form-components/ButtonContainer";

function PersonalInfo({
  saveFormValues,
  toggleExpanded,
  expanded,
  clearExample,
  loadExample,
}) {
  const form = "personalInfo";
  const [fullName, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [address, setAddress] = useState("");

  function handleChange(e) {
    const { name } = e.target; // Same as const name = e.target.name;
    const { value } = e.target; // Same as const value = e.target.value;
    // eslint-disable-next-line default-case
    switch (name) {
      case "fullname":
        setFullname(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "tel":
        setTel(value);
        break;
      case "address":
        setAddress(value);
        break;
    }
  }

  function isFormFilled() {
    return fullName.length && email.length && tel.length && address.length;
  }

  function onFormSubmit(e) {
    e.preventDefault();
    const formData = {
      form,
      fullName,
      email,
      tel,
      address,
    };
    saveFormValues(formData);
    // reset all input fields after form submission
    setFullname("");
    setEmail("");
    setTel("");
    setAddress("");
  }

  return (
    <form action="#" onSubmit={onFormSubmit}>
      <FormHeader
        heading="Personal Information"
        expanded={expanded}
        toggleExpanded={toggleExpanded}
      />
      {expanded && (
        <>
          <InputContainer
            value={fullName}
            handleChange={(e) => handleChange(e)}
            type="text"
            id="fullname"
            name="fullname"
            placeholder="First and last name"
            label="Full Name"
          />
          <InputContainer
            value={email}
            handleChange={(e) => handleChange(e)}
            type="text"
            id="email"
            name="email"
            placeholder="johndoe@gmail.com"
            label="Email"
          />
          <InputContainer
            value={tel}
            handleChange={(e) => handleChange(e)}
            type="text"
            id="tel"
            name="tel"
            placeholder="+555 5555 555"
            label="Phone Number"
          />
          <InputContainer
            value={address}
            handleChange={(e) => handleChange(e)}
            type="text"
            id="address"
            name="address"
            placeholder="City, Country"
            label="Address"
          />
          <ButtonContainer
            isFormFilled={isFormFilled}
            form={form}
            clearExample={clearExample}
            loadExample={loadExample}
          />
          {/* <button type="submit" className="save" disabled={!isFormFilled()}>Save</button>
          <div className="example">
          <button type="button" className="clear">Clear</button>
          <button type="button" className="load">Load</button>
          </div> */}
        </>
      )}
    </form>
  );
}

export default PersonalInfo;
