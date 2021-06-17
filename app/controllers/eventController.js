const EventModel = require ('../models/eventModel');

module.exports = {
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
            
            const eventUpdate = await EventModel.participationEvent(userId,req.params.id);

            const newEvent =  await EventModel.findEventUpdate(event.dataValues.id);
            res.status(200).json({data: newEvent})

        } catch (error) {
            console.trace(error);
            if(error.code == "23505"){
                error = 'Vous etes deja inscrit a cet evenement'
            }else {
                error = `A server error occured, please retry later.`;
            }
            res.json({ error });
        }
    },

    async findEvent(_, res){
        try {
            const event = await EventModel.findEvent();

            if(!event){
                return res.status(401).json({error: `Cet événement n'existe pas`})
            }            
            res.status(200).json({data: event})
        } catch (error) {
            console.trace(error);
            res.json({ error });
        }
    },

    async removeParticipant(req, res, next){
        try {
            const userId = req.user.userId;
            const event = await EventModel.findByPk(req.params.id);

            if (!event){
                return next();
            }
            
    
            const remove = await EventModel.deleteParticipant(userId,req.params.id);
            const newEvent =  await EventModel.findEventUpdate(event.dataValues.id);

            return res.status(200).json({data: newEvent});
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

           /*  if(goodUser !== event.dataValues.user_id){
                
                return res.status(404).json({error: `Vous n'avez pas l'autorisation d'enlever cet evenement`})
            } */
    
            const remove = await EventModel.deleteEvent(goodUser,req.params.id);
           
            return res.status(200).json({data: 'Event supprimé', remove});

        } catch (error) {
            console.trace(error);
            res.json({ error });
        }
    }
}