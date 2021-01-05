'use strict';
const bcrypt = require("bcrypt");

module.exports = {
    up: (queryInterface, Sequelize) => {
    const now = new Date();
    return queryInterface.bulkInsert("Users",[
        {
        name: "Test",
        email: "test@example.com",
        password: bcrypt.hashSync("secret", bcrypt.genSaltSync(10)),
        createdAt: now,
        updatedAt: now
        }
    ], {});
},

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete("Users", null, {});
    }
};