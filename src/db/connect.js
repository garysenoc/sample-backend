const mongoose = require("mongoose");

const connect = async () => {
  try {
       await mongoose.connect(
      "mongodb://localhost:27017/db_sample"
    );
    
    console.log("database connected successfully");
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

module.exports = connect;
