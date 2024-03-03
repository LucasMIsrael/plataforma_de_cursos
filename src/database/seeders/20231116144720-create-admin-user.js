"use strict";

const bcrypt = require("bcrypt");

("use strict");

module.exports = {
  async up(queryInterface, Sequelize) {
    const hashedPassword = await bcrypt.hash("123456", 10);

    await queryInterface.bulkInsert("users", [
      {
        first_name: "Admin",
        last_name: "User",
        phone: "555-5555",
        birth: "1990-01-01",
        email: "admin@email.com",
        password: hashedPassword,
        role: "admin",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, { where: { email: "admin@email.com" } });
  },
};
//    * Example:
//    * await queryInterface.bulkInsert('People', [{
//    *   name: 'John Doe',
//    *   isBetaMember: false
//    * }], {});
//   */
// },

// async down (queryInterface, Sequelize) {
//   /**
//    * Add commands to revert seed here.
//    *
//    * Example:
//    * await queryInterface.bulkDelete('People', null, {});
//    */
// }
