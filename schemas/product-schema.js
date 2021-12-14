const yup = require("yup");

const createProductSchema = yup.object({
  body: yup.object({
    name: yup.string().min(4).max(32).required(),
    price: yup.number().positive().required(),
    qty: yup.number().positive(),
  }),
});

module.exports = { createProductSchema };
