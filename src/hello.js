"use strict";

const hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Hello1 ",
      },
      null,
      2
    ),
  };
};

module.exports = {
    handler: hello,
};
