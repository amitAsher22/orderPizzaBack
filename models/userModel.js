import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: { type: String },
  email: { type: String },
  password: { type: String },
  isAdmin: { type: Boolean, default: false },
});

const userModel = mongoose.model("users", userSchema);

export default userModel;
