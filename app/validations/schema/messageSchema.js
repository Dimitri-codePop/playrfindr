const Joi = require('joi');

const insertSchema = Joi.object({
    content: Joi.string().required().min(5),
}).required();


module.exports = { insertSchema };