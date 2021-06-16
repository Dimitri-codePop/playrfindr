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
        
    },
    async addEvent(req, res){
        try { 
            const event = new EventModel(req.body);
            await event.insert();
            return res.json({data: event});
        } catch (error) {
            console.trace(error);
            res.json({ error });
        }
    },
    async participationEvent(req, res){
        try {
            
            const userId = req.user.userId;
            const event = await EventModel.findByPk(req.params.id);
            
            if(!event){
                return res.status(401).json({error: `Cet événement n'existe pas`})
            }
            const eventUdpate = await EventModel.participationEvent(userId,req.params.id);
            
            res.status(200).json({data: eventUdpate})

        } catch (error) {
            console.trace(error);
            res.json({ error });
        }
    },
    async getOneEvent(req, res){
        try {
            const event = await EventModel.findOneEvent(req.params.id);

            const numberUser = await EventModel.findAllUserEvent(req.params.id);

            if(!event){
                return res.status(401).json({error: `Cet événement n'existe pas`})
            }            
            res.status(200).json({data: event, number: numberUser.count})
        } catch (error) {
            console.trace(error);
            res.json({ error });
        }
    },
    async removeParticipant(req, res, next){
        try {
            const event = await EventModel.findByPk(req.params.id);

            if (!event){
                return next();
            }
    
            const goodUser = req.user.userId;
    
            if(!goodUser){
                return res.status(404).json({error: `Vous n'avez pas l'autorisation d'enlever ce participant`})
            }
    
            const remove = await EventModel.deleteParticipant(goodUser,req.params.id);
    
            return res.status(200).json({data: remove});
        } catch (error) {
            console.trace(error);
            res.json({ error });
        }
       
    }, 

    async removeEvent(req, res, next){
        try {
            const event = await EventModel.findByPk(req.params.id);

            if (!event){
                return next();
            }
    
            const goodUser = req.user.userId;
        
            if(!goodUser){
                return res.status(404).json({error: `Vous n'avez pas l'autorisation d'enlever cet evenement`})
            }
    
            const remove = await EventModel.deleteEvent(goodUser,req.params.id);
           
            return res.status(200).json({data: remove});

        } catch (error) {
            console.trace(error);
            res.json({ error });
        }
       


    }
}