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


const { 
    insertSchema: gameInsertSchema, 
    updateSchema: gameUpdateSchema,
}  = require('./gameSchema');

const { 
    insertSchema: editorInsertSchema, 
    updateSchema: editorUpdateSchema,
}  = require('./editorSchema');

const { 
    insertSchema: themeInsertSchema, 
    updateSchema: themeUpdateSchema,
}  = require('./themeSchema');

const { 
    insertSchema: categoryInsertSchema, 
    updateSchema: categoryUpdateSchema,
}  = require('./categorySchema');

module.exports = { userInsertSchema,  userUpdateSchema, eventInsertSchema, 
    eventUpdateSchema, messageInsertSchema, gameInsertSchema, gameUpdateSchema, 
    editorInsertSchema, editorUpdateSchema, themeInsertSchema, themeUpdateSchema, categoryInsertSchema, categoryUpdateSchema};