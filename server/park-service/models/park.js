const { Schema, model } = require('mongoose');

const parkSchema = new Schema({
  address: {
    type: String,
  },
  location: {
    type: Object,
  },
  usage: {
    type: Object,
    default: {
      total: 100,
      used: 0,
    },
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

module.exports = model('parks', parkSchema);
