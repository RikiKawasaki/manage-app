const express = require("express");
const manageControl = require("../controllers/manageController");
const manageValidation = require("../public/javascripts/validators/manageValidator");

const router = express.Router();

router.get("/", manageControl.default);
router.get("/login", manageControl.loginGet);
router.post("/login", manageControl.loginPost);
router.get("/search", manageControl.search);
router.post("/searchresult", manageControl.searchResult);
router.get("/allClients", manageControl.allClients);
router.get("/create", manageControl.create);
router.post("/confirm", manageValidation, manageControl.confirm);
router.post("/setClient", manageControl.setClient);
router.get("/edit/:id", manageControl.edit);
router.post("/update/:id", manageControl.update);
router.get("/delete/:id", manageControl.delete);

module.exports = router;
