const router = require("express").Router();

// routing api calls
router.use("/api", require("./api"));

router.get("/:key", require("../controllers/redirect_controller").redirectTo);

module.exports = router;