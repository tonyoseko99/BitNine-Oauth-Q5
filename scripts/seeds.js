// require faker
const faker = require("faker");
const mongoose = require("mongoose");
const { dbUrl } = require("../src/config");

mongoose.connect(dbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const User = require("../src/models/user");
const Album = require("../src/models/album");
const Photo = require("../src/models/photo");

// User seed data
const generateUser = async () => {
  const user = new User({
    name: faker.name.firstName("male"),
    username: faker.internet.userName(),
    email: faker.internet.email(),
  });
  await user.save();
  console.log(`User created: ${user.username}`);
};

// 10 instances of users
for (let i = 0; i < 10; i++) {
  generateUser();
}

// Album seed data
const generateAlbum = async () => {
  const album = new Album({
    albumId: faker.random.uuid(),
    // userId is a foreign key, so we need to find a random user from the database and select the _id
    userId: await User.aggregate([{ $sample: { size: 1 } }]),
    albumTitle: faker.lorem.words(),
  });
  await album.save();
  console.log(`Album created: ${album.title}`);
};

// 20 instances of albums
for (let i = 0; i < 20; i++) {
  generateAlbum();
}

// Run seed data
const run = async () => {
  await generateUser();
  await generateAlbum();
  process.exit();
};

run();
