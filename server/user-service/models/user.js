const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  firstname: {
    type: String,
  },
  lastname: {
    type: String,
  },
  profilePicture: {
    type: String,
  },
  createdAt: {
    type: Date
  },
  updatedAt: {
    type: Date
  }
});

module.exports = model('users', userSchema);
