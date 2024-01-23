import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Teams from "./pages/Teams";
import Home from "./pages/Home";
import Roster from "./pages/Roster"; // Import the Roster component
import NavBar from "./components/NavBar";

function App() {
  const [selectedTriCode, setSelectedTriCode] = useState(null);
  const handleTriCodeSelection = (triCode) => {
    setSelectedTriCode(triCode);
  };

  // console.log(selectedTriCode);
  return (
    <Router>
      <>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/teams"
            element={<Teams onTriCodeSelect={handleTriCodeSelection} />}
          />
          {/* Use :triCode to capture the triCode parameter from the URL */}
          <Route
            path="/:triCode/roster"
            element={<Roster selectedTriCode={selectedTriCode} />}
          />
        </Routes>
      </>
    </Router>
  );
}

export default App;
