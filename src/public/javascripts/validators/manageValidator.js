const { check } = require("express-validator/check");

module.exports = [
    check("tel")
        .isInt().withMessage("電話番号は整数を入力してください")
];