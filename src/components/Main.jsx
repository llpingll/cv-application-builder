/* eslint-disable react/jsx-no-bind */
/* eslint-disable default-case */
/* eslint-disable react/react-in-jsx-scope */
import "../style.css";
import { useState } from "react";
import PersonalInfo from "./PersonalInfo";
import Cv from "./Cv";

function Main() {
  const [basicFormValues, setBasicFormValues] = useState("");

  function saveFormValues(obj) {
    switch (obj.form) {
      case "personalInfo":
        setBasicFormValues(obj);
        break;
    }
  }

  return (
    <main>

      <div className="forms-container">
        <PersonalInfo
          saveFormValues={saveFormValues}
        />
        <div className="Education" />
        <div className="Experience" />
      </div>

      <div className="cv-container">
        <Cv
          basicFormValues={basicFormValues}
        />
      </div>

    </main>
  );
}

export default Main;
