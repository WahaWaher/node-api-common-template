module.exports = (req, res, next) => {

  /**
   * Example: Send success response
   * by registered code from "src/responses/success-responses.js"
   */

  // res.success(200000);

  // or
  // res.success(200000, {
  //   // any payload (optional), e.g.: 
  //   // data: {}, warnings: [],
  // });

  // or
  // res.success({
  //   code: 200000,
  //   // any payload (optional), e.g.: 
  //   // data: {}, warnings: [],
  // });

  /**
   * Example: Send error response
   * by registered code from "src/responses/error-responses.js"
   */

  // res.error(400001);

  // or
  // res.error({
  //   code: 400001,
  // });

  // or
  // res.error(400001, {
  //   // any payload (optional), e.g.: 
  //   data: {}, errors: []
  // });

  // or (for testing)
  // res.error({
  //   message: 'Something went wrong',
  //   status: 555
  // });

  res.send({
    message: 'Hello, world!'
  });
};