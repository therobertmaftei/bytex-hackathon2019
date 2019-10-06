const { Schema, model } = require('mongoose');

const reportSchema = new Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  category: {
    type: String,
  },
  userId: {
    type: String,
  },
  location: {
    type: Object
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

module.exports = model('reports', reportSchema);
