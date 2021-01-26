const { validationResult } = require("express-validator");
const Sequelize = require("sequelize");
const db = require("../models");

const Op = Sequelize.Op;

const manageControl = {
  default: (req, res, next) => {
    res.redirect("/login");
  },

  loginGet: (req, res, next) => {
    res.render("login", { title: "ログイン" });
  },

  // loginPost: (req, res, next) => {
  //   res.send("ok");
  // },

  loginPost: (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    User.findOne({
      where: {
        email: email,
      },
    })
      .then((user) => {
        if (user && bcrypt.compareSync(password, user.password)) {
          res.redirect("/home");
        }
        throw new Error();
      })
      .catch(() => {
        res.redirect("/login");
      });
  },

  search: (req, res, next) => {
    res.render("search", { title: "検索" });
  },

  searchResult: (req, res, next) => {
    const search = req.body.search;
    db.Manage.findAll({
      where: {
        [Op.or]: [
          {
            clientName: {
              [Op.like]: `%${search}%`,
            },
          },
          {
            address: {
              [Op.like]: `%${search}%`,
            },
          },
          {
            tel: {
              [Op.like]: `%${search}%`,
            },
          },
        ],
      },
    })
      .then((users) => {
        res.render("searchResult", { title: "検索結果", users });
      })
      .catch(() => {
        res.send("Not Found");
      });
  },

  allClients: async (req, res, next) => {
    const manages = await db.Manage.findAll();
    res.render("allClients", { title: "顧客一覧", manages });
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
        tel: obj.tel,
      });
    }
  },

  setClient: (req, res, next) => {
    db.Manage.create({
      clientName: req.body.clientName,
      address: req.body.address,
      tel: req.body.tel,
    });
    res.redirect("/allClients");
  },

  edit: async (req, res, next) => {
    const manages = await db.Manage.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.render("edit", { title: "編集", manages });
  },

  update: (req, res, next) => {
    db.Manage.update(
      {
        clientName: req.body.clientName,
        address: req.body.address,
        tel: req.body.tel,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.redirect("/allClients");
  },

  delete: async (req, res, next) => {
    const id = await req.params.id;
    db.Manage.destroy({
      where: {
        id: id,
      },
    });
    res.redirect("/allClients");
  },
};

module.exports = manageControl;
