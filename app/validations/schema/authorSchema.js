const Joi = require('joi');

const insertSchema = Joi.object({
    firstname: Joi.string().required(),
    lastname:  Joi.string().required()
}).required(); 

const updateSchema = Joi.object({
    firstname: Joi.string(),
    lastname:  Joi.string()
}).required(); 

module.exports = { insertSchema, updateSchema };