const router = require("express").Router();

// Adding a url
router.post("/add-url", require("../../../controllers/api/v1/url_controller").addUrl);

module.exports = router;