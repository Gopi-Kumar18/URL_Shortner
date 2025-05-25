const express = require("express");
const { generateNewShortUrl } = require("../controllers/url");
const contactCon = require("../controllers/contact");
const router = express.Router();

router.post("/",generateNewShortUrl);
router.post("/send-email", contactCon);

module.exports = router;



