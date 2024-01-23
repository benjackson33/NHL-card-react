import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getRoster } from "../../utils/api-calls";

const Roster = () => {
  const location = useLocation();
  const triCode = location.pathname.split("/")[1];
  const [players, setPlayers] = useState(null);

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const res = await getRoster(triCode); // Change the URL to match your server's URL
        setPlayers(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchTeams();
  }, [triCode]); // Add triCode as a dependency to rerun the effect when triCode changes

  console.log(players);

  return (
    <div>
      <h1>Roster Page for {triCode}</h1>
      {/* Render roster details using the 'teams' state */}
      {/* For example: */}
      {/* <ul>
        {teams.map((player) => (
          <li key={player.id}>{player.name}</li>
        ))}
      </ul> */}
    </div>
  );
};

export default Roster;
