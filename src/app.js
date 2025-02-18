const express = require("express");
const connect = require("./db/connect");
const cors = require("cors");
require("dotenv").config();

const ItemRoute = require("./routes/ItemRoute");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api", ItemRoute);

app.listen(process.env.PORT, async () => {
  console.log("Server is running on port " + process.env.PORT);
  await connect();
});

