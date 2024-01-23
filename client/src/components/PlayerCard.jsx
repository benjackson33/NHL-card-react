const PlayerCard = ({ player }) => {
  return (
    <>
      <div>
        <h1>
          {player.firstName.default} {player.lastName.default}
        </h1>
        <div>
          <img className="w-36" src={player.headshot} alt="" />
        </div>
      </div>
    </>
  );
};
export default PlayerCard;
