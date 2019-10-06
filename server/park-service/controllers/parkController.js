const HttpStatus = require('http-status-codes');
const { constants } = require('../utils');
const {
  mongo: { ObjectId },
} = require('mongoose');

exports.getParks = async (req, res) => {
  try {
    const parks = await req.db.Park.find({});

    return res.status(HttpStatus.OK).json({
      success: true,
      data: {
        parks,
      },
    });
  } catch (error) {
    req.log.error(`Unable get parks -> ${error}`);
    return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: [`Unable get parks`],
    });
  }
};

exports.getPark = async (req, res) => {
  try {
    const { id } = req.params;

    const park = await req.db.Park.findOne({ _id: ObjectId(id) });

    if (!park) {
      return res.status(HttpStatus.NOT_FOUND).json({
        success: false,
        message: [`Park not found`],
      });
    }

    return res.status(HttpStatus.OK).json({
      success: true,
      data: {
        park,
      },
    });
  } catch (error) {
    req.log.error(`Unable get park -> ${error}`);
    return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: [`Unable get park`],
    });
  }
};

exports.createPark = async (req, res) => {
  try {
    const { body: payload } = req;

    const park = await req.db.Park.create({
      ...payload,
    });

    return res.status(HttpStatus.CREATED).json({
      success: true,
      data: {
        park,
      },
    });
  } catch (error) {
    req.log.error(`Unable create park -> ${error}`);
    return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: [`Unable create park`],
    });
  }
};

exports.deletePark = async (req, res) => {
  try {
    const { id } = req.params;
    await req.db.Park.deleteOne({ _id: ObjectId(id) });

    return res.status(HttpStatus.NO_CONTENT).json({
      success: true,
    });
  } catch (error) {
    req.log.error(`Unable delete park -> ${error}`);
    return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: [`Unable delete park`],
    });
  }
};

exports.updatePark = async (req, res) => {
  try {
    const { id } = req.params;
    const { body: payload } = req;

    const park = await req.db.Park.findOne({ _id: ObjectId(id) });

    if (!park) {
      return res.status(HttpStatus.NOT_FOUND).json({
        success: false,
        message: [`Park not found`],
      });
    }

    await req.db.Park.updateOne(
      { _id: ObjectId(id) },
      {
        usage: {
          used: payload.used,
        },
      }
    );

    return res.status(HttpStatus.NO_CONTENT).json({
      success: true,
    });
  } catch (error) {
    req.log.error(`Unable update park -> ${error}`);
    return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: [`Unable update park`],
    });
  }
};
