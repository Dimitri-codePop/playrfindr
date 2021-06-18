const Joi = require('joi');

const insertSchema = Joi.object({
    label: Joi.string().required().min(2),
    content: Joi.string().required().min(2),
    date: Joi.date().required().min('now'),
    number_address: Joi.number().integer().required().positive(),
    address: Joi.string().required().min(2),
    town: Joi.string().required().min(2),
    max_player: Joi.number().integer().required().min(1),
    user_id: Joi.number().integer().required().min(1)
}).required();

const updateSchema = Joi.object({
    label: Joi.string().min(2),
    content: Joi.string().min(2),
    date: Joi.date().min('now'),
    number_address: Joi.number().integer().positive(),
    address: Joi.string().min(2),
    town: Joi.string().min(2),
    max_player: Joi.number().integer().min(1),
    user_id: Joi.number().integer().required().min(1)
}).required();

module.exports = { insertSchema, updateSchema };