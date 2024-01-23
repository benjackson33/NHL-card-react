import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getRoster } from "../../utils/api-calls";
import PlayerCard from "../components/PlayerCard";

const Roster = () => {
  const location = useLocation();
  const triCode = location.pathname.split("/")[1];
  const [players, setPlayers] = useState(null);
  const [metric, setMetric] = useState(true);

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const res = await getRoster(triCode);
        setPlayers(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchTeams();
  }, [triCode]);

  const renderPlayerCategory = (category, title) => (
    <div>
      {players && players[category] && (
        <>
          <h1 className="font-extrabold text-xl m-5">{title}</h1>
          {players[category].map((player) => (
            <PlayerCard key={player.id} player={player} metric={metric} />
          ))}
        </>
      )}
    </div>
  );

  return (
    <div>
      <div>
        <button
          onClick={() => (metric === true ? setMetric(false) : setMetric(true))}
        >
          Unit Convert
        </button>
      </div>
      {renderPlayerCategory("forwards", "Forwards")}
      {renderPlayerCategory("defensemen", "Defense")}
      {renderPlayerCategory("goalies", "Goalies")}
    </div>
  );
};

export default Roster;
