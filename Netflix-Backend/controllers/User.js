const User = require("../models/UserModel");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Register = async (req, res) => {
  try {
    const { FullName, Email, Password } = req.body;
    if (!FullName || !Email || !Password) {
      return res.status(409).json({
        message: "Please provide all required fields",
        success: false,
      });
    }
    // Checking if the user already exists in  the database
    const existingUser = await User.findOne({ Email });
    if (existingUser) {
      return res.status(409).json({
        message: "This email is already registered.",
        success: false,
      });
    }

    const hashPassword = await bcryptjs.hash(Password, 16);

    const newUser = await User.create({
      FullName,
      Email,
      Password: hashPassword,
    });

    return res.status(201).json({
      message: "Registration Successful! Please login to continue.",
      success: true,
    });
  } catch (error) {
    console.log("Error in registeration : ", error);
  }
};

const Login = async (req, res) => {
  try {
    const { Email, Password } = req.body;
    if (!Email || !Password) {
      return res.status(401).json({
        message: "Invalid Credentials",
        success: false,
      });
    }
    const user = await User.findOne({ Email });
    if (!user) {
      return res.status(404).json({
        message: "Invalid email or Password",
        success: false,
      });
    }

    const isMatch = await bcryptjs.compare(Password, user.Password);
    if (!isMatch) {
      return res.status(401).json({
        message: "Invalid email or Password",
        success: false,
      });
    }

    const payload = {
      user: {
        id: user._id,
        email: user.Email,
      },
    };

    let token = jwt.sign(payload, "kfhdaskhfkjsdhfkashf", { expiresIn: 86400 });

    return res.status(200).cookie("token", token, { httpOnly: true }).json({
      message: "Logged In Successfully!",
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

const Logout = async (req, res) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(200).json({ message: "Logged Out!", success: true });
  }

  res.cookie("token", "", { expiresIn: new Date(Date.now()), httpOnly: true });

  return res.status(200).json({ message: "Logged Out!", success: true });
};

module.exports = { Register, Login, Logout };
