const router = require("express").Router();

// routing api calls
router.use("/api", require("./api"));

module.exports = router;