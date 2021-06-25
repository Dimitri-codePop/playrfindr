const Joi = require('joi');

const insertSchema = Joi.object({
    label: Joi.string().required(),
    duration: Joi.number().integer().required().min(5),
    player_min: Joi.number().integer().required().min(1),
    player_max: Joi.number().integer().required().positive().min(1),
    age_min: Joi.number().integer().required().positive().min(1),
    picture: Joi.string(),
    year: Joi.number().integer().required(),
    describe: Joi.string().required(),
    editor_id: Joi.number().integer().required().min(1),
    author_id: Joi.array().items(Joi.number().integer()).required().min(1),
    category_id:Joi.array().items(Joi.number().integer()).required().min(1),
    theme_id: Joi.array().items(Joi.number().integer()).required().min(1),
}).required(); 

const updateSchema = Joi.object({
    label: Joi.string().min(1),
    duration: Joi.number().integer().min(1),
    player_min: Joi.number().integer().min(1),
    player_max: Joi.number().integer().positive().min(1),
    age_min: Joi.number().integer().positive().min(1),
    picture: Joi.string(),
    year: Joi.number().integer(),
    describe: Joi.string(),
    editor_id: Joi.number().integer().min(1),
    author_id: Joi.array().items(Joi.number().integer()).min(1),
    category_id:Joi.array().items(Joi.number().integer()).min(1),
    theme_id: Joi.array().items(Joi.number().integer()).min(1),
}).required(); 

module.exports = { insertSchema, updateSchema };