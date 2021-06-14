const { 
    insertSchema: userInsertSchema, 
    updateSchema: userUpdateSchema,
}  = require('./userSchema');

const { 
    insertSchema: eventInsertSchema, 
    updateSchema: eventUpdateSchema,
}  = require('./eventSchema');

module.exports = { userInsertSchema,  userUpdateSchema, eventInsertSchema, eventUpdateSchema};