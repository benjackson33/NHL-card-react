require("dotenv").config();
const express = require("express");
const cors = require("cors");
const axios = require("axios");
const port = process.env.PORT || 3001;
const app = express();
const pg = require("pg");
const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");
const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
});

app.use(express.json());
app.use(cors());

require("dotenv").config();

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

//TODO - redirect to login form if succesful

app.post("/signup", async (req, res) => {
  try {
    const { firstName, lastName, email, password, favoriteTeam } = req.body;
    // console.log(req.body);
    // Hash the password before saving it to the database
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert a new user into the users table
    await db.query(
      "INSERT INTO users (first_name, last_name, email, password_hash, favorite_team) VALUES ($1, $2, $3, $4, $5)",
      [firstName, lastName, email, hashedPassword, favoriteTeam]
    );

    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(port, () => console.log(`Listening on port ${port}!`));
