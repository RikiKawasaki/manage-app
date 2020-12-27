const db = require("../models");

const manageControl = {
    showAllClient: async function(req, res, next) {
        const manages = await db.Manage.findAll();
        res.render('allClients', { title: '顧客一覧', manages });
    },

    setClient: function(req, res, next) {
        const obj = req.body;
        db.Manage.create({
            clientName: obj.clientName,
            address: obj.address,
            tel: obj.tel
        });
        res.redirect("/");
    },

    create: function(req, res, next) {
        res.render("create", { title: "新規登録" });
    },

    confirm: function(req, res, next) {
        const clientName = req.body.clientName;
        const address = req.body.address;
        const tel = req.body.tel;
        res.render("confirm", {
            title: "確認",
            clientName: clientName,
            address: address,
            tel: tel
        });
    },
};

module.exports = manageControl;