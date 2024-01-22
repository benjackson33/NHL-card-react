const express = require("express");
const cors = require("cors");
const axios = require("axios");
const port = 3001;
const app = express();

app.use(express.json());
app.use(cors());

app.get("/teams", async (req, res) => {
  //   res.send("hello");
  const apiUrl = "https://api.nhle.com/stats/rest/en/team";

  try {
    const response = await axios.get(apiUrl);
    const teamData = response.data;
    // console.log(teamData);
    res.json(teamData);
  } catch (err) {
    res.send(err);
  }
});

app.get("/:triCode/roster", async (req, res) => {
  //   res.send("hello");
  const apiUrl = "https://api-web.nhle.com/v1/roster/TOR/current";

  try {
    const response = await axios.get(apiUrl);
    const teamData = response.data;
    // console.log(teamData);
    res.json(teamData);
  } catch (err) {
    res.send(err);
  }
});

app.listen(port, () => console.log(`Listening on port ${port}!`));
