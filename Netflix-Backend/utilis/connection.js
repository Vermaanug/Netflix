const mongoose = require("mongoose");
require("dotenv").config();

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connection Successful");
  })
  .catch((error) => {
    console.error("Connection Error:", error);
  });
