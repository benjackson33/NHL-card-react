import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getRoster } from "../../utils/api-calls";
import PlayerCard from "../components/PlayerCard";

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
      <h1 className="font-extrabold text-xl m-5">Forwards</h1>
      <div>
        {players &&
          players.forwards.map((player) => (
            <PlayerCard key={player.id} player={player} />
          ))}
      </div>
      <h1 className="font-extrabold text-xl m-10">Defense</h1>
      <div>
        {players &&
          players.defensemen.map((player) => (
            <PlayerCard key={player.id} player={player} />
          ))}
      </div>
      <h1 className="font-extrabold text-xl m-10">Goalies</h1>
      <div>
        {players &&
          players.goalies.map((player) => (
            <PlayerCard key={player.id} player={player} />
          ))}
      </div>
    </div>
  );
};

export default Roster;
