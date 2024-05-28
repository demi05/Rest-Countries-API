import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";

const Mode = () => {
  const [mode, setMode] = useState(false);

  const toggleMode = () => {
    setMode(!mode);
  };

  return (
    <div className="mode" onClick={toggleMode}>
      <FontAwesomeIcon icon={faMoon} />
      <h2>{mode ? "Dark" : "Light"} Mode</h2>
    </div>
  );
};

export default Mode;
