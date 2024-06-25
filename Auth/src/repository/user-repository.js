const { User } = require("../models/index");

exports.create = async (data) => {
  try {
    // console.log(data)

    return await User.create(data);
  } catch (error) {
    console.log("Repository layer error", error);
    throw error;
  }
};

exports.getById = async (id) => {
  try {
    return await User.findByPk(id, { attributes: ["email", "id"] });
  } catch (error) {
    console.log("Repository layer error", error);
    throw error;
  }
};

exports.getByEmail = async (email) => {
  try {
    return await User.findOne({ where: { email } });
  } catch (error) {
    console.log("Repository layer error", error);
    throw error;
  }
};
