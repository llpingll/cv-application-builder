/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/react-in-jsx-scope */
import { useState } from "react";
import "../style.css";
import InputContainer from "./InputContainer";

function PersonalInfo({ saveFormValues }) {
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
    // e.preventDefault();
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
    // saveFormValues function lives (is defined) in parent becuase all
    // forms use the same funcion therefore adhearing to DRY
    saveFormValues(formData);
    // reset all input fields after form submission
    setFullname("");
    setEmail("");
    setTel("");
    setAddress("");
  }

  return (
    <form action="#" onSubmit={onFormSubmit}>
      <div className="form-header-container">
        <div className="form-header">
          <i className="fa-solid fa-user" />
          <h2>Personal Information</h2>
        </div>
      </div>
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
      <button type="submit" className="save" disabled={!isFormFilled()}>Save</button>
    </form>
  );
}

export default PersonalInfo;
