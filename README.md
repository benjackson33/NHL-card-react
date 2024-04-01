# NHL Hockey Card Collection App

As a kid I used to collect hockey cards. I wanted to create an app that replicated this. The app utilises the NHL API to gather player information and display it on a card. The NHL recently changed their API and has minimal documentation and was put together by another user of the API.

## Features

- Browse through teams and look through the roster and player data.
- Convert data from metric and imperial.
- Create account and login.

## Planned Features

- User themes based on teams colours
- Users can add a certain number of cards to the collection per month/week
- Adjust the units in the user settings
- Click on player for deeper dive on stats
- The API only has head shots. Potentially create my own API to add images of players on the ice.
- Each team page has teams colours

## Technologies Used

- React
- Express
- Postgres

## Getting Started

To run the application:

Clone repo

```
   cd hockey-cards
```

```
  # Install client dependencies
   cd client
   npm i


  # Install server dependencies
  cd server
  npm i
```

```
    # concurrently installed to run client aswell
    npm run dev
```

Open
[http://localhost:5173/](http://localhost:5173/)
