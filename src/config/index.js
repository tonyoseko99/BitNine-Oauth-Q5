// create a dbUrl variable and assign a mongodb connection string to it
// listen on '0.0.0.0' instead of 'localhost' to allow connections from other devices on the network
const dbUrl = "mongodb://localhost:27017/galleria-db";

// jwt secret
process.env.JWT_SECRET;

// port
process.env.PORT;

// export the variables
module.exports = {
  dbUrl,
};
