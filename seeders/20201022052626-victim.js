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
    await queryInterface.bulkInsert('Victims', [{
      hostname: 'Test',
      ipAddress: '127.0.0.1',
      email: 'ilostmyemails@nomoreemailman.com',
      ransomwareId: 1,
      ransomSum: 2000,
      hasPaid: false,
      encyptionKey: 'zjfvoijzirof9093qqm',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      hostname: 'derick',
      ipAddress: '192.0.0.1',
      email: 'derick@rickroll.meme',
      ransomwareId: 3,
      ransomSum: 100000,
      hasPaid: false,
      encyptionKey: 'mkieofu90oisd',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      hostname: 'josephjoestar',
      ipAddress: '127.0.0.1',
      email: 'ohno@nani.approach',
      ransomwareId: 2,
      ransomSum: 99999,
      hasPaid: false,
      encyptionKey: '128391p2okemlws',
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
    await queryInterface.bulkDelete('Victims', null, {});
  }
};
