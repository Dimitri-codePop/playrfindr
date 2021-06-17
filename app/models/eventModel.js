const CoreModel = require('./coreModel');
const client = require ('../client');

class EventModel extends CoreModel {

    static fields = [
        'label',
        'content',
        'date',
        'location',
        'user_id'
    ];

    static tableName = 'event';

    constructor(obj){
        super(obj);
    }

    static async findEvent(){
        
        const result = await client.query(`SELECT event.* as event,
        ARRAY_REMOVE(ARRAY_AGG("user"."firstname"), NULL) AS firstname,
        ARRAY_REMOVE( ARRAY_AGG("user"."lastname"), NULL) AS lastname
        FROM "event" 
        LEFT JOIN "user_has_event" ON "event"."id" = "user_has_event"."event_id"
        LEFT JOIN "user" ON "event"."user_id" = "user"."id"
        GROUP BY "event"."id";`);
        return result.rows;
    }

    static async findEventByPk(id){
        
        const result = await client.query(`SELECT "event".*, 
        ARRAY_AGG("user"."firstname") AS firstname,
        ARRAY_AGG("user"."lastname") AS lastname
        FROM event 
        JOIN "user_has_event" ON "user_has_event"."event_id" = "event"."id"
        JOIN "user" ON "user_has_event"."user_id" = "user"."id"
        WHERE "event"."id" = $1
        GROUP BY  "event"."id";`,[id]);
        return result.rows[0];
    }

    static async participationEvent(user, event){
        const result =  await client.query(`INSERT INTO "user_has_event" ("user_id", "event_id") VALUES ($1, $2) RETURNING *`, [user, event]);
       return result.rows[0];
    }


    static async deleteParticipant(user, event){
        const result = await client.query(`DELETE FROM "user_has_event" WHERE "user_has_event"."user_id" = $1 AND "user_has_event"."event_id" = $2`, [user, event]);
        return result.rows[0];
    }

    static async deleteEvent(user, event){
        const result = await client.query(`DELETE FROM "event" WHERE "event"."user_id" = $1 AND "event"."id" = $2`, [user, event]);
        return result.rows;
    }
}

module.exports = EventModel;