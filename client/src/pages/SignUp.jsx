import { excludedTeams } from "../../utils/excluded-teams";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUp = ({ teams }) => {
  const filteredTeams = teams.filter(
    (team) => !excludedTeams.includes(team.fullName)
  );

  let navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Get form data
    const formData = {
      firstName: e.target["first-name"].value,
      lastName: e.target["last-name"].value,
      email: e.target.email.value,
      password: e.target.password.value,
      favoriteTeam: e.target["favorite-team"].value,
    };

    try {
      // Make a POST request to your backend API
      const res = await axios.post("http://localhost:3001/signup", formData);

      // Handle the res from the server
      console.log(res.data); // Log or handle the response accordingly
      navigate("/login");
    } catch (error) {
      // Handle errors
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 font-graduate">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-24 w-auto"
          src="https://assets.nhle.com/logos/nhl/svg/NHL_light.svg"
          alt="NHLlogo"
        />
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm ">
        <h1>Create your account </h1>
        <form
          className="space-y-6"
          action="#"
          method="POST"
          onSubmit={handleFormSubmit}
        >
          <div>
            <label className="block text-sm font-medium leading-6 text-balance ">
              First Name
            </label>
            <div className="">
              <input
                id="first-name"
                name="first-name"
                type="text"
                required
                className="p-2 lock w-full rounded-md border-0 bg-white/5 py-1.5  shadow-sm ring-1 ring-inset ring-black focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium leading-6 text-balance ">
              Last Name
            </label>
            <div className="">
              <input
                id="last-name"
                name="last-name"
                type="text"
                required
                className="p-2 lock w-full rounded-md border-0 bg-white/5 py-1.5  shadow-sm ring-1 ring-inset ring-black focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-balance "
            >
              Email address
            </label>
            <div className="">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="p-2 lock w-full rounded-md border-0 bg-white/5 py-1.5  shadow-sm ring-1 ring-inset ring-black focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-black "
              >
                Password
              </label>
            </div>
            <div className="">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="p-2 block w-full rounded-md border-0 bg-white/5 py-1.5  shadow-sm ring-1 ring-inset ring-black focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium leading-6 text-balance ">
              Favorite Team
            </label>
            <div className="">
              <select
                className="p-1 block w-full rounded-md border-0 bg-white/5 py-1.5  shadow-sm ring-1 ring-inset ring-black focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                name="favorite-team"
                id="favorite-team"
              >
                {filteredTeams.map((team) => (
                  <option key={team.id} value={team.fullName}>
                    {team.fullName}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-slate-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500"
            >
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default SignUp;
