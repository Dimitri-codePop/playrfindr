const Joi = require('joi');

const insertSchema = Joi.object({
    firstname: Joi.string().required().min(2),
    lastname: Joi.string().required().min(2),
    email: Joi.string().email({ tlds: { allow: false } }).required(),
    birthdate: Joi.date().required().max('now'),
    password: Joi.string().required().min(6),
    passwordConfirm: Joi.string().required().min(6),
    department_id: Joi.number().integer().required(),
    is_admin:Joi.boolean(),
    theme_id: Joi.array().items(Joi.number().integer()).required().max(3),
    category_id: Joi.array().items(Joi.number().integer()).required().max(3)
}).required();

const updateSchema = Joi.object({
    firstname: Joi.string().min(2),
    lastname: Joi.string().min(2),
    email: Joi.string().email({ tlds: { allow: false } }).length(2),
    birthdate: Joi.date().max('now'),
    password: Joi.string().min(6),
    department_id: Joi.number().integer(),
    is_admin:Joi.boolean(),
    theme_id: Joi.array().items(Joi.number().integer()).min(1),
    category_id: Joi.array().items(Joi.number().integer()).min(1)
}).required();

module.exports = { insertSchema, updateSchema };