"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Flight extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Flight.init(
    {
      flight_number: { type: DataTypes.STRING, unique: true, allowNull: false },
      src_airport_id: { type: DataTypes.INTEGER, allowNull: false },
      dest_airport_id: { type: DataTypes.INTEGER, allowNull: false },
      departure: { type: DataTypes.DATE, allowNull: false },
      arrival: { type: DataTypes.DATE, allowNull: false },
      airplane_id: { type: DataTypes.INTEGER, allowNull: false },
      total_seats: { type: DataTypes.INTEGER, allowNull: false },
      price:{ type: DataTypes.INTEGER, allowNull: false },
    },
    {
      sequelize,
      modelName: "Flight",
    }
  );
  return Flight;
};
