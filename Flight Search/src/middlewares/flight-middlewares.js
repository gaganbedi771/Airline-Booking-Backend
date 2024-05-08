const { sendResponse } = require("../utils/response");

exports.validateFlightData = (req, res, next) => {
  if (
    !(
      req.body.flight_number &&
      req.body.src_airport_id &&
      req.body.dest_airport_id &&
      req.body.departure &&
      req.body.arrival &&
      req.body.airplane_id &&
      req.body.price
    )
  ) {
    return sendResponse(res, 400, {}, false, "send correct data");
  }
  next();
};
