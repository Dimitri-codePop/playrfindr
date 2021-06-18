const { 
    insertSchema: userInsertSchema, 
    updateSchema: userUpdateSchema,
}  = require('./userSchema');

const { 
    insertSchema: eventInsertSchema, 
    updateSchema: eventUpdateSchema,
}  = require('./eventSchema');


const { 
    insertSchema: messageInsertSchema, 
    updateSchema: messageUpdateSchema,
}  = require('./messageSchema');
module.exports = { userInsertSchema,  userUpdateSchema, eventInsertSchema, eventUpdateSchema, messageInsertSchema, messageUpdateSchema};