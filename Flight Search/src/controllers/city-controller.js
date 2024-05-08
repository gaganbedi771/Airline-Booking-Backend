const cityService = require("../services/city-service");
const { sendResponse } = require("../utils/response");

exports.create = async (req, res) => {
  try {
    const city = await cityService.createCity(req.body);
    return sendResponse(res, 201, city, true, "City created", {});
  } catch (error) {
    // console.log(error);
    return sendResponse(
      res,
      500,
      {},
      false,
      "Not able to create the city",
      error
    );
  }
};

exports.destroy = async (req, res) => {
  try {
    const response = await cityService.deleteCity(req.params.id);
    return sendResponse(res, 200, response, true, "City deleted", {});
  } catch (error) {
    console.log(error);
    return sendResponse(
      res,
      500,
      {},
      false,
      "Not able to delete the city",
      error
    );
  }
};

exports.get = async (req, res) => {
  try {
    const city = await cityService.getCity(req.params.id);
    return sendResponse(res, 200, city, true, "City fetched", {});
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to get the city",
      err: error,
    });
  }
};

exports.getAll = async (req, res) => {
  try {
    const cities = await cityService.getAllCities(req.query);
    return sendResponse(res, 200, cities, true, "Cities fetched", {});
  } catch (error) {
    console.log(error);
    return sendResponse(
      res,
      500,
      {},
      false,
      "Not able to get all the cities",
      error
    );
  }
};

exports.update = async (req, res) => {
  try {
    const city = await cityService.updateCity(req.params.id, req.body);
    return sendResponse(res, 200, city, true, "city updated", {});
  } catch (error) {
    console.log(error);
    return sendResponse(
      res,
      500,
      {},
      false,
      "Not able to update the city",
      error
    );
  }
};
