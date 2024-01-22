/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import "../style.css";

function Cv({ basicFormValues, educationFormItems, expFormItems }) {
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
      {educationFormItems.length > 0 && (
        <div className="cv-education">
          <p className="cv-education-heading">Education</p>
          <div className="cv-education-info">
            {educationFormItems.map((item) => (
              <div className="education-item" key={item.id}>
                <div>
                  <p className="dates">{`${item.startDate} - ${item.endDate}`}</p>
                  <p className="location">{item.location}</p>
                </div>
                <div>
                  <p className="institution">{item.school}</p>
                  <p className="degree">{item.degree}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      {expFormItems.length > 0 && (
        <div className="cv-experience">
          <p className="cv-experience-heading">Experience</p>
          <div className="cv-experience-info">
            {expFormItems.map((item) => (
              <div className="experience-item" key={item.id}>
                <div>
                  <p className="dates">{`${item.startDate} - ${item.endDate}`}</p>
                  <p className="location">{item.location}</p>
                </div>
                <div>
                  <p className="company">{item.company}</p>
                  <p className="description">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Cv;
