var yup = require("yup");

let userSchema = yup.object({
  name: yup.string().required(),
  criteria: yup.string().required(),
  value: yup.number().required(),
  days: yup.string().required(),
  email: yup.string().email().required(),
  phone: yup.string().required(),
});
module.exports = userSchema;
