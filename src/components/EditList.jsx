/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import "../style.css";

function EditList({
  educationFormItems,
  handleEducationEdit,
  setShowinputs,
  setSchool,
  setDegree,
  setLocation,
  setStartDate,
  setEndDate,
}) {
  return (
    <div className="edit-items">
      {educationFormItems.map((item) => (
        <button
          type="button"
          className="edit-item"
          onClick={() => {
            handleEducationEdit(educationFormItems.indexOf(item));
            setShowinputs(true);
            setSchool(item.school);
            setDegree(item.degree);
            setLocation(item.location);
            setStartDate(item.startDate);
            setEndDate(item.endDate);
          }}
          id={educationFormItems.indexOf(item)}
          key={crypto.randomUUID()}
        >
          {item.school}
        </button>
      ))}
    </div>
  );
}

export default EditList;
