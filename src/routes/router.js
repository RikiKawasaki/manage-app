const express = require('express');
const router = express.Router();
const manageControl = require("../controllers/manageController");
const manageValidation = require("../public/javascripts/validators/manageValidator");

router.get("/", manageControl.home);
// router.get("/research", manageControl.research);
router.get("/showAllClient", manageControl.showAllClient);
router.get("/create", manageControl.create);
router.post("/confirm", manageValidation, manageControl.confirm);
router.post("/setClient", manageControl.setClient);
router.get("/edit/:id", manageControl.edit);
router.post("/update/:id", manageControl.update);
router.get("/delete/:id", manageControl.delete);

module.exports = router;