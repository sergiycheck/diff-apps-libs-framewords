'use strict';

const { getResponse, getLocalGreeting, pickLocale } = require('./utils');

module.exports.getCurrTime = (event, context, callback) => {
  const responseBody = {
    message: `Hello, the current time is ${new Date().toTimeString()}.`,
  };

  getResponse(responseBody, callback);
};

module.exports.getLocGreeting = (event, context, callback) => {
  const responseBody = {
    greeting: getLocalGreeting(pickLocale()),
  };

  getResponse(responseBody, callback);
};
