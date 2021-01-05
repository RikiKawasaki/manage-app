const express = require('express');
const router = express.Router();
const manageControl = require("../controllers/manageController");
const manageValidation = require("../public/javascripts/validators/manageValidator");
const passport = require("../public/javascripts/passport/passport");
const session = require("express-session");

const app = express();

const authMiddleware = (req, res, next) => {
    if (req.isAuthenticated()) {
        next();
    } else {
        res.redirect("/login");
    }
};

app.use(session({
    secret: "secret",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());


router.get("/login", manageControl.loginGet);
router.post("/login", passport.authenticate("local", {
    successRedirect: "/home",
    failureRedirect: "/login",
}));
router.get("/home", manageControl.home);
router.get("/showAllClient", manageControl.showAllClient);
router.get("/create", manageControl.create);
router.post("/confirm", manageValidation, manageControl.confirm);
router.post("/setClient", manageControl.setClient);
router.get("/edit/:id", manageControl.edit);
router.post("/update/:id", manageControl.update);
router.get("/delete/:id", manageControl.delete);

module.exports = router;