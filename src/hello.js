"use strict";

const hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Hello2 ",
      },
      null,
      2
    ),
  };
};

module.exports = {
    handler: hello,
};
