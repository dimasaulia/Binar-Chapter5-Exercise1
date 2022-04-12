const express = require("express");
const router = express.Router();
const controller = require("./controllers/controllers");
const auth = require("./middleware/auth");

router.get("/", controller.view_1);
router.get("/view-2", controller.view_2);
router.get("/view-3", controller.view_3);

router.get("/check-health", controller.checkHealth);
router.get("/biodata", auth.validateAuthKey, controller.biodata);
router.post("/biodata", controller.query);

module.exports = router;
