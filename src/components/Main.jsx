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
import Experience from "./Experience";

function Main() {
  const [basicFormValues, setBasicFormValues] = useState("");
  const [educationFormItems, setEducationFormItems] = useState([]);
  const [educationFormEdit, setEducationFormEdit] = useState(false);
  const [educEditID, setEducEditID] = useState(null);
  const [expFormItems, setExpFormItems] = useState([]);
  const [expFormEdit, setExpFormEdit] = useState(false);
  const [expEditID, setExpEditID] = useState(null);

  function handleEducationEdit(id) {
    setEducationFormEdit(!educationFormEdit);
    setEducEditID(id);
  }

  function handleExpEdit(id) {
    setExpFormEdit(!expFormEdit);
    setExpEditID(id);
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
          setEducationFormEdit(false);
          setEducEditID(null);
        } else {
          setEducationFormItems([...educationFormItems, obj]);
        }
        break;

      case "experience":
        // If educationFormEdit
        if (expFormEdit) {
          setExpFormItems(
            expFormItems.map((item) => {
              if (item.id === expEditID) {
                return obj;
              }
              return item;
            }),
          );
          setExpFormEdit(false);
          setExpEditID(null);
        } else {
          setExpFormItems([...expFormItems, obj]);
        }
        break;
    }
  }

  function deleteFormValues(form) {
    if (form === "education") {
      setEducationFormItems(
        educationFormItems.filter((item) => {
          if (item.id !== educEditID) {
            return item;
          }
        }),
      );

      setEducationFormEdit(false);
      setEducEditID(null);
    } else {
      setExpFormItems(
        expFormItems.filter((item) => {
          if (item.id !== expEditID) {
            return item;
          }
        }),
      );

      setExpFormEdit(false);
      setExpEditID(null);
    }
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
        <Experience
          saveFormValues={saveFormValues}
          deleteFormValues={deleteFormValues}
          handleExpEdit={handleExpEdit}
          expFormItems={expFormItems} // Obj array
          expFormEdit={expFormEdit} // Being edited boolean
        />
      </div>

      <div className="cv-container">
        <Cv
          basicFormValues={basicFormValues}
          educationFormItems={educationFormItems}
          expFormItems={expFormItems}
        />
      </div>

    </main>
  );
}

export default Main;
