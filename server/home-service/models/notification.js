const { Schema, model } = require('mongoose');

const notificationSchema = new Schema({
  description: {
    type: String,
  },
  category: {
    type: String,
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

module.exports = model('notifications', notificationSchema);
