const mongoose = require("mongoose");
const dbUrl = require("../src/config");

const dropDb = async () => {
  try {
    await mongoose.connect(dbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    await mongoose.connection.dropDatabase();
    console.log("Successfully dropped database");
  } catch (err) {
    console.log(err);
  } finally {
    await mongoose.connection.close();
    process.exit();
  }
};

dropDb();
