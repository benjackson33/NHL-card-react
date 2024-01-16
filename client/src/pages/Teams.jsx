import React, { useEffect, useState } from "react";
import { getTeams } from "../../utils/api-calls";

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

const App = () => {
  const [teams, setTeams] = useState([]);
  //   console.log(teams);

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const res = await getTeams(); // Change the URL to match your server's URL
        setTeams(res.data.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchTeams();
  }, []);

  const filteredTeams = teams.filter(
    (team) => !excludedTeams.includes(team.fullName)
  );
  // console.log(filteredTeams);

  return (
    <>
      <div class="flex justify-center items-center">
        <img
          className="w-40 "
          src={`https://assets.nhle.com/logos/nhl/svg/NHL_light.svg`}
          alt=""
        />
      </div>
      <div className="grid grid-cols-4 gap-2 justify-items-center">
        {filteredTeams.map((team) =>
          team.triCode !== "PHX" ? (
            <a href="#">
              <img
                key={team.id}
                className="w-36 mb-4"
                src={`https://assets.nhle.com/logos/nhl/svg/${team.triCode}_light.svg`}
                alt=""
              />
            </a>
          ) : null
        )}
      </div>
    </>
  );
};

export default App;
