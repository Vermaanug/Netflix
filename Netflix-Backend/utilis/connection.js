const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/Netflix")
  .then(() => {
    console.log("Connection Successful");
  })
  .catch((error) => {
    console.error("Connection Error:", error);
  });
