/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/react-in-jsx-scope */
import "../style.css";

function Forms() {
  return (
    <form action="#">
      <h2>Personal Inforamtion</h2>
      <div className="input-container">
        <label htmlFor="full-name">Full Name:</label>
        <input type="text" id="full-name" name="fullname" placeholder="First and last name" />
      </div>
      <div className="input-container">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="Johndoe@gmail.com" />
      </div>
      <div className="input-container">
        <label htmlFor="tel">Phone Number:</label>
        <input type="tel" id="tel" name="email" placeholder="+555 5555 555" />
      </div>
      <div className="input-container">
        <label htmlFor="address">Address:</label>
        <input type="text" id="address" name="address" placeholder="City, Country" />
      </div>
      <button type="submit" className="add">Add</button>
    </form>
  );
}

export default Forms;
