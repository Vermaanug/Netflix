const express = require("express");
require("./utilis/connection");
const cookieParser = require("cookie-parser");
const cors = require( "cors" );
const userRoute = require("./routes/userRoute");
const app = express();
const port = process.env.PORT || 8000;

//MiddleWares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: "http://localhost:3000",
  credentials:true
}));
//api
app.use("/api/vi/user", userRoute);


app.listen(port, () => {
  console.log(`Listening on Port ${port}`);
});
