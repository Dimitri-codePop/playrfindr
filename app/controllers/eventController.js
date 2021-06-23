const EventModel = require ('../models/eventModel');
const fetch = require('node-fetch');


module.exports = {

    async getAll(_, res) {
        try {
            const events = await EventModel.findAll();

            return res.status(200).json({data: events.dataValues})
        } catch (error) {
            console.trace(error);
            res.json({ error });
        }
    },


    async addEvent(req, res){
        try { 
            const apiUrl = process.env.API_URL;
            const event = new EventModel(req.body);
            await event.insert();

            const result = await fetch(`${apiUrl}forward?access_key=${process.env.API_KEY}&query=${event.dataValues.number_address} ${event.dataValues.address} , ${event.dataValues.town}`)
         
            const body = await result.json();
          
            return res.json({data: event.dataValues, latitude: body.data[0].latitude, longitude: body.data[0].longitude});
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

            if(goodUser !== event.dataValues.user_id){
                
                return res.status(404).json({error: `Vous n'avez pas l'autorisation d'enlever cet evenement`})
            } 
            const remove = await EventModel.deleteEvent(goodUser,req.params.id);
           
            return res.status(200).json({data: 'Event supprimé', remove});

        } catch (error) {
            console.trace(error);
            res.json({ error });
        }
    },


    async updateEvent(req, res, next) {
        try {

            const event = await EventModel.findByPk(req.params.id);

            if(!event){
                return next();
            }
        

            await event.update(req.body);
             
            const eventUpdate = await EventModel.findByPk(req.params.id);
            
            return res.status(200).json({data: eventUpdate});
            
        } catch (error) {
            console.trace(error);
            res.json({ error });
        }
        
    },
    async deleteEvent(req, res, next) {
        try {
            const event = await EventModel.findByPk(req.params.id);
            
            if(!event){
                return next();
            }

            await event.delete();

            res.status(200).json({message: `Event supprimé`});
        } catch (error) {
            console.trace(error);
            res.json({ error });
        }
    }
}