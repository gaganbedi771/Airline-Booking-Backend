const { Booking } = require("../models/index");

exports.create = async (data) => {
  try {
    const booking = await Booking.create(data);
    return booking;
  } catch (error) {
    console.log("create booking error");
    throw error;
  }
};

exports.update = async (bookingId, data) => {
  try {
    const booking=await Booking.findByPk(bookingId);
    booking.status=data.status;
    await booking.save();
    // console.log(booking)
    return booking;
  } catch (error) {
    console.log("update booking error");
    throw error;
  }
};
