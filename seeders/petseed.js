'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('petProfile', [{
      PetName: 'Scooby',
      PetType: 'Dog: Great Dane',
      Food: 'Anything you are eating.',
      FoodAmt: 'More than enough', 
      VetInfo: '1112223333',
      Comments: 'Dog must eat every half hour',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('petProfile', null, {});
  }
};