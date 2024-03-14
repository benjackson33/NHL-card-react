const express = require("express");
const bcrypt = require("bcrypt");
const axios = require("axios");
const router = express.Router();
const db = require("../db/index");

router.get("/teams", async (req, res) => {
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

router.get("/:triCode/roster", async (req, res) => {
  //   res.send("hello");

  const apiUrl = `https://api-web.nhle.com/v1/roster/${req.params.triCode}/current`;

  try {
    const response = await axios.get(apiUrl);
    const teamData = response.data;
    // console.log(teamData);
    res.json(teamData);
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;
