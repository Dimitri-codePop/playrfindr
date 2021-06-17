const MessageModel = require('../models/messageModel');

module.exports = {
    async getAll(req, res, next){
        try {
            const user = await MessageModel.findAllMessageByUser(req.user.userId);
            if(!user){
                return next();
            }
            return res.status(200).json({data: user})
        } catch (error) {
            console.trace(error);
            res.status(500).json({error});
        }
        
      
    }
} 