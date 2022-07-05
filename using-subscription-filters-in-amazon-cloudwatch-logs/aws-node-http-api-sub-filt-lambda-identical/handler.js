"use strict";
const zlib = require("zlib");

module.exports.handler = async (input, context) => {
  const payload = Buffer.from(input.awslogs.data, "base64");
  zlib.gunzip(payload, function (error, result) {
    if (error) {
      console.log("an error occurred ", error);
      context.fail(error);
    } else {
      result = JSON.parse(result.toString());
      console.log("Event Data:", JSON.stringify(result, null, 2));
      context.succeed();

      return {
        statusCode: 200,
        body: JSON.stringify(
          {
            result,
          },
          null,
          2
        ),
      };
    }
  });
};
