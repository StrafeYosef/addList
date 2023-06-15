const router = require("express").Router();
const validateUser = require("../middlewares/protectedHome.js");

router.get("/", validateUser, (req, res) => {
  const userData = req.user;

  console.log(req.user);

  res.status(200).json({ userData });
});

module.exports = router;
