require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

const cors = require("cors");

const sessionsRouter = require("./routes/sessions");
const teamsRouter = require("../server/routes/teams");

app.use(express.json());
app.use(cors());

require("dotenv").config();

app.use("/", teamsRouter);
app.use("/", sessionsRouter);

app.listen(port, () => console.log(`Listening on port ${port}!`));
