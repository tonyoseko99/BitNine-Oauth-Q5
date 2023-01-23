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
    name: faker.name.firstName() + " " + faker.name.lastName(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
  });
  await user.save();
  console.log(`User created: ${user.username}`);
};

const createUsers = async (num) => {
  for (let i = 0; i < num; i++) {
    await generateUser();
  }
};
createUsers(10);

// Album seed data
const generateAlbum = async () => {
  // select a random user from the database and assign it to the album userId
  const user = await User.findOne();
  if (!user) {
    console.log("No users found");
    return;
  }
  const album = new Album({
    
    userId: user._id,
    albumTitle: faker.lorem.words(),
  });
  await album.save();
  console.log(`Album created: ${album.albumTitle}`);
};

const createAlbums = async (num) => {
  for (let i = 0; i < num; i++) {
    await generateAlbum();
  }
};
createAlbums(20);

// Photo seed data
const generatePhoto = async () => {
  const album = await Album.findOne();
  if (!album) {
    console.log("No albums found");
    return;
  }
  const photo = new Photo({
    albumId: album._id,
    photoTitle: faker.lorem.words(),
    imageUrl: faker.image.imageUrl(),
  });
  await photo.save();
  console.log(`Photo created: ${photo.photoTitle}`);
};

const createPhotos = async (num) => {
  for (let i = 0; i < num; i++) {
    await generatePhoto();
  }
};
createPhotos(150);

// Run seed data
const run = async () => {
  await generateUser();
  await generateAlbum();
  await generatePhoto();
  process.exit();
};

run();
