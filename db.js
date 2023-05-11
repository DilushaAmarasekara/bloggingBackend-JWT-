const mongoose = require("mongoose");
const localDB = "mongodb+srv://bloggingPlatform:ApfSU4jorQOPmXN2@cluster0.pnn7zjd.mongodb.net/?retryWrites=true&w=majority";

const connectDB = () => {
  try {
    mongoose.connect(localDB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      //useCreateIndex: true, 
      //useFindAndModify:false
    });
    console.log("MongoDB Connected...");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
