const EventModel = require ('../models/eventModel');


module.exports = {

    async getAll(_, res, next) {
        try {
            const events = await EventModel.findAllEvent();

            if(!events){
                return next();
            }
            return res.json({ data: events.map(event => event) });
        } catch (error) {
            console.trace(error);
            res.json({ error });
        }
        
    }
}