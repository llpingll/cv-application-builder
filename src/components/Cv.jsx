/* eslint-disable react/react-in-jsx-scope */
import "../style.css";

function Cv() {
  return (
    <div className="cv">
      <div className="cv-personal-info">
        <p className="cv-fullname">Full Name:</p>
        <div className="cv-contact-info">
          <div>
            <i className="fa-solid fa-location-dot" />
            <p>Email:</p>
          </div>
          <div>
            <i className="fa-solid fa-phone" />
            <p>Phone Number:</p>
          </div>
          <div>
            <i className="fa-solid fa-house" />
            <p>Address:</p>
          </div>
        </div>
      </div>
      <div />
      <div />
    </div>
  );
}

export default Cv;
