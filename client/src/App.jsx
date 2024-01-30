import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Teams from "./pages/Teams";
import Home from "./pages/Home";
import Roster from "./pages/Roster";
import NavBar from "./components/NavBar";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

function App() {
  const [selectedTriCode, setSelectedTriCode] = useState(null);
  const [teams, setTeams] = useState([]);
  const handleTriCodeSelection = (triCode) => {
    setSelectedTriCode(triCode);
  };

  // console.log(teams);
  return (
    <Router>
      <>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/teams"
            element={
              <Teams
                teams={teams}
                setTeams={setTeams}
                onTriCodeSelect={handleTriCodeSelection}
              />
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp teams={teams} />} />

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
