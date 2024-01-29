import React, { useEffect, useState } from "react";
import { getTeams } from "../../utils/api-calls";
import LoadingSpinner from "../components/LoadingSpinner";

//API return teams not currently in NHL

const excludedTeams = [
  "Atlanta Thrashers",
  "Hartford Whalers",
  "Minnesota North Stars",
  "Quebec Nordiques",
  "Winnipeg Jets (1979)",
  "Colorado Rockies",
  "Ottawa Senators (1917)",
  "Hamilton Tigers",
  "Pittsburgh Pirates",
  "Philadelphia Quakers",
  "Detroit Cougars",
  "Montreal Wanderers",
  "Quebec Bulldogs",
  "Montreal Maroons",
  "New York Americans",
  "St. Louis Eagles",
  "Oakland Seals",
  "Atlanta Flames",
  "Kansas City Scouts",
  "Cleveland Barons",
  "Detroit Falcons",
  "Brooklyn Americans",
  "California Golden Seals",
  "Toronto Arenas",
  "Toronto St. Patricks",
  "NHL",
];

const Teams = ({ onTriCodeSelect }) => {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);

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
  }, []);

  //* Filtering the teams out that are not currently in NHL using array above

  const filteredTeams = teams.filter(
    (team) => !excludedTeams.includes(team.fullName)
  );

  const handleTriCodeClick = (triCode) => {
    onTriCodeSelect(triCode);
  };
  // className="flex justify-center items-center m-8"
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
