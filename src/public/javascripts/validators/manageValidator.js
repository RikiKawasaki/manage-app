const { check } = require("express-validator/check");

module.exports = [
    check("clientName")
        .not().isEmpty().withMessage("顧客名は入力必須です"),
    check("address")
        .not().isEmpty().withMessage("住所は入力必須です"),
    check("tel")
        .isInt().withMessage("電話番号は整数を入力してください")
];