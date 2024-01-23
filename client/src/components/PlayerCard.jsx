import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const PlayerCard = ({ player, metric }) => {
  const positions = {
    C: "Center",
    L: "Left",
    R: "Right",
  };

  const playerPosition = positions[player.positionCode];

  return (
    <>
      <div className="relative">
        <h1>
          {player.firstName.default} {player.lastName.default}
        </h1>

        <div className="absolute top-10 left-28">
          <p className="text-xl font-bold font-graduate">
            {player.sweaterNumber}
          </p>
        </div>

        <img className="w-36" src={player.headshot} alt="" />

        <div>
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
          </div>
        </div>
      </div>
    </>
  );
};

export default PlayerCard;
