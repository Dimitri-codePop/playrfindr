const Joi = require('joi');

const insertSchema = Joi.object({
    content: Joi.string().required().min(5),
    recipient_id: Joi.number().integer().required().min(1),
    user_id: Joi.number().integer().required().min(1),
}).required();

const updateSchema = Joi.object({
    content: Joi.string().min(5),
    recipient_id: Joi.number().integer().min(1),
    user_id: Joi.number().integer().min(1),
}).required();

module.exports = { insertSchema, updateSchema };