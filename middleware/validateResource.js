const validateResourceMW = (resourceSchema) => async (req, res, next) => {
  console.log(req);
  const resource = req.body;
  try {
    // throws an error if not valid
    await resourceSchema.validate(resource);
    next();
  } catch (e) {
    console.error(e);
    res.status(400).json({ error: e.errors.join(", ") });
  }
};

module.exports = validateResourceMW;
