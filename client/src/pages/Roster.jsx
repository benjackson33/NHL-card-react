import { getRoster } from "../../utils/api-calls";

const Roster = () => {
  //   console.log(teams);

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const res = await getRoster(); // Change the URL to match your server's URL
        setTeams(res.data.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchTeams();
  }, []);

  return (
    <>
      <h1>Roster</h1>
    </>
  );
};

export default Roster;
