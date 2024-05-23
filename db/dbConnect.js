const mongoose = require("mongoose");
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/registeration";
const dbConnect = async () => {
  try {
    const connectionInstance = await mongoose.connect(MONGODB_URI);
    console.log(
      `Database Connection successfull ${connectionInstance} & ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log(`Database connection error`, error);
    process.exit(1);
  }
};

module.exports = dbConnect;
