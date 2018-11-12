import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userSchema = new Schema({
  id: { type: String, require: true, unique: true },
  name: { type: String, require: true },
  email: { type: String, required: true }
});

const User = mongoose.model("User", userSchema);
export default User;
