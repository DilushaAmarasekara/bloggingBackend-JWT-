const express = require("express");
const router = express.Router();
const { login } = require("./routes/login");
const { register } = require("./routes/register");

const verifyAccessToken = require("../middleware/token");
const checkAdmin = require("../middleware/checkAdmin");

router.route("/register").post(register);
router.route("/register").get((req, res) => res.send("Hello World!"));

router.route("/login").post(login);


router.use(verifyAccessToken);
router.use(checkAdmin);


module.exports = router;
