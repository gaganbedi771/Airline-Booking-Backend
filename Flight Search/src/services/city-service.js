const cityRepository = require("../repository/city-repository");

exports.createCity = async (data) => {
  try {
    console.log(data);
    return await cityRepository.createCity(data);
  } catch (error) {
    console.log("service layer error");
    throw error;
  }
};

exports.deleteCity = async (cityId) => {
  try {
    await cityRepository.deleteCity(cityId);
    return true;
  } catch (error) {
    console.log("service layer error");
    throw error;
  }
};

exports.updateCity = async (cityId, data) => {
  try {
    return await cityRepository.updateCity(cityId, data);
  } catch (error) {
    console.log("service layer error");
    throw error;
  }
};

exports.getCity = async (cityId) => {
  try {
    return await cityRepository.getCity(cityId);
  } catch (error) {
    console.log("service layer error");

    throw error;
  }
};

exports.getAllCities = async (filter) => {
  try {

    return await cityRepository.getAllCities({name:filter.name})
  } catch (error) {
    console.log("service layer error");

    throw error;
  }
};
