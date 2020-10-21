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

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('User', [{
      Email: 'shaggy@mysteryinc.org',
      UserPassword: 'food',
      FirstName: 'Cesar',
      LastName: 'Millan', 
      PhoneNum: '0987654321',
      ZipCode: '54321',
      PetOwner: false,
      PetSitter: true,
    }]);
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('User', null, {});
  }
};