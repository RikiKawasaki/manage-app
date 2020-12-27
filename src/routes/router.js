const express = require('express');
const router = express.Router();
const manageControl = require("../controllers/manageController");

router.get("/", manageControl.showAllClient);
router.post("/", manageControl.setClient);
router.get("/create", manageControl.create);
router.post("/confirm", manageControl.confirm);

module.exports = router;