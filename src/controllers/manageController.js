const db = require("../models");
const { validationResult } = require("express-validator");
const { values } = require("../public/javascripts/validators/manageValidator");

const manageControl = {
    home: (req, res, next) => {
        res.render("home", { title: "顧客管理ツール" });
    },

    // research: (req, res, next) => {
    //     db.Manage.findAll({

    //     })
    //     res.render("")
    // },

    showAllClient: async (req, res, next) => {
        const manages = await db.Manage.findAll();
        res.render('allClients', { title: '顧客一覧', manages });
    },

    create: (req, res, next) => {
        res.render("create", { title: "新規登録" });
    },

    confirm: (req, res, next) => {
        const errors = validationResult(req);
        const obj = req.body;
        if (!errors.isEmpty()) {
            // return res.status(400).json({ errors: errors.array() });
            const errors_array = errors.array();
            res.render("confirm", {
                title: "確認",
                errorMessage: errors_array,
                // clientName: obj.clientName,
                // address: obj.address,
                // tel: obj.tel
            });
        } else {
            // const obj = req.body;
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