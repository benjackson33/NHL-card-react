CREATE DATABASE nhlcards;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    first_name TEXT UNIQUE NOT NULL,
    last_name TEXT UNIQUE NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    favorite_team TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


