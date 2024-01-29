import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getRoster } from "../../utils/api-calls";
import PlayerCard from "../components/PlayerCard";
import LoadingSpinner from "../components/LoadingSpinner";

const Roster = () => {
  const location = useLocation();
  const triCode = location.pathname.split("/")[1];
  const [players, setPlayers] = useState(null);
  const [metric, setMetric] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const res = await getRoster(triCode);
        setPlayers(res.data);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };

    fetchTeams();
  }, [triCode]);

  const renderPlayerCategory = (category, title) =>
    loading ? (
      <div className="flex justify-center items-center mt-11">
        <LoadingSpinner />
      </div>
    ) : (
      <div className="flex justify-center items-center m-8">
        <div>
          {players && players[category] && (
            <>
              <h1 className="font-extrabold text-xl m-5">{title}</h1>
              <div className="grid grid-cols-3 gap-4">
                {players[category].map((player) => (
                  <PlayerCard key={player.id} player={player} metric={metric} />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    );

  return (
    <div>
      <div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setMetric(!metric)}
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
