const router = require("express").Router();

// routing v1 calls
router.use("/v1", require("./v1"));

module.exports = router;