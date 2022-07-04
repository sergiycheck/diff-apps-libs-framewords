'use strict';

module.exports.hello = async (event) => {
  console.log('LogEC2InstanceStateChange');
  const request = JSON.stringify(event, null, 2);
  console.log('Received request', request);
  return {
    statusCode: 200,
    body: request,
  };
};
