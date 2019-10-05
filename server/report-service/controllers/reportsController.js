const HttpStatus = require('http-status-codes');
const { constants } = require('../utils');
const { idClaim } = constants;
const {
  mongo: { ObjectId },
} = require('mongoose');

exports.getReports = async (req, res) => {
  try {
    const filters = {};
    const { category, user } = req.query;

    if (category) {
      filters.categories = category;
    }

    if (user) {
      filters.userId = ObjectId(user);
    }

    const reports = await req.db.Report.find(filters);
    const combinedReports = [];

    for (let report of reports) {
      const user = await req.db.User.findOne({ _id: ObjectId(report.userId) });
      delete user._doc.password;

      combinedReports.push({
        ...report._doc,
        user: {
          ...user._doc,
        },
      });
    }

    return res.status(HttpStatus.OK).json({
      success: true,
      data: {
        reports: combinedReports,
      },
    });
  } catch (error) {
    req.log.error(`Unable get reports -> ${error}`);
    return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: [`Unable get reports`],
    });
  }
};

exports.getReport = async (req, res) => {
  try {
    const { id } = req.params;
    const report = await req.db.Report.findOne({ _id: ObjectId(id) });

    if (!report) {
      return res.status(HttpStatus.NOT_FOUND).json({
        success: false,
        message: [`Report ${id} not found.`],
      });
    }

    const user = await req.db.User.findOne({ _id: ObjectId(report.userId) });
    delete user._doc.password;

    return res.status(HttpStatus.OK).json({
      success: true,
      data: {
        report: {
          ...report._doc,
          user: {
            ...user._doc,
          },
        },
      },
    });
  } catch (error) {
    req.log.error(`Unable get reports -> ${error}`);
    return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: [`Unable get reports`],
    });
  }
};

exports.deleteReport = async (req, res) => {
  try {
    const { id } = req.params;
    await req.db.Report.deleteOne({ _id: ObjectId(id) });

    return res.status(HttpStatus.NO_CONTENT).json({
      success: true,
    });
  } catch (error) {
    req.log.error(`Unable get reports -> ${error}`);
    return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: [`Unable get reports`],
    });
  }
};

exports.createReport = async (req, res) => {
  try {
    const { lat, lng } = req.query;
    const now = new Date().toISOString();
    const report = await req.db.Report.create({
      ...req.body,
      userId: req.user[idClaim],
      location: {
        lat: parseFloat(lat),
        lng: parseFloat(lng),
      },
      createdAt: now,
      updatedAt: now,
    });

    return res.status(HttpStatus.CREATED).json({
      success: true,
      data: {
        report,
      },
    });
  } catch (error) {
    req.log.error(`Unable get reports -> ${error}`);
    return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: [`Unable get reports`],
    });
  }
};
