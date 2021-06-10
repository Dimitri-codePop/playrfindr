const Joi = require('joi');

const insertSchema = Joi.object({
    firstname: Joi.string().required().min(2),
    lastname: Joi.string().required().min(2),
    email: Joi.string().email({ tlds: { allow: false } }).required(),
    birthdate: Joi.date().required().max('now'),
    password: Joi.string().required().min(6),
    passwordConfirm: Joi.string().required().min(6),
    department_id: Joi.number().integer().required()
}).required();

const updateSchema = Joi.object({
    firstname: Joi.string().min(2),
    lastname: Joi.string().min(2),
    email: Joi.string().email({ tlds: { allow: false } }).length(2),
    birthdate: Joi.date().max('now'),
    password: Joi.string().min(6),
    department_id: Joi.number().integer()
}).required();

module.exports = { insertSchema, updateSchema };