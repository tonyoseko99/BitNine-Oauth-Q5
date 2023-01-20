const faker = require("faker");
const mongoose = require("mongoose");
const { dbUrl } = require("../src/config");

// import models
const User = require("../src/models/user");
const Photo = require("../src/models/photo");
const Album = require("../src/models/album");

// connect seed data to the database
mongoose
  .connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB...");
    // create fake users
    const users = [];
    for (let i = 0; i < 50; i++) {
      users.push({
        name: faker.name.findName(),
        username: faker.internet.userName(),
        email: faker.internet.email(),
      });
    }
    // fake data into the database
    User.create(users, (err, docs) => {
      if (err) {
        console.log(err);
      } else {
        console.log(`${docs.length} users were created`);
        mongoose.connection.close();
      }
    });
  })
  .catch((error) => {
    console.error("Could not connect to MongoDB...", err);
  });
