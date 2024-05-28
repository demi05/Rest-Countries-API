import Header from "./components/Header";
import Search from "./components/Search";
import Countries from "./components/Countries";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Search />
      <Countries />
    </div>
  );
}

export default App;
