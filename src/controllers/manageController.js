const { validationResult } = require("express-validator");
const db = require("../models");

const manageControl = {
    loginGet: (req, res, next) => {
        res.render("login", { title: "ログイン" });
    },

    // loginPost: (req, res, next) => {
    //     res.send("ok");
    // },

    home: (req, res, next) => {
        res.send("OK");
    },

    showAllClient: async (req, res, next) => {
        const manages = await db.Manage.findAll();
        res.render('allClients', { title: '顧客一覧', manages });
    },

    create: (req, res, next) => {
        res.render("create", {
            title: "新規登録",
        });
    },

    confirm: (req, res, next) => {
        const errors = validationResult(req);
        const obj = req.body;
        if (!errors.isEmpty()) {
            const errors_array = errors.array();
            res.render("confirm", {
                title: "確認",
                errorMessage: errors_array,
            });
        } else {
            res.render("confirm", {
                title: "確認",
                errorMessage: "",
                clientName: obj.clientName,
                address: obj.address,
                tel: obj.tel
            });
        }
    },

    setClient: (req, res, next) => {
        db.Manage.create({
            clientName: req.body.clientName,
            address: req.body.address,
            tel: req.body.tel
        });
        res.redirect("/showAllClient");
    },

    edit: async (req, res, next) => {
        const manages = await db.Manage.findOne({
            where: {
                id: req.params.id
            }
        });
        res.render("edit", { title: "編集", manages });
    },

    update: (req, res, next) => {
        db.Manage.update({
            clientName: req.body.clientName,
            address: req.body.address,
            tel: req.body.tel
        }, {
            where: {
                id: req.params.id
            }
        });
        res.redirect("/showAllClient");
    },

    delete: async (req, res, next) => {
        const id = await req.params.id;
        db.Manage.destroy({
            where: {
                id: id
            }
        });
        res.redirect("/showAllClient");
    }
};

module.exports = manageControl;