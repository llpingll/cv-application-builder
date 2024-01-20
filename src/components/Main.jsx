/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable default-case */
/* eslint-disable react/react-in-jsx-scope */
import "../style.css";
import { useState } from "react";
import PersonalInfo from "./PersonalInfo";
import Education from "./Education";
import Cv from "./Cv";

function Main() {
  const [basicFormValues, setBasicFormValues] = useState("");
  const [educationFormItems, setEducationFormItems] = useState([]);
  const [educationFormEdit, seteducationFormEdit] = useState(false);
  const [educEditID, setEducEditID] = useState(null);

  // useEffect(() => {
  //   console.log(educationFormEdit);
  // }, [educationFormEdit]);

  function handleEducationEdit(id) {
    seteducationFormEdit(!educationFormEdit);
    setEducEditID(id);
  }

  function saveFormValues(obj) {
    switch (obj.form) {
      case "personalInfo":
        setBasicFormValues(obj);
        break;

      case "education":
        // If educationFormEdit
        if (educationFormEdit) {
          setEducationFormItems(
            educationFormItems.map((item) => {
              if (item.id === educEditID) {
                return obj;
              }
              return item;
            }),
          );
          seteducationFormEdit(false);
          setEducEditID(null);
        } else {
          setEducationFormItems([...educationFormItems, obj]);
        }
        break;
    }
  }

  function deleteFormValues() {
    setEducationFormItems(
      educationFormItems.filter((item) => {
        if (item.id !== educEditID) {
          return item;
        }
      }),
    );

    seteducationFormEdit(false);
    setEducEditID(null);
  }

  return (
    <main>

      <div className="forms-container">
        <PersonalInfo
          saveFormValues={saveFormValues}
        />
        <Education
          saveFormValues={saveFormValues}
          deleteFormValues={deleteFormValues}
          handleEducationEdit={handleEducationEdit}
          educationFormItems={educationFormItems} // Obj array
          educationFormEdit={educationFormEdit} // Being edited boolean
        />
        <div className="Experience" />
      </div>

      <div className="cv-container">
        <Cv
          basicFormValues={basicFormValues}
          educationFormItems={educationFormItems}
        />
      </div>

    </main>
  );
}

export default Main;
