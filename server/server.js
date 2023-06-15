const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");
const { routesInit } = require("./routes/configRoutes");

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});
routesInit(app);

app.listen(process.env.PORT, (err) => {
  if (err) return console.log(err);
  console.log("Server - running.");
});

mongoose
  .connect(process.env.DB)
  .then(() => {
    console.log("DB - connected.");
  })
  .catch((err) => {
    console.log("yosef did u use again ur laptop for gods sake" + err);
  });
