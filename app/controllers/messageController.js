const MessageModel = require('../models/messageModel');

module.exports = {
    async getAll(req, res, next){
        
        const user = await MessageModel.findAllMessageByUser(req.user.userId);
          if(!user){
              return next();
          }
          return res.status(200).json({data: user})
    }
} 