const mongoose = require("mongoose");
const env = require("./environment");

mongoose.set("strictQuery", true);
mongoose.connect(`mongodb://${env.MONGODB_SERVER}:27017/${env.DB}`)
.then(() => console.log("Database is connected successfully on port", 27017))
.catch((err) => {
    console.error("Error in connecting to database", err.message);
})

const db = mongoose.connection;

module.exports = db;