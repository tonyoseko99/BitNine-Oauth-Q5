const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const usersRouter = require("./src/routes/users");
const albumsRouter = require("./src/routes/albums");
const photosRouter = require("./src/routes/photos");

app.use(bodyParser.json());
app.use("/api/users", usersRouter);
app.use("/api/albums", albumsRouter);
app.use("/api/photos", photosRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const port = 4000;

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
