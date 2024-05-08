const flightRepository = require("../repository/flight-repository");
const airplaneRepository = require("../repository/airplane-repository");
const { compareTime } = require("../utils/helper");

exports.createFlight = async (data) => {
  try {
    if (!compareTime(data.arrival, data.departure)) {
      throw { error: "Arrival time cannot be less than departure time" };
    }
    const airplane = await airplaneRepository.getAirplane(data.airplane_id);

    return await flightRepository.createFlight({
      ...data,
      total_seats: airplane.capacity,
    });
  } catch (error) {
    console.log("service layer error");
    throw error;
  }
};

exports.getFlight = async (id) => {
  try {
    return await flightRepository.getFlight(id);
  } catch (error) {
    console.log("service layer error");
    throw error;
  }
};

exports.getAllFlights = async (filter) => {
  try {
    return await flightRepository.getAllFlights(filter);
  } catch (error) {
    console.log("service layer error");
    throw error;
  }
};
