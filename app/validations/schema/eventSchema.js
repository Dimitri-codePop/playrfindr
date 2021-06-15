const Joi = require('joi');

const insertSchema = Joi.object({
    label: Joi.string().required().min(2),
    content: Joi.string().required().min(2),
    date: Joi.date().required().min('now'),
    location: Joi.string().required().min(10),
    max_player: Joi.number().integer().required().min(1),
    user_id: Joi.number().integer().required().min(1)
}).required();

const updateSchema = Joi.object({
    label: Joi.string().min(2),
    content: Joi.string().min(2),
    date: Joi.date().min('now'),
    location: Joi.string().min(10),
    max_player: Joi.number().integer().min(1),
    user_id: Joi.array().items(Joi.number().integer()).max(1)
}).required();

module.exports = { insertSchema, updateSchema };