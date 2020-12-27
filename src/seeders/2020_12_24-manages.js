const db = require("../models");

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert(
            "Manages",
            [
                {
                    clientName: "xxx",
                    address: "xxxyyyzzz",
                    tel: 01011111111,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    clientName: "yyy",
                    address: "yyyzzzxxx",
                    tel: 02022222222,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    clientName: "zzz",
                    address: "zzzxxxyyy",
                    tel: 03033333333,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
            {}
        );
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete("Manages", null, {});
    },
};