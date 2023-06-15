const router = require("express").Router();
const { loginCtrl } = require("../controllers/loginCtrl.js");

router.post("/loginSetUser", loginCtrl.setUser);

module.exports = router;
