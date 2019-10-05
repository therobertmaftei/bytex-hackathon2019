const { Schema, model } = require('mongoose');

const reportSchema = new Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  categories: {
    type: Array,
  },
  userId: {
    type: String,
  },
  location: {
    type: Object
  },
  createdAt: {
    type: Date,
  },
  updatedAt: {
    type: Date,
  },
});

module.exports = model('reports', reportSchema);
