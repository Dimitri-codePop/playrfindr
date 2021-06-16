const CoreModel = require('./coreModel');

class MessageModel extends CoreModel {

    static fields = [
        'content',
        'date',
        'recipient_id',
        'user_id'
    ];

    static tableName = 'message';

    constructor(obj){
        super(obj);
    }

    static findAllMessage(id){
        
    }

}

module.exports = MessageModel;