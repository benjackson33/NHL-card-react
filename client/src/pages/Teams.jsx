import LoadingSpinner from "../components/LoadingSpinner";

import { excludedTeams } from "../../utils/excluded-teams";

import { useState, useEffect } from "react";

const Teams = ({ teams, onTriCodeSelect, loading }) => {
  const [color, setColor] = useState("");

  //* Filtering the teams out that are not currently in NHL using array above
  const filteredTeams = teams.filter(
    (team) => !excludedTeams.includes(team.fullName)
  );

  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center mt-11">
          <LoadingSpinner />
        </div>
      ) : (
        <>
          <div className="flex justify-center items-center m-8">
            <img
              className="w-48"
              src={`https://assets.nhle.com/logos/nhl/svg/NHL_light.svg`}
              alt=""
            />
          </div>
          <div className="grid grid-cols-4 gap-2 justify-items-center">
            {filteredTeams.map((team) =>
              team.triCode !== "PHX" ? (
                <a
                  href={`${team.triCode}/roster`}
                  key={team.id}
                  onClick={() => handleTriCodeClick(team.triCode)}
                >
                  <img
                    className="w-36 mb-4"
                    src={`https://assets.nhle.com/logos/nhl/svg/${team.triCode}_light.svg`}
                    alt={`Logo of ${team.fullName}`}
                  />
                </a>
              ) : null
            )}
          </div>
        </>
      )}
    </>
  );
};

export default Teams;
