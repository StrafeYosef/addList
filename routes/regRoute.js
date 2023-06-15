const router = require("express").Router();
const { registerCtrl } = require("../controllers/registerCtrl.js");

router.get("/getUsers", registerCtrl.getUsers);
router.post("/setUser", registerCtrl.setUser);

module.exports = router;
