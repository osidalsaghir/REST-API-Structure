const express = require("express");
const router = express.Router();
const controller = require('../controllers/cat');


router.get("/getall",controller.getall);
router.get("/setcat",controller.setcat);



module.exports = router;