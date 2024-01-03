/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/react-in-jsx-scope */
import { useState } from "react";
import "../style.css";

function Forms() {
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

  function handlePersonalSubmit(e) {
    e.preventDefault();
  }

  return (
    <form action="#" onSubmit={handlePersonalSubmit}>
      <div className="form-header-container">
        <div className="form-header">
          <i className="fa-solid fa-user" />
          <h2>Personal Inforamtion</h2>
        </div>
        {/* <i className="fa-solid fa-caret-down" /> */}
      </div>
      <div className="input-container">
        <label htmlFor="fullname">Full Name:</label>
        <input
          value={fullName}
          onChange={handleChange}
          type="text"
          id="fullname"
          name="fullname"
          placeholder="First and last name"
        />
      </div>
      <div className="input-container">
        <label htmlFor="email">Email:</label>
        <input
          value={email}
          onChange={(e) => handleChange(e)}
          type="email"
          id="email"
          name="email"
          placeholder="Johndoe@gmail.com"
        />
      </div>
      <div className="input-container">
        <label htmlFor="tel">Phone Number:</label>
        <input
          value={tel}
          onChange={(e) => handleChange(e)}
          type="tel"
          id="tel"
          name="tel"
          placeholder="+555 5555 555"
        />
      </div>
      <div className="input-container">
        <label htmlFor="address">Address:</label>
        <input
          value={address}
          onChange={(e) => handleChange(e)}
          type="text"
          id="address"
          name="address"
          placeholder="City, Country"
        />
      </div>
      <button type="submit" className="add">Add</button>
    </form>
  );
}

export default Forms;
