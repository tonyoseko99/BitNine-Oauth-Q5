require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const usersRouter = require("./src/routes/users");
const albumsRouter = require("./src/routes/albums");
const photosRouter = require("./src/routes/photos");
const authRouter = require("./src/routes/auth");
const { dbUrl } = require("./src/config");

// enable cors
app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.json());

// use the routes
app.use("/auth", authRouter);
app.use("/api/users", usersRouter);
app.use("/api/albums", albumsRouter);
app.use("/api/photos", photosRouter);

// connect to mongodb
mongoose
  .connect("mongodb://localhost:27017/galleria-db", { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Could not connect to MongoDB...", err));

// start the server
const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
