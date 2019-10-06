const HttpStatus = require('http-status-codes');
const bcrypt = require('bcrypt');
const axios = require('axios');
const uuid = require('uuid/v4');

const { createTkn, email } = require('../utils');
const { sendEmail } = email;

const AWS = require('aws-sdk');
AWS.config.apiVersions = {
  s3: '2006-03-01',
};

exports.login = async (req, res) => {
  try {
    const user = await req.db.User.findOne({ email: req.body.email });

    if (!user) {
      return res.status(HttpStatus.NOT_FOUND).json({
        success: false,
        message: [`${req.body.email} not found.`],
      });
    }

    const matchPassword = bcrypt.compareSync(req.body.password, user.password);

    if (!matchPassword) {
      return res.status(HttpStatus.NOT_FOUND).json({
        success: false,
        message: [`Wrong password`],
      });
    }

    const token = createTkn(
      { ...user._doc, aud: req.config.TKN_AUD, iss: req.config.TKN_ISS },
      req.config.JWT_KEY
    );

    return res.status(HttpStatus.OK).json({
      success: true,
      data: {
        token,
      },
    });
  } catch (error) {
    req.log.error(`Unable get user -> ${req.url} -> ${error}`);
    return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: [`Unable get user`],
    });
  }
};

exports.register = async (req, res) => {
  try {
    const oldUser = await req.db.User.findOne({ email: req.body.email });

    if (oldUser) {
      return res.status(HttpStatus.CONFLICT).json({
        success: false,
        message: [`${req.body.email} is already registered.`],
      });
    }

    const password = bcrypt.hashSync(req.body.password, 10);

    const photo = (await axios.get(
      `${req.config.AVATAR_URL}${req.body.firstname}+${req.body.lastname}`,
      {
        responseType: 'arraybuffer',
      }
    )).data;

    const s3Config = {
      accessKeyId: req.config.AWS_ACCESS_KEY,
      secretAccessKey: req.config.AWS_SECRET_KEY,
    };

    const S3 = new AWS.S3(s3Config);

    const profile = await S3.upload({
      Bucket: req.config.AWS_S3_BUCKET,
      Key: `profilePictures/${uuid()}.png`,
      Body: photo,
      ACL: 'public-read',
    }).promise();

    const user = await req.db.User.create({
      ...req.body,
      password,
      profilePicture: profile.Location,
    });
    delete user._doc.password;

    const token = createTkn(
      { ...user._doc, aud: req.config.TKN_AUD, iss: req.config.TKN_ISS },
      req.config.JWT_KEY
    );

    sendEmail({
      template: 'welcome',
      vars: { name: `${req.body.firstname} ${req.body.lastname}` },
      transporter: req.transporter,
      from: req.config.GMAIL_DEFAULT,
      to: user.email,
      subject: 'Welcome',
    });

    return res.status(HttpStatus.CREATED).json({
      success: true,
      data: {
        token,
      },
    });
  } catch (error) {
    req.log.error(`Unable create user -> ${error}`);
    return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: [`Unable create user`],
    });
  }
};
