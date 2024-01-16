const Home = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <h1 className="text-5xl font-graduate">NHL</h1>
      <div className="text-center">
        <img
          className="w-96"
          src={`https://assets.nhle.com/logos/nhl/svg/NHL_light.svg`}
          alt=""
        />
      </div>
      <div>
        <h1 className="text-5xl font-graduate">HOCKEY</h1>
      </div>
      <div></div>
    </div>
  );
};

export default Home;
