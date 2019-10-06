const HttpStatus = require('http-status-codes');
const { insideCircle } = require('geolocation-utils');

const { constants } = require('../utils');
const { idClaim } = constants;
const {
  mongo: { ObjectId },
} = require('mongoose');

exports.checkStatus = async (req, res) => {
  try {
    const { lat, lng } = req.query;

    const isInside = insideCircle(
      { lat: parseFloat(lat), lon: parseFloat(lng) },
      {
        lat: parseFloat(req.config.SERVER_LAT),
        lon: parseFloat(req.config.SERVER_LNG),
      },
      parseInt(req.config.SERVER_RADIUS)
    );

    if (!isInside) {
      return res.status(HttpStatus.NOT_ACCEPTABLE).json({
        success: false,
        message: ['Not inside the range'],
      });
    }

    return res.status(HttpStatus.OK).json({
      success: true,
    });
  } catch (error) {
    req.log.error(`Unable to get location status -> ${req.url} -> ${error}`);
    return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: [`Unable to get location status`],
    });
  }
};

exports.getNotifications = async (req, res) => {
  try {
    const notifications = await req.db.Notification.find({
      userId: ObjectId(req.user[idClaim]),
    })
      .sort('-createdAt')
      .limit(10);

    return res.status(HttpStatus.OK).json({
      success: true,
      data: {
        notifications,
      },
    });
  } catch (error) {
    req.log.error(`Unable to get notifications -> ${req.url} -> ${error}`);
    return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: [`Unable to get notifications`],
    });
  }
};

exports.getUser = async (req, res) => {
  try {
    const user = await req.db.User.findOne({
      _id: ObjectId(req.user[idClaim]),
    });
    delete user._doc.password;

    return res.status(HttpStatus.OK).json({
      success: true,
      data: {
        user,
      },
    });
  } catch (error) {
    req.log.error(`Unable to get user -> ${req.url} -> ${error}`);
    return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: [`Unable to get user`],
    });
  }
};
