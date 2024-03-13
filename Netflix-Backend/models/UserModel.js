const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
  {
    FullName: {
      type: String,
      required: true,
    },
    Email: {
      type: String,
      require: true,
    },
    Password: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

const User = new mongoose.model('User', UserSchema);

module.exports = User;
