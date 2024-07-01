const { Booking } = require("../models/index");

exports.create = async () => {
  try {
    const booking = await Booking.create();
    return booking;
  } catch (error) {
    console.log("create booking error");
    throw error;
  }
};



// exports.update = async () => {
//     try {
//       const booking = await Booking.create();
//       return booking;
//     } catch (error) {
//       console.log("create booking error");
//       throw error;
//     }
//   };