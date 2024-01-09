/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import "../style.css";

function Cv({ basicFormValues }) {
  return (
    <div className="cv">
      <div className="cv-personal-info">
        {basicFormValues && (
        <>
          <p className="cv-fullname">{basicFormValues.fullName}</p>
          <div className="cv-contact-info">
            <div>
              <i className="fa-solid fa-location-dot" />
              <p>{basicFormValues.email}</p>
            </div>
            <div>
              <i className="fa-solid fa-phone" />
              <p>{basicFormValues.tel}</p>
            </div>
            <div>
              <i className="fa-solid fa-house" />
              <p>{basicFormValues.address}</p>
            </div>
          </div>
        </>
        )}
      </div>
      <div />
      <div />
    </div>
  );
}

export default Cv;
