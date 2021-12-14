const validateRequest = (schema) => async (req, res, next) => {
  try {
    await schema.validate({
      body: req.body,
      query: req.query,
      params: req.params,
      abortEarly: false,
    });

    return next();
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};

module.exports = validateRequest;
