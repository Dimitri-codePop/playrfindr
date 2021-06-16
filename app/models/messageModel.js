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
        const result = await client.query(`SELECT "message"."content", "message"."date", "user"."firstname", "user"."lastname", "user"."email"
        FROM "message" 
        JOIN "user" ON "user"."id" = "message"."user_id"
        WHERE NOT "user_id"  = $1;`, [id]);
        return result.rows;
    }

}

module.exports = MessageModel;