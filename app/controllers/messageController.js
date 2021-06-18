const MessageModel = require('../models/messageModel');

module.exports = {
    async getAll(req, res, next){
        try {
            const message = await MessageModel.findAllMessageByUser(req.user.userId);
            if(!message){
                return next();
            }
            return res.status(200).json({data: message});
        } catch (error) {
            console.trace(error);
            res.status(500).json({error});
        }
    },
    async sendMessage (req, res, next){
        try {
            const user = await MessageModel.findByPk(req.params.id);
            
            if(!user){
                res.status(403).json({error: `Cet utilisateur n'existe pas`});
            }


        } catch (error) {
            console.trace(error);
            res.status(500).json({error});
        }


    }
} 