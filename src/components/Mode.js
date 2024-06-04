import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";

const Mode = () => {
  const [mode, setMode] = useState(false);

  const toggleMode = () => {
    // document.classList.toggle("light-mode");
    setMode(!mode);
    const moon = document.querySelector(".mode");
    moon.addEventListener("click", () => {
      document.body.classList.toggle("light-mode");
    });
    console.log(moon);
  };

  return (
    <div className="mode" onClick={() => toggleMode()}>
      <FontAwesomeIcon icon={faMoon} />
      <h2>{mode ? "Dark" : "Light"} Mode</h2>
    </div>
  );
};

export default Mode;
