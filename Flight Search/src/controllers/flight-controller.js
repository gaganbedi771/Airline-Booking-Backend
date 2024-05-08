const flightService = require("../services/flight-service");
const {sendResponse}=require("../utils/response");

exports.create = async (req, res) => {
  try {
    const flightData = {
      flight_number: req.body.flight_number,
      src_airport_id: req.body.src_airport_id,
      dest_airport_id: req.body.dest_airport_id,
      departure: req.body.departure,
      arrival: req.body.arrival,
      airplane_id: req.body.airplane_id,
      price: req.body.price,
    };
    const flight = await flightService.createFlight(flightData);
    return sendResponse(res, 201, flight, true, "Flight created", {});
  } catch (error) {
    console.log(error);
    return sendResponse(
      res,
      500,
      {},
      false,
      "Not able to create the flight",
      error
    );
  }
};

exports.get = async (req, res) => {
  try {
    const flight = await flightService.getFlight(req.params.id);
    return sendResponse(res, 201, flight, true, "Flight fetched", {});
  } catch (error) {
    console.log(error);

    return sendResponse(
      res,
      500,
      {},
      false,
      "Not able to fetch the flight by id",
      error
    );
  }
};

exports.getAll = async (req, res) => {
  try {
    const flights = await flightService.getAllFlights(req.query);
    return sendResponse(res, 201, flights, true, "Flights fetched", {});
  } catch (error) {
    console.log(error);

    return sendResponse(
      res,
      500,
      {},
      false,
      "Not able to fetch the flights",
      error
    );
  }
};
