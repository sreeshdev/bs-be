var yup = require("yup");

let userSchema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required(),
});
module.exports = userSchema;
