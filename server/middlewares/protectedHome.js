const jwt = require("jsonwebtoken");
require("dotenv").config();

const validateUser = (req, res, next) => {
  try {
    const auth = req.headers.authorization;
    if (!auth) {
      return res.status(401).json({ err: "No authorization header provided" });
    }

    const [authType, tokenValue] = auth.split(" ");

    if (authType !== "Bearer" || !tokenValue) {
      return res
        .status(401)
        .json({ err: "Invalid authorization header format" });
    }

    const decoded = jwt.verify(tokenValue, process.env.SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ err: "Invalid token" });
  }
};
module.exports = validateUser;
