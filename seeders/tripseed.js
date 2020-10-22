'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('trip', [{
      TripName: 'Transylvania',
      FromDate: new Date(),
      ToDate: new Date(),
      EmergencyContact: 'Velma D.: 2223334444',
      Comments: 'Please give Velma a call if I do not send you a message when I return.',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('trip', null, {});
  }
};

