const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  // CODE HERE
  username: {
    type: String,
    required: "Please enter a username",
    trim: true
  },

  password: {
    type: String,
    required: true,
    trim: true,
    validate: [({length})=> length >= 6,"Password should be at least 6 characters"]

  },

  email: {
    type: String,
    match: [/.+@.+\..+/,"Please enter a valid e-mail address"],
    unique: true


  },

  userCreated: {
    type: Date,
    default: Date.now
  }

});

const User = mongoose.model("User", UserSchema);

module.exports = User;
