const CoreModel = require('./coreModel');

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

}

module.exports = EventModel;