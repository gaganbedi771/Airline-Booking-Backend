const bookingService=require("../services/booking-service");
const {sendResponse}=require("../utils/response")

exports.create = async (req, res) => {
    try {
      const booking = await bookingService.createBooking(req.body);
      return sendResponse(res, 201, booking, true, "Booking created", {});
    } catch (error) {
      console.log(error);
      return sendResponse(
        res,
        500,
        {},
        false,
        "Not able to create booking",
        error
      );
    }
  };