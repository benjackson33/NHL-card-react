import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
// import * as Vibrant from "node-vibrant";

const PlayerCard = ({ player, metric }) => {
  const [backgroundColor, setBackgroundColor] = useState("");

  const positions = {
    C: "Center",
    L: "Left",
    R: "Right",
  };

  const playerPosition = positions[player.positionCode];

  return (
    <>
      <div className="relative border-2 rounded-md border-slate-700  p-5">
        <h1 className="text-xl">
          {player.firstName.default} {player.lastName.default}
        </h1>
        <div className="m-0 p-0">
          <div className="absolute top-16 left-36">
            <p className="text-xl font-bold font-graduate">
              {player.sweaterNumber}
            </p>
          </div>
          <img className="w-36" src={player.headshot} alt="" />
        </div>

        <div className="text-xs">
          <div>
            <p>{playerPosition}</p>
            <p>
              Height:
              {metric === true
                ? ` ${player.heightInCentimeters} cm`
                : ` ${player.heightInInches} inches`}
            </p>
            <p>
              Weight:
              {metric === true
                ? ` ${player.weightInKilograms} kg`
                : ` ${player.weightInPounds} lbs`}
            </p>
            <p>
              Birth place:{" "}
              {`${player.birthCity.default} ${player.birthCountry}`}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlayerCard;
