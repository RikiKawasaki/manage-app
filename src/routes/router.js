const express = require("express");
const passport = require("passport");
const manageControl = require("../controllers/manageController");
const manageValidation = require("../public/javascripts/validators/manageValidator");

const router = express.Router();

function isAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    res.redirect("/login");
  }
}

router.get("/", manageControl.default);
router.get("/login", manageControl.login);
router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/search",
    failureRedirect: "/login",
    session: true,
  })
);
router.get("/logout", manageControl.logout);
router.get("/search", isAuthenticated, manageControl.search);
router.post("/searchresult", isAuthenticated, manageControl.searchResult);
router.get("/allClients", isAuthenticated, manageControl.allClients);
router.get("/create", isAuthenticated, manageControl.create);
router.post(
  "/confirm",
  isAuthenticated,
  manageValidation,
  manageControl.confirm
);
router.post("/setClient", isAuthenticated, manageControl.setClient);
router.get("/edit/:id", isAuthenticated, manageControl.edit);
router.post("/update/:id", isAuthenticated, manageControl.update);
router.get("/delete/:id", isAuthenticated, manageControl.delete);

module.exports = router;
