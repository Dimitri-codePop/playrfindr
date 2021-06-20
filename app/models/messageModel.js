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
        const result = await client.query(`SELECT  "message"."id", "message"."content", "message"."date", "user"."firstname","user"."lastname"
        FROM message 
        JOIN "user" ON message.user_id = "user".id
        WHERE recipient_id = $1
        ORDER BY "date" DESC;`, [id]);

        return result.rows;
    }

    static async sendMessageToUser(content, recipient_id, user_id){
        const result = await client.query(`INSERT INTO "message" ("content", "recipient_id", "user_id") VALUES ($1,$2,$3)`, [content, recipient_id, user_id]);
        return result.rows;
    }

    static async deleteMessage(id){
        const result = await client.query(`DELETE FROM "message" WHERE id = $1`, [id]);
        return result.rows;
    }
    

}

module.exports = MessageModel;