const { Airplane } = require("../models/index");

exports.getAirplane = async (id) => {
  try {
    return await Airplane.findByPk(id);
  } catch (error) {
    console.log("airplane repo error");
    throw { error };
  }
};
