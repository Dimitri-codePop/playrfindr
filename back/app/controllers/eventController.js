const EventModel = require ('../models/eventModel');


module.exports = {

    async getAll(_, res, next) {
        try {
            const events = await EventModel.findAll();

            if(!events){
                return next();
            }
            
            res.json({ data: events.map(event => event.dataValues)});
        } catch (error) {
            console.trace(error);
            res.json({ error });
        }
        
    }
}