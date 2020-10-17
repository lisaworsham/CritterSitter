'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('User', [{
      Email: 'shaggy@mysteryinc.org',
      UserPassword: 'food',
      FirstName: 'Norville',
      LastName: 'Rogers', 
      PhoneNum: '1234567890',
      ZipCode: '12345',
      PetOwner: true,
      PetSitter: false,
    }]);
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('User', null, {});
  }
};
