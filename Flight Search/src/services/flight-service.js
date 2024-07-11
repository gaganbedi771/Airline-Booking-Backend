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
    const flight=await flightRepository.getFlight(id);
    if(!flight){
      throw("No flight exists")
    }
    return flight
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


exports.updateFlight = async (flightId,data) => {
  try {
    console.log(flightId,data)
    return await flightRepository.updateFlight(flightId,data);
  } catch (error) {
    console.log("service layer error");
    throw error;
  }
};