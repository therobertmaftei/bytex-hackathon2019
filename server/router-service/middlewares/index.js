const HttpStatus = require('http-status-codes');
const { decodeTkn, getEvenToken, constants } = require('../utils');
const { idClaim } = constants;

exports.setLogger = logger => {
  return (req, res, next) => {
    req.log = logger;
    next();
  };
};

exports.setConfig = config => {
  return (req, res, next) => {
    req.config = config;
    req.tknConfig = {
      iss: config.TKN_ISS,
      aud: config.TKN_AUD,
    };
    next();
  };
};

exports.setDatabase = db => {
  return (req, res, next) => {
    req.db = db;
    next();
  };
};

exports.setTransporter = transporter => {
  return (req, res, next) => {
    req.transporter = transporter;
    next();
  };
};

exports.requireAuth = () => {
  return (req, res, next) => {
    try {
      const token = getEvenToken(req);

      if (token) {
        const decoded = decodeTkn(token, req.config.JWT_KEY);

        if (!decoded[idClaim]) {
          return res.status(HttpStatus.BAD_REQUEST).json({
            success: false,
            message: 'You must have an idClaim in your token',
          });
        }

        req.user = decoded;
        return next();
      }

      return res.status(HttpStatus.UNAUTHORIZED).json({
        success: false,
        message: 'You must have an authorization token',
      });
    } catch (error) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        success: false,
      });
    }
  };
};

exports.checkAdmin = () => {
  return (req, res, next) => {
    if (!req.user.admin) {
      return res.status(HttpStatus.FORBIDDEN).json({
        success: false,
        message: 'You must have an admin token',
      });
    }
    
    return next();
  };
};
