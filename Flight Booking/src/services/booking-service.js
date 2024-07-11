const bookingRepository = require("../repository/booking-repository");
const axios = require("axios");
const { FLIGHT_SERVICE_PATH } = require("../config/serverConfig");
const db = require("../models/index");

exports.createBooking = async (data) => {
  const transaction = await db.sequelize.transaction();

  try {
    const flightId = data.flightId;
    const flightResponse = await axios.get(
      `${FLIGHT_SERVICE_PATH}/api/v1/flight/${flightId}`
    );
    const flight = flightResponse.data.data;

    if (data.noOfSeats > flight.total_seats) {
      throw new Error("Bad request");
    }

    const price = flight.price;
    const totalCost = data.noOfSeats * price;
    const bookingPayload = { ...data, totalCost };

    const booking = await bookingRepository.create(bookingPayload, {
      transaction,
    });

    try {
      const response = await Promise.all([
        axios.patch(
          `${FLIGHT_SERVICE_PATH}/api/v1/flight/${booking.flightId}`,
          {
            total_seats: flight.total_seats - booking.noOfSeats,
          }
        ),
        bookingRepository.update(
          booking.id,
          {
            status: "Booked",
          },
          { transaction }
        ),
      ]);
      await transaction.commit();
      return response[1].dataValues;
    } catch (innerError) {
      console.error("Inner transaction error:", innerError);
      await axios.patch(
        `${FLIGHT_SERVICE_PATH}/api/v1/flight/${booking.flightId}`,
        {
          total_seats: flight.total_seats,
        }
      );
      await transaction.rollback();
      throw innerError;
    }
  } catch (error) {
    console.log("service layer error");
    if (transaction) {
      await transaction.rollback();
    }

    throw error;
  }
};
