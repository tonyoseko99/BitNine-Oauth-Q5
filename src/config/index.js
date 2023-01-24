// create a dbUrl variable and assign a mongodb connection string
const dbUrl = "mongodb://localhost:27017/galleria-db";

// jwt secret
const jwtSecret = process.env.JWT_SECRET;

// export the jwtSecret variable

module.exports = { dbUrl, jwtSecret };
