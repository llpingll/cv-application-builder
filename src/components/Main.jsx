/* eslint-disable react/jsx-no-bind */
/* eslint-disable default-case */
/* eslint-disable react/react-in-jsx-scope */
import "../style.css";
import { useEffect, useState } from "react";
import PersonalInfo from "./PersonalInfo";
import Education from "./Education";
import Cv from "./Cv";

function Main() {
  const [basicFormValues, setBasicFormValues] = useState("");
  const [educationFormItems, setEducationFormItems] = useState([]);

  useEffect(() => {
    console.log(educationFormItems);
  }, [educationFormItems]);

  function saveFormValues(obj) {
    switch (obj.form) {
      case "personalInfo":
        setBasicFormValues(obj);
        break;

      case "education":
        setEducationFormItems([...educationFormItems, obj]);
        break;
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
          educationFormItems={educationFormItems}
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
