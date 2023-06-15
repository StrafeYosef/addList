const regRoute = require("./regRoute");
const loginRoute = require("./loginRoute");
const homeRoute = require("./homeRoute");
const validateUser = require("../middlewares/protectedHome.js");

exports.routesInit = (app) => {
  app.use("/userRegister", regRoute);
  app.use("/userLogin", loginRoute);
  app.use("/dashboard", validateUser, homeRoute);
};
