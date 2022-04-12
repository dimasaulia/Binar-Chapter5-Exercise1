const express = require("express");
const router = express.Router();
const controller = require("./controllers/controllers");

router.get("/check-health", controller.checkHealth);
router.get("/biodata", controller.biodata);
router.post("/biodata", controller.query);

module.exports = router;
