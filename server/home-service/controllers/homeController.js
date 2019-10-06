const HttpStatus = require('http-status-codes');
const { constants } = require('../utils');
const { idClaim } = constants;
const {
  mongo: { ObjectId },
} = require('mongoose');

exports.getHomes = async (req, res) => {
  try {
    const homes = await req.db.Home.find({ userId: req.user[idClaim] });
    const combinedHomes = [];

    for (let home of homes) {
      const user = await req.db.User.findOne({ _id: ObjectId(home.userId) });

      if (user) {
        delete user._doc.password;

        combinedHomes.push({
          ...home._doc,
          user: {
            ...user._doc,
          },
        });
      }
    }

    return res.status(HttpStatus.OK).json({
      success: true,
      data: {
        homes: combinedHomes,
      },
    });
  } catch (error) {
    req.log.error(`Unable get homes -> ${error}`);
    return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: [`Unable get homes`],
    });
  }
};

exports.getHome = async (req, res) => {
  try {
    const { id } = req.params;

    const home = await req.db.Home.findOne({ _id: ObjectId(id) });

    if (!home) {
      return res.status(HttpStatus.NOT_FOUND).json({
        success: false,
        message: [`Home not found`],
      });
    }

    if (home.userId !== req.user[idClaim]) {
      return res.status(HttpStatus.FORBIDDEN).json({
        success: false,
        message: [`No right for this home`],
      });
    }

    const user = await req.db.User.findOne({ _id: ObjectId(home.userId) });
    delete user._doc.password;

    return res.status(HttpStatus.OK).json({
      success: true,
      data: {
        home: {
          ...home._doc,
          user: {
            ...user._doc,
          },
        },
      },
    });
  } catch (error) {
    req.log.error(`Unable get home -> ${error}`);
    return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: [`Unable get home`],
    });
  }
};

exports.createHome = async (req, res) => {
  try {
    const { body: payload } = req;
    const { bridge: bridgePayload } = payload;

    const bridge = await req.db.Bridge.findOne({ ...bridgePayload });

    if (!bridge) {
      return res.status(HttpStatus.BAD_REQUEST).json({
        success: false,
        message: [`Unable to find the bridge`],
      });
    }

    if (bridge.taken) {
      return res.status(HttpStatus.CONFLICT).json({
        success: false,
        message: [`Bridge already in use`],
      });
    }

    const home = await req.db.Home.create({
      address: payload.address,
      location: payload.location,
      bridge: { ip: bridgePayload.ip },
      userId: req.user[idClaim],
    });

    await req.db.Bridge.updateOne({ ip: bridgePayload.ip }, { taken: true });

    return res.status(HttpStatus.CREATED).json({
      success: true,
      data: {
        home,
      },
    });
  } catch (error) {
    req.log.error(`Unable create home -> ${error}`);
    return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: [`Unable create home`],
    });
  }
};

exports.deleteHome = async (req, res) => {
  try {
    const { id } = req.params;

    const home = await req.db.Home.findOne({ _id: ObjectId(id) });

    if (!home) {
      return res.status(HttpStatus.NOT_FOUND).json({
        success: false,
        message: [`Home not found`],
      });
    }

    if (home.userId !== req.user[idClaim]) {
      return res.status(HttpStatus.FORBIDDEN).json({
        success: false,
        message: [`No right for this home`],
      });
    }

    await req.db.Home.deleteOne({ _id: ObjectId(home._id) });
    await req.db.Bridge.updateOne({ ip: home.bridge.ip }, { taken: false });

    return res.status(HttpStatus.NO_CONTENT).json({
      success: true,
    });
  } catch (error) {
    req.log.error(`Unable delete home -> ${error}`);
    return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: [`Unable delete home`],
    });
  }
};

exports.updateHome = async (req, res) => {
  try {
    const { id } = req.params;
    const { body: payload } = req;

    const home = await req.db.Home.findOne({ _id: ObjectId(id) });

    if (!home) {
      return res.status(HttpStatus.NOT_FOUND).json({
        success: false,
        message: [`Home not found`],
      });
    }

    if (home.userId !== req.user[idClaim]) {
      return res.status(HttpStatus.FORBIDDEN).json({
        success: false,
        message: [`No right for this home`],
      });
    }

    await req.db.Home.updateOne(
      { _id: ObjectId(id) },
      {
        location: payload.location,
        address: payload.address,
        settings: payload.settings,
        state: payload.state,
      }
    );

    return res.status(HttpStatus.NO_CONTENT).json({
      success: true,
    });
  } catch (error) {
    req.log.error(`Unable update home -> ${error}`);
    return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: [`Unable update home`],
    });
  }
};

exports.alertHome = async (req, res) => {
  try {
    const { id } = req.params;
    const { body: payload } = req;

    const home = await req.db.Home.findOne({ _id: ObjectId(id) });

    if (!home) {
      return res.status(HttpStatus.NOT_FOUND).json({
        success: false,
        message: [`Home not found`],
      });
    }

    const users = await req.db.User.find({});

    for (const user of users) {
      if (user._id.toString() === home.userId) {
        await req.db.Notification.create({
          ...payload,
          userId: user._id.toString(),
        });
      } else {
        await req.db.Notification.create({
          description: 'A neibor have issues',
          category: 'warning',
          userId: user._id.toString(),
        });
      }
    }

    return res.status(HttpStatus.NO_CONTENT).json({
      success: true,
    });
  } catch (error) {
    req.log.error(`Unable alert home -> ${error}`);
    return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: [`Unable alert home`],
    });
  }
};
