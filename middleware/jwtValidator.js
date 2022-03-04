const jwt = require("jsonwebtoken");
const jwtValidateResourceMW = (resourceSchema) => async (req, res, next) => {
  console.log(req);
  const token = req.headers.authorization;
  try {
    // throws an error if not valid
    if (token) {
      console.log(token);
      var decoded = jwt.verify(token, "batterySmaRT");
      next();
    } else {
      res.status(400).json({ message: "Token not in headers" });
    }
  } catch (e) {
    console.error(e);
    res.status(400).json({ error: e });
  }
};

module.exports = jwtValidateResourceMW;
