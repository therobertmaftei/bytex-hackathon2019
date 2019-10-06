const HttpStatus = require('http-status-codes');
const { constants } = require('../utils');
const { idClaim } = constants;
const {
  mongo: { ObjectId },
} = require('mongoose');

exports.getCars = async (req, res) => {
  try {
    const cars = await req.db.Car.find({ userId: req.user[idClaim] });
    const combinedCars = [];

    for (let car of cars) {
      const user = await req.db.User.findOne({ _id: ObjectId(car.userId) });

      if (user) {
        delete user._doc.password;

        combinedCars.push({
          ...car._doc,
          user: {
            ...user._doc,
          },
        });
      }
    }

    return res.status(HttpStatus.OK).json({
      success: true,
      data: {
        cars: combinedCars,
      },
    });
  } catch (error) {
    req.log.error(`Unable get cars -> ${error}`);
    return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: [`Unable get cars`],
    });
  }
};

exports.getCar = async (req, res) => {
  try {
    const { id } = req.params;

    const car = await req.db.Car.findOne({ _id: ObjectId(id) });

    if (!car) {
      return res.status(HttpStatus.NOT_FOUND).json({
        success: false,
        message: [`Car not found`],
      });
    }

    if (car.userId !== req.user[idClaim]) {
      return res.status(HttpStatus.FORBIDDEN).json({
        success: false,
        message: [`No right for this car`],
      });
    }

    const user = await req.db.User.findOne({ _id: ObjectId(car.userId) });
    delete user._doc.password;

    return res.status(HttpStatus.OK).json({
      success: true,
      data: {
        car: {
          ...car._doc,
          user: {
            ...user._doc,
          },
        },
      },
    });
  } catch (error) {
    req.log.error(`Unable get car -> ${error}`);
    return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: [`Unable get car`],
    });
  }
};

exports.createCar = async (req, res) => {
  try {
    const { body: payload } = req;

    const car = await req.db.Car.create({
      ...payload,
      userId: req.user[idClaim],
    });

    return res.status(HttpStatus.CREATED).json({
      success: true,
      data: {
        car,
      },
    });
  } catch (error) {
    req.log.error(`Unable create car -> ${error}`);
    return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: [`Unable create car`],
    });
  }
};

exports.deleteCar = async (req, res) => {
  try {
    const { id } = req.params;

    const car = await req.db.Car.findOne({ _id: ObjectId(id) });

    if (!car) {
      return res.status(HttpStatus.NOT_FOUND).json({
        success: false,
        message: [`Car not found`],
      });
    }

    if (car.userId !== req.user[idClaim]) {
      return res.status(HttpStatus.FORBIDDEN).json({
        success: false,
        message: [`No right for this car`],
      });
    }

    await req.db.Car.deleteOne({ _id: ObjectId(car._id) });

    return res.status(HttpStatus.NO_CONTENT).json({
      success: true,
    });
  } catch (error) {
    req.log.error(`Unable delete car -> ${error}`);
    return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: [`Unable delete car`],
    });
  }
};

exports.updateCar = async (req, res) => {
  try {
    const { id } = req.params;
    const { body: payload } = req;

    const car = await req.db.Car.findOne({ _id: ObjectId(id) });

    if (!car) {
      return res.status(HttpStatus.NOT_FOUND).json({
        success: false,
        message: [`Car not found`],
      });
    }

    if (car.userId !== req.user[idClaim]) {
      return res.status(HttpStatus.FORBIDDEN).json({
        success: false,
        message: [`No right for this car`],
      });
    }

    await req.db.Car.updateOne(
      { _id: ObjectId(id) },
      {
        location: payload.location,
        settings: payload.settings,
        state: payload.state,
      }
    );

    return res.status(HttpStatus.NO_CONTENT).json({
      success: true,
    });
  } catch (error) {
    req.log.error(`Unable update car -> ${error}`);
    return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: [`Unable uddate car`],
    });
  }
};
