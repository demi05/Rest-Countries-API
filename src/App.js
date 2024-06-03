import Header from "./components/Header";
import Search from "./components/Search";
import Countries from "./components/Countries";
import CountriesDetails from "./components/CountriesDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Search />} />
          <Route path="/countries/:name" element={<CountriesDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
