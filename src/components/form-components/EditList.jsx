/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import "../../style.css";

function EditList({
  educationFormItems,
  expFormItems,
  handleEducationEdit,
  handleExpEdit,
  setShowinputs,
  setSchool,
  setDegree,
  setStartDate,
  setEndDate,
  setCompany,
  setLocation,
  setTitle,
  setDescription,
}) {
  return (
    <div className="edit-items">
      {educationFormItems
      && educationFormItems.map((item) => (
        <button
          type="button"
          className="edit-item"
          onClick={() => {
            handleEducationEdit(item.id);
            setShowinputs(true);
            setSchool(item.school);
            setDegree(item.degree);
            setLocation(item.location);
            setStartDate(item.startDate);
            setEndDate(item.endDate);
          }}
          key={item.id}
        >
          {item.school}
        </button>
      ))}

      {expFormItems
        && expFormItems.map((item) => (
          <button
            type="button"
            className="edit-item"
            onClick={() => {
              handleExpEdit(item.id);
              setShowinputs(true);
              setCompany(item.company);
              setTitle(item.title);
              setLocation(item.location);
              setStartDate(item.startDate);
              setEndDate(item.endDate);
              setDescription(item.description);
            }}
            key={item.id}
          >
            {item.company}
          </button>
        ))}
    </div>
  );
}

export default EditList;
