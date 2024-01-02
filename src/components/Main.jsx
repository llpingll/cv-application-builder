/* eslint-disable react/react-in-jsx-scope */
import "../style.css";
import Forms from "./Forms";
import Cv from "./Cv";

function Main() {
  return (
    <main>
      <div className="forms-container">
        <Forms />
      </div>
      <div className="cv-container">
        <Cv />
      </div>
    </main>
  );
}

export default Main;
