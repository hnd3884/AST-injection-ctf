'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Ransoms', [{
      currency: 'Lolcoin',
      amount: 123,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      currency: 'Batcoin',
      amount: 22,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      currency: 'Lolcoin',
      amount: 43,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      currency: 'Lolcoin',
      amount: 123,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      currency: 'Lolcoin',
      amount: 56,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      currency: 'Zcrip',
      amount: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      currency: 'Lolcoin',
      amount: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      currency: 'Batcoin',
      amount: 23,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      currency: 'Botcoin',
      amount: 34,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      currency: 'Betcoin',
      amount: 99,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      currency: 'Botcoin',
      amount: 123,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      currency: 'Botcoin',
      amount: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      currency: 'Lolcoin',
      amount: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      currency: 'Lolcoin',
      amount: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      currency: 'Batcoin',
      amount: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      currency: 'Betcoin',
      amount: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Ransoms', null, {});
  }
};
