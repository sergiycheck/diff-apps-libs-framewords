"use strict";

module.exports.hello = async (event) => {
  const data = {
    message: "Go Serverless v3.0! Your function executed successfully!",
    input: event,
  };
  const body = JSON.stringify(data, null, 2);
  return {
    statusCode: 200,
    body,
  };
};
