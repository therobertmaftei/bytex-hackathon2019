const { Schema, model } = require('mongoose');

const bridgeSchema = new Schema({
  ip: {
    type: String,
  },
  password: {
    type: String,
  },
  taken: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: new Date().toISOString(),
  },
  updatedAt: {
    type: Date,
    default: new Date().toISOString(),
  },
});

module.exports = model('bridges', bridgeSchema);
