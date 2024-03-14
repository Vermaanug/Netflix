const express = require("express");
require("./utilis/connection");
const cookieParser = require("cookie-parser");
const userRoute = require("./routes/userRoute");
const app = express();
const port = process.env.PORT || 8000;

//MiddleWares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

//api
app.use("/api/vi/user", userRoute);


app.listen(port, () => {
  console.log(`Listening on Port ${port}`);
});
