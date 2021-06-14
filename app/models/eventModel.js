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
        const result = await client.query(`SELECT "event".*, "user"."firstname", "user"."lastname" from "event" join "user" on "event"."user_id" = "user"."id" group by "event"."id", "user"."firstname", "user"."lastname";`);
        return result.rows;
    }
}

module.exports = EventModel;