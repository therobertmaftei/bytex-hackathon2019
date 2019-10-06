const { Schema, model } = require('mongoose');

const homeSchema = new Schema({
  address: {
    type: String,
  },
  location: {
    type: Object,
  },
  bridge: {
    type: Object,
  },
  settings: {
    type: Object,
    default: {
      notifications: {
        nearbyAlarms: true,
      },
    },
  },
  state: {
    type: Object,
    default: {
      connected: true,
    },
  },
  userId: {
    type: String,
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

module.exports = model('homes', homeSchema);
