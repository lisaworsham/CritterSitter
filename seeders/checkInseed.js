'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('tripCheckIn', [{
      Comments: '  ',
      
    }]);
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('tripCheckIn', null, {});
  }
};
