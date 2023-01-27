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
app.use("/", (req, res) => {
  res.send("Welcome to Galleria API");
});

// port
const PORT = process.env.PORT || 4000;

// connect to mongodb database and set strictquery to true
const dbConnection = async () => {
  try {
    await mongoose.connect(dbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to database");
  } catch (error) {
    console.log(error);
  }
};

// listen on port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  dbConnection();
});
