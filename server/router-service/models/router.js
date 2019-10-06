const { Schema, model } = require('mongoose');

const routerSchema = new Schema({
  address: {
    type: String,
  },
  location: {
    type: Object,
  },
  state: {
    type: Object,
    default: {
      active: true,
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

module.exports = model('routers', routerSchema);
