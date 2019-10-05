const HttpStatus = require('http-status-codes');
const { insideCircle } = require('geolocation-utils');

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
