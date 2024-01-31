import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//* Imports from utils
import { getTeams } from "../utils/api-calls";

//* Component and page imports
import Teams from "./pages/Teams";
import Home from "./pages/Home";
import Roster from "./pages/Roster";
import NavBar from "./components/NavBar";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

function App() {
  //*STATE
  const [selectedTriCode, setSelectedTriCode] = useState(null);
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);
  const handleTriCodeSelection = (triCode) => {
    setSelectedTriCode(triCode);
  };

  //* Calling team data - axios call in utils/api-call.js

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const res = await getTeams();
        setTeams(res.data.data);
        setLoading(false); // Set loading to false when data is fetched
      } catch (err) {
        console.log(err);
        setLoading(false); // Set loading to false in case of an error
      }
    };

    fetchTeams();
  }, [setTeams]);

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
                loading={loading}
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
