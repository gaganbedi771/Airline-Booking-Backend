"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await queryInterface.bulkInsert(
      "Airplanes",
      [
        {
          model_number: "Boing 737",
          capacity: 300,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          model_number: "Airbus 320",
          capacity: 320,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          model_number: "Boing 777",
          capacity: 400,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          model_number: "Airbus 330",
          capacity: 300,
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
