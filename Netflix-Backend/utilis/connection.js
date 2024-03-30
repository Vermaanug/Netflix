const mongoose = require("mongoose");

mongoose
  .connect("mongodb+srv://vermaanug1974:Dj5DLSdCP5Zg2nOb@cluster0.9es6z86.mongodb.net/")
  .then(() => {
    console.log("Connection Successful");
  })
  .catch((error) => {
    console.error("Connection Error:", error);
  });
