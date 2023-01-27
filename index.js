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
const dbUrl = require("./src/config");

// enable cors
app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.json());

// use the routes
app.use("/auth", authRouter);
app.use("/api/users", usersRouter);
app.use("/api/albums", albumsRouter);
app.use("/api/photos", photosRouter);

// port
const port = 4000;

// connect to mongodb and start the server
mongoose
  .connect(dbUrl, { useNewUrlParser: true })
  .then(() => {
    app.listen(port, "0.0.0.0", () => {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
