const { Op } = require("sequelize");
const { Flight } = require("../models/index");

exports.createFlight = async (data) => {
  try {
    return await Flight.create(data);
  } catch (error) {
    console.log("flight repo error");
    throw { error };
  }
};

exports.getFlight = async (id) => {
  try {
    return await Flight.findByPk(id);
  } catch (error) {
    console.log("flight repo error");
    throw { error };
  }
};

exports.getAllFlights = async (filter) => {
  try {
    const filterObject = createFilter(filter);
    return await Flight.findAll({
      where: filterObject,
    });
  } catch (error) {
    console.log("flight repo error");
    throw { error };
  }
};

function createFilter(data) {
  const filterObject = {
    src_airport_id: data.src_airport_id,
    dest_airport_id: data.dest_airport_id,
    price: { [Op.gte]: data.min_price||0 },
  };

  if (data.max_price) {
    filterObject.price = { [Op.between]: [data.min_price||0, data.max_price] };
  }

  return filterObject;
}
