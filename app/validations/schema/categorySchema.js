const Joi = require('joi');

const insertSchema = Joi.object({
    label: Joi.string().required(),
}).required(); 

const updateSchema = Joi.object({
    label: Joi.string().min(1),
}).required(); 

module.exports = { insertSchema, updateSchema };