const MessageModel = require('../models/messageModel');
const UserModel = require('../models/userModel')

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
    async sendMessage (req, res){
        try {

            const user = await UserModel.findByPk(req.params.id);
            
            if(!user){
                res.status(403).json({error: `Cet utilisateur n'existe pas`});
            } 

            const message = await MessageModel.sendMessageToUser(req.body.content,req.params.id,req.user.userId);
            return res.status(200).json({message: `Votre message a bien été envoyé`})

        } catch (error) {
            console.trace(error);
            res.status(500).json({error});
        }
    },
    async deleteMessage(req, res, next) {
        try {

            const messageFound = await MessageModel.findByPk(req.params.id);
            if(!messageFound){
                return next();
            }
            console.log(messageFound);

            if (req.user.userId !== messageFound.dataValues.recipient_id){
                return res.status(403).json({error: `Delete not possible`})
            }

            const message = await MessageModel.deleteMessage(req.params.id);
            res.status(200).json({message: `Message send`})
        } catch (error) {
            console.trace(error);
            res.status(500).json({error});
        }
    }
} 