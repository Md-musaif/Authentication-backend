const { default: mongoose, Schema } = require("mongoose");
const bcrypt = require("bcryptjs");

const UserSchema = new Schema(
  {
    email: { type: String, require: true },
    hash: { type: String, require: true },
    salt: { type: String, require: true },
    role: { type: String, default: "user" },
  },
  { timestamps: true }
);

UserSchema.methods.setPassword = function (password) {
  // Creating a unique salt for a particular user
  this.salt = bcrypt.genSaltSync(10);
  // Hashing user's salt and password with 1000 iterations,
  this.hash = bcrypt.hashSync(password, this.salt);
};


// Method to check the entered password is correct or not
UserSchema.methods.validPassword = function (password) {
  return bcrypt.compareSync(password, this.hash);
};




const User = mongoose.model("users", UserSchema);

module.exports = User;
