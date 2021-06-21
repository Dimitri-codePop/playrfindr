const client = require('../client');
const CoreModel = require('./coreModel');

/**
 * @typedef Message
 * @property {number} id - Identifiant unique
 * @property {string} content - Contenue du message
 * @property  {string} date - Date du message
 * @property  {number} recipient_id - Id du destinataire
 * @property  {number} user_id - Id de l'envoyeur
 * @property {string} created_at - Date de création de l'auteur (date ISO 8601)
 * @property {string} updated_at - Date de mise à jour de l'auteur (date ISO 8601)
 * @property {string} deleted_at - Date de suppression de l'auteur (date ISO 8601)
 */

/**
 * @typedef MessageInput
 * @property {string} content - Contenue du message
 * @property  {string} date - Date du message
 * @property  {number} recipient_id - Id du destinataire
 * @property  {number} user_id - Id de l'envoyeur
 */


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