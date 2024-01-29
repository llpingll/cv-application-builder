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
  const [expanded, setExpanded] = useState(null);

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

  function toggleExpanded(index) {
    switch (index) {
      case 0:
        if (expanded === 0) {
          setExpanded(null);
        } else {
          setExpanded(0);
        }
        break;

      case 1:
        if (expanded === 1) {
          setExpanded(null);
        } else {
          setExpanded(1);
        }
        break;

      case 2:
        if (expanded === 2) {
          setExpanded(null);
        } else {
          setExpanded(2);
        }
        break;
    }
  }

  return (
    <main>

      <div className="forms-container">
        <PersonalInfo
          toggleExpanded={() => toggleExpanded(0)}
          saveFormValues={saveFormValues}
          expanded={expanded === 0}
        />
        <Education
          toggleExpanded={() => toggleExpanded(1)}
          expanded={expanded === 1}
          saveFormValues={saveFormValues}
          deleteFormValues={deleteFormValues}
          handleEducationEdit={handleEducationEdit}
          educationFormItems={educationFormItems} // Obj array
          educationFormEdit={educationFormEdit} // Being edited boolean
        />
        <Experience
          toggleExpanded={() => toggleExpanded(2)}
          expanded={expanded === 2}
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
