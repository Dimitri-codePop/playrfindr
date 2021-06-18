const client = require('../client');
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

    static async findAllMessageByUser(id){
        const result = await client.query(`select  "message"."content", "message"."date", "user"."firstname","user"."lastname"
        FROM message 
        JOIN "user" ON message.user_id = "user".id
        WHERE recipient_id = $1;`, [id]);

        return result.rows;
    }

}

module.exports = MessageModel;