const User = require('./user');
const Bridge = require('./bridge');
const Home = require('./home');
const Notification = require('./notification');

const db = {
  User,
  Bridge,
  Home,
  Notification
};

module.exports = db;
