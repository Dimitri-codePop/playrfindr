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

    static async findAllEvent(){
        const result = await client.query(`SELECT "event".*, "user"."firstname", "user"."lastname",
        ARRAY_AGG( DISTINCT user_has_event.user_id) AS participant
        FROM "event" 
        JOIN "user" ON "event"."user_id" = "user"."id" 
        JOIN "user_has_event" ON "event"."user_id" = "user_has_event"."user_id"
        group by "event"."id", "user"."firstname", "user"."lastname";`); 
        return result.rows;
    }

    static async findOneEvent(event_id){
        
        const result = await client.query(`SELECT DISTINCT event.* as event,
        ARRAY_AGG(DISTINCT "user"."firstname") AS firstname,
        ARRAY_AGG(DISTINCT "user"."lastname") AS lastname,
        ARRAY_AGG(DISTINCT "department"."number") AS departement
        FROM "event" 
        JOIN "user_has_event" ON "event"."id" = "user_has_event"."event_id"
        JOIN "user" ON "user_has_event"."user_id" = "user"."id"
        JOIN "department" ON "user"."id" = "department"."id"
        WHERE "event"."id" = $1
        GROUP BY "event"."id";
        `, [event_id]);
        return result.rows;
    }

    static async findAllUserEvent(id){
    
        const result = await client.query(`SELECT count(*) AS count
            FROM user_has_event
            WHERE user_has_event.event_id = $1;`, [id]);
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