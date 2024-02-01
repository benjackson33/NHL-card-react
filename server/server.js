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

//* Sign in and out

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Fetch user from the database based on email
    const result = await db.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);

    if (result.rows.length === 0) {
      return res
        .status(401)
        .json({ success: false, error: "Invalid credentials" });
    }

    const user = result.rows[0];

    // Compare hashed password with user input
    const passwordMatch = await bcrypt.compare(password, user.password_hash);

    if (passwordMatch) {
      // Passwords match, login successful
      return res
        .status(200)
        .json({ success: true, message: "Login successful" });
    } else {
      // Passwords do not match, login failed
      return res
        .status(401)
        .json({ success: false, error: "Invalid credentials" });
    }
  } catch (error) {
    console.error("Error during login:", error);
    return res
      .status(500)
      .json({ success: false, error: "Internal server error" });
  }
});

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
