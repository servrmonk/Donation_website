const mongoose = require("mongoose");
const dbConnection = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.DBNAME}:${process.env.DBPWD}@cluster0.c5aen.mongodb.net/?retryWrites=true`,
      { dbName: "EVENT_PLANNING_APP" }
    );

    console.log("Connected to the database");
  } catch (error) {
    console.log("Some error occured while connecting to the db", error);
  }
};

module.exports = dbConnection;
