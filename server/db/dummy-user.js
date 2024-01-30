require("dotenv").config();

console.log("DATABASE_URL:", process.env.DATABASE_URL); // Add this line for debugging

const pg = require("pg");
const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
});

const bcrypt = require("bcrypt");

let email = "ben@ben.com";
let plainTextPassword = "12345";
let saltRounds = 10;

bcrypt.genSalt(saltRounds, (err, salt) => {
  if (err) {
    console.error("Error generating salt:", err);
    return;
  }

  bcrypt.hash(plainTextPassword, salt, (err, hash) => {
    if (err) {
      console.error("Error hashing password:", err);
      return;
    }

    // console.log("Hashed Password:", hash); //this line for debugging

    let sql = `INSERT INTO users (email, password_hash) VALUES ($1, $2) RETURNING *;`;
    let values = [email, hash];

    db.query(sql, values, (err, res) => {
      if (err) {
        console.error("Error inserting user:", err);
      } else {
        console.log("New user made:", res.rows);
      }
    });
  });
});
