import { useState } from "react";

const Mode = () => {
  const [mode, setMode] = useState(false);

  const toggleMode = () => {
    setMode(!mode);
  };

  return (
    <div className="mode">
      <h2 onClick={toggleMode}>{mode ? "Dark" : "Light"} Mode</h2>
    </div>
  );
};

export default Mode;
