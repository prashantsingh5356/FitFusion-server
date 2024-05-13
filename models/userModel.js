import mongoose from "mongoose";

import pkg from "validator";
const { isEmail } = pkg;

const adminUserSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: [true, "an user must have an name"],
  },

  email: {
    type: String,
    required: [true, "an user must have an email"],
    validate: [isEmail, "Please enter valid email"],
    unique: true,
  },
});

const adminUsers = mongoose.model("adminusers", adminUserSchema);

export default adminUsers;
