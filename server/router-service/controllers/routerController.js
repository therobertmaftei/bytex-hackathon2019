const HttpStatus = require('http-status-codes');
const {
  mongo: { ObjectId },
} = require('mongoose');

exports.getRouters = async (req, res) => {
  try {
    const routers = await req.db.Router.find({});

    return res.status(HttpStatus.OK).json({
      success: true,
      data: {
        routers,
      },
    });
  } catch (error) {
    req.log.error(`Unable get routers -> ${error}`);
    return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: [`Unable get routers`],
    });
  }
};

exports.getRouter = async (req, res) => {
  try {
    const { id } = req.params;

    const router = await req.db.Router.findOne({ _id: ObjectId(id) });

    if (!router) {
      return res.status(HttpStatus.NOT_FOUND).json({
        success: false,
        message: [`Router not found`],
      });
    }

    return res.status(HttpStatus.OK).json({
      success: true,
      data: {
        router,
      },
    });
  } catch (error) {
    req.log.error(`Unable get router -> ${error}`);
    return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: [`Unable get router`],
    });
  }
};

exports.createRouter = async (req, res) => {
  try {
    const { body: payload } = req;

    const router = await req.db.Router.create({
      ...payload,
    });

    return res.status(HttpStatus.CREATED).json({
      success: true,
      data: {
        router,
      },
    });
  } catch (error) {
    req.log.error(`Unable create router -> ${error}`);
    return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: [`Unable create router`],
    });
  }
};

exports.deleteRouter = async (req, res) => {
  try {
    const { id } = req.params;
    await req.db.Router.deleteOne({ _id: ObjectId(id) });

    return res.status(HttpStatus.NO_CONTENT).json({
      success: true,
    });
  } catch (error) {
    req.log.error(`Unable delete router -> ${error}`);
    return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: [`Unable delete router`],
    });
  }
};

exports.updateRouter = async (req, res) => {
  try {
    const { id } = req.params;
    const { body: payload } = req;

    const router = await req.db.Router.findOne({ _id: ObjectId(id) });

    if (!router) {
      return res.status(HttpStatus.NOT_FOUND).json({
        success: false,
        message: [`Router not found`],
      });
    }

    await req.db.Router.updateOne(
      { _id: ObjectId(id) },
      {
        ...payload,
      }
    );

    return res.status(HttpStatus.NO_CONTENT).json({
      success: true,
    });
  } catch (error) {
    req.log.error(`Unable update router -> ${error}`);
    return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: [`Unable update router`],
    });
  }
};
