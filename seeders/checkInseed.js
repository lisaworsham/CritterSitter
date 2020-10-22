'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('tripCheckIn', [{
      Comments: '  ',
      createdAt: new Date(),
      updatedAt: new Date(),
      tripID: 1
    }]);
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('tripCheckIn', null, {});
  }
};
